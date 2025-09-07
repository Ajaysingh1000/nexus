
// key value pair: key should be unique

const map1 = new Map()
// adding values in the map
map1.set(3,90)
map1.set("Rohit",45)
map1.set(20,"Mohan")

// delete using key
map1.delete("Rohit")

// check key is present or not 
map1.has("Rohit")
// console.log(map1);

//size
// console.log(map1.size);

const map2 = new Map([
    [1 , "ajay"],
    [2 , "mohan"],
    [3 , "sohan"],
    ["vasu" , "viya"],
    ["kot" , "mon"],

])

console.log(map2);

// also we can iterate map 


