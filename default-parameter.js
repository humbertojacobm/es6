
function greet(greeting, name){
    console.log(greeting + ", "+name);
}

function greet2 (greeting, name = "jhon"){
    console.log(greeting + ", "+name);
}

function receive(complete){
    complete();
}

function receive2 (complete = function(){
    console.log("complete2");
}){
    complete();
}

function arrawReceive (complete = () => console.log("complete3")){
    complete();
}

let arrowReceive2 = (complete = () => console.log("complete4")) => complete() ;

greet();
greet2();

greet2("Hello");
greet2("hello", "bill");
//receive();
receive(function(){
    console.log("complete");
});
receive2();
arrawReceive();
arrowReceive2();