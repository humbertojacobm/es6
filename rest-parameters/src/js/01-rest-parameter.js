console.log("hi, 01 rest parameters");

console.log("we are trying to iterate orver <<arguments>>");

function myFunc(){
    arguments.forEach(function(v,i,a){
        console.log(v);
    });
    //onsole.log(arguments);
}


myFunc(1,2,3,"a");
