
const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child"); 

// event bubbling and event capturing
// addEventListener(first_event, callback , capture)
// capture ki value agar false hui to event bubbling hoga
// capture ki value agar false hui to event capturing hoga
// capture ki value default false hui hai

// event bubbling => child then parent then grandParent
// event capturing => grandParent then parent then child

// andhar se event trigger hoga tabhi me trigger honga => event bubbling
// andhar capture false hoga tabhi bhar se andhar ki tarah trigger hoga => event capturing 

// grandParent.addEventListener('click' , (event)=>{
//     // console.log("grand parent"); 
//     console.log(event.target);
// },false)
// parent.addEventListener('click' , (event)=>{
//     // console.log("parent");
//     console.log(event.target);
// },false)
// child.addEventListener('click' , (event)=>{
//     // console.log("child");
//     console.log(event.target);
// },false)

