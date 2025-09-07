const state = {
    slice1 : {
        count : 0
    },
    slice2 : {
        count : 2,
        name : "Rohit"
    },
    slice3 : {
        login : true 
    }
}

// how to access count in slice1 
// => state.slice1.count

// actions : {type : "slice/Increment" , payload}