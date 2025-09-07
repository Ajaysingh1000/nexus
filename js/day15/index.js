


// function attach(content) {

//     let ele = document.createElement('li')
//     ele.innerHTML = content
//     const parent = document.getElementById('root')
//     parent.appendChild(ele)
    
// }

// function attach(content) {

//     let el1 = document.createElement('li')
//     el1.innerHTML = content
//     let el2 = document.createElement('li')
//     el2.innerHTML = content + "V2.0"
//     const parent = document.getElementById('root')
//     parent.append(el1,el2)
    
// }

// attach("TS")
// attach("TECH")
// attach("JS")
// attach("HTML")

// const element = document.createTextNode("Hello world")
// const parent = document.getElementById('root')
// parent.appendChild(element)


// const element = document.createAttribute("id")
// element.value = "first"
// const curr = document.querySelector("li")
// curr.setAttributeNode(element)


// const element = document.getElementById("root")
// let sec = element.children[1]
// const e = document.createAttribute("id")
// e.value = "first"
// sec.setAttributeNode(e)
// const curr = document.querySelector("li")
// curr.setAttributeNode(element)


// access attributes of an element 
// const element = document.getElementById("root")
// console.log(element.getAttribute("id"));
// console.log(element.getAttribute("class"));

// setting the attributes of an element
// create bhi kar sakta hai and agar exist kar sakta hai to update karega
// element.setAttribute("command" , "oyes")

const element = document.getElementById("root")
// console.log(element);
const e = document.createElement("li")
e.innerHTML = "Ajax"
// element.prepend(e) // add at first
// element.append(e) // add at last
// console.log(element.children);
const s = element.children[1]
// element.insertBefore(e,s)  // add in between


// element.innerHTML +=  "<li>Angular</li>"

// remove the child 
const x = document.querySelector("li")
element.removeChild(x)




