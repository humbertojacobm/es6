function varFunc(){
    var previous = 0;
    var current = 1;
    var i;
    var temp;
    for(i=0; i<10; i += 1){
        temp = previous;
        previous = current;
        current = temp + current;
        console.log(`temp: ${temp},
        previous: ${previous},
        current: ${current}`);
    }
}
function letFunc(){
    let previous = 0;
    let current = 1;

    for (let i = 0; i < 10; i++) {
        let temp = previous;
        previous = current;
        current = temp + current;
        console.log(`temp: ${temp},
        previous: ${previous},
        current: ${current}`);
    }
}
console.log('hi');
varFunc();
console.log('bye');
letFunc();
