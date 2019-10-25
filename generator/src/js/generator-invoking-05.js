console.log("hi, generator inv05");

function* greet(){
    
    let friendly = yield "How";
    
    friendly = yield friendly + "are";
    
    yield friendly + "you?";
    
}

var greeter = greet();

console.log(greeter.next("first").value);
console.log(greeter.next(" the heck ").value);
console.log(greeter.next(" silly ol' ").value);