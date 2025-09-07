
const element = React.createElement('h1', {}, 'Hello World');
// ReactDOM.render(element, document.getElementById('root'));
// element :50 card pade hue hai 
// console.log(element);


// agar mai multiple tabs ko jaldi jaldi click karta hu to us cheej 
// ko react root container handle karega 
// agar button click hua hai to uska response aayega chahe process bich 
// mai ruk jaye 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);