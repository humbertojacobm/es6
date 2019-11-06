console.log("hi destructuring assigment");
var {color,position} = {
    color: "blue",
    name: "John",
    state: "New York",
    position: "Fordward"
}
console.log(color);
console.log(position);

function generateObj(){
    return {color,position} = {
        color: "blue",
        name: "John",
        state: "New York",
        position: "Fordward"
    }
}

// var {name,state} = generateObj();
// console.log(name);
// console.log(state);

var {name:firstName2,state:location2} = generateObj();
console.log(firstName2);
console.log(location2);