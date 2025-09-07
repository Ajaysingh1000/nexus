

let form = document.querySelector('form');
// events in form
// input => kuch bhi likhuga usko select karega
// change => agar mene likh diya hai and mai kahi dusri jagah click karah to 
// wo value print ho jayegi
// focus => bubble nahi hoga 
// focusin => bubble nahi hoga 
// submit
// reset


form.addEventListener('submit' , (event)=>{

    event.preventDefault() // page isse se refresh nahi hoga
    // console.log('form submitted');
    // const userName = document.getElementById('first').value;
    // const lastName = document.getElementById('second').value;
    // const age = document.getElementById('third').value;
    // const result = document.getElementById('result');
    // result.innerHTML = `<h3> Hello ${userName} ${lastName} ${age} </h3>`
    const body = document.body;
    // body.appendChild(result);

    const form = document.querySelector('form');

    // event bubbling in form 
    // let id1 = event.target
    // let name = id1.UserName.value;
    // let lastName = id1.LastName.value;
    // let age = id1.Age.value;
    // let result = document.getElementById('result');
    // result.innerHTML = `<h3> Hello ${name} ${lastName} ${age} </h3>`
    // // console.log(id1.UserName.value);
    // body.appendChild(result);

    const data  = new FormData(form);
    // console.log(data); // iterator
    // console.log(Array.from(data));
    for (let [key,value] of data.entries())
        console.log(key,value);     
})