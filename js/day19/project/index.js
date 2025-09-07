const ans = {q1:"Sachin Tendulkar" , q2:"West Indies", q3:"Sachin Tendulkar", q4:"264" , q5:"Muttiah Muralitharan"}

const form = document.querySelector('form');


form.addEventListener('submit' , (event)=>{
    event.preventDefault();
    // console.log(event.target)
    let data = document.querySelector('form')
    let form = new FormData(data)
    // console.log(typeof form);
    // console.log(form.entries());
    let result = 0;
    for (let [key,value] of form.entries()){

        if (value==ans[key]){
            result++;
        }


    }

    let res = document.getElementById("result")
    // console.log(res.id);
    
    res.innerText =  `${result} out of 5 are correct`
        
    
        
    
})