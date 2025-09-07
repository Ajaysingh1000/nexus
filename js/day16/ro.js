

const button = document.querySelector('button')

button.addEventListener('click' , ()=>{

    let a = Number(document.getElementById("first").value)
    let b = Number(document.getElementById("second").value)
    let c = a + b
    let res = document.getElementById("result")
    res.innerHTML = 'Result: ' + c

    
})