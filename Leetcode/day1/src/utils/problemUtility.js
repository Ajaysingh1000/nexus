const axios = require("axios");

// [
//     {
//       "token": "db54881d-bcf5-4c7b-a2e3-d33fe7e25de7"
//     },
//     {
//       "token": "ecc52a9b-ea80-4a00-ad50-4ab6cc3bb2a1"
//     },
//     {
//       "token": "1b35ec3b-5776-48ef-b646-d5522bdeb2cc"
//     }
//   ]


const getLanguageByID = (lang)=>{

    const language = {
        "c++":54,
        "java":62,
        "javascript":63
    }

    return language[lang];
}


const submitBatch = async (submissions) =>{


        const options = {
        method: 'POST',
        url: 'https://judge0-ce.p.rapidapi.com/submissions',
        params: {
            base64_encoded: 'false',
            wait: 'false',
            fields: '*'
        },
        headers: {
            'x-rapidapi-key': '5e231b5f3fmsh1558243d38e620fp10be71jsnb8ed0c509343',
            'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        data: {
            submissions
        }
        }; 

        async function getData() {
            try {
                const response = await axios.request(options);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        return await getData();
    
}

const waiting = async (time) => {
        setTimeout(() => {
            return 1;
        }, time);
}


const submitToken = async (resultToken) => {
    const options = {
        method: 'GET',
        url: 'https://ce.judge0.com/submissions/batch',
        params: {
            tokens: resultToken.join(','),
            base64_encoded: 'false',
            fields: 'token,stdout,stderr,status_id,language_id'
        }
    };

    async function getData() {
        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
    
    // agar result 1 and 2 aaya toh wo queue mai hoga ya phir process ho raha
    // hoga to isliye mujhe function ko wapis chalana hoga 
    while(true){
        const result = await getData();

        const IsResultReady = result.submissions.every((r)=>r.status.id>2);

        if (IsResultReady){
            return result.submissions;
        }
        await waiting(1000);
    }
    

};

module.exports = {getLanguageByID,submitBatch,submitToken}
