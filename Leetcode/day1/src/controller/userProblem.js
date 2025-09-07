
const {getLanguageByID , submitBatch} = require("../utils/problemUtility");

const Problem = require("../model/problem");

const submissions = [
    {
        "lanuage_id" : 46,
        "source_code" : "echo hello world",
    }
]

// create problem sirf admin ke liye hoga
const createProblem = async (req,res) => {
    
    const {title, description, difficulty, tags, visibleTestCases, hiddenTestCases,startCode,referenceSolution,problemCreator} = req.body;

    try{

        for (const {language , completeCode} of visibleTestCases) {
            
            // source_code 
            // language_id
            // stdin
            // expected_output
            const languageId = getLanguageByID(language);
            const submissions =  visibleTestCases.map((testcase) =>({
                source_code: completeCode,
                language_id: languageId,
                stdin: testcase.input,
                expected_output: testcase.output
            }))

            const submitResult = await submitBatch(submissions);
            const resultToken = submitResult.map((value)=>{
                return value.token
            })

            const testResult = await submitToken(resultToken);

            for (const result of testResult) {
                // console.log(result);
                if (result.status.id!=3){
                    return res.status(400).send("Test case failed");
                }
            }


        } 

        // We can store it in our db
        await Problem.create({
            ...req.body,
            problemCreator:req.result._id
        })
        res.status(201).send("Problem created successfully");
    }catch(error){
        res.status(400).send(error.message);
    }

}

module.exports = {
    createProblem
}


