


// // styles = {fontSize:"50px",color:"white",backgroundColor:"blue"}

// // React : object 
// // ReactDOM : object


// // this is a normal object 
// const React = {
//     createElement : function(tag,styles,children){
//         const element = document.createElement(tag)
//         for (let key in styles){
//             // javascript ke variable ko aise access karte hai [key] ka use karke 
//             element.style[key] = styles[key]
//         }
//         element.textContent = children
//         return element
        
//     }
// }

// const  ReactDOM = {
//     render : function(element,root){
//         root.appendChild(element)
//     }
// }

// const header1 = React.createElement('h1',{fontSize:"50px",color:"white",backgroundColor:"blue"},"Hello Coder Army")
// const header2 = React.createElement('h2',{fontSize:"30px",color:"pink",backgroundColor:"red"},"kaise ho aap log")


// const ele = document.getElementById('root')
// // const header1 = document.createElement('h1')
// // header1.textContent = "Hello Coder Army"
// // header1.style.backgroundColor = "blue"
// // header1.style.fontSize = "50px"
// // header1.style.color = "white"

// // const header2 = document.createElement('h2')
// // header2.textContent = "kaise ho aap log"
// // header2.style.backgroundColor = "red"
// // header2.style.fontSize = "50px"
// // header2.style.color = "white"

// ReactDOM.render(header1,ele)
// ReactDOM.render(header2,ele)

// // ele.appendChild(header1)
// // ele.appendChild(header2)
// // document.body.appendChild(header1)