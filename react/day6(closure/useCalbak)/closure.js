let b = 10;

function greet(){

    let a = 20;
     
    // is function ko hum closure kehte hai
    function inner(){
        // heap me store hogi value kyuki closure reference store karke rakhta hai
        // kyuki function ko agar mai bhad me use kar phau to kar saku 
        console.log(a);
    }

    return inner
}

let x = greet();

console.log(x);
