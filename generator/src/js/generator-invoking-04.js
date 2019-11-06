console.log("hi, generator inv04");

function* greet(){
    
    yield "How";
    
    yield "are";
    
    yield "you?";
    
}

var greeter = greet();

console.log(greeter.next().value);
console.log(greeter.next().value);
console.log(greeter.next().value);