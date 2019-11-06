console.log("hi string templates");
var salutation = "hello";
var greeting = salutation + ", world";
var place = "planet";
var greeting2 = `
${salutation}
, 
    you 
      crazy
          ${place}
how 
   are 
     you?
`;

console.log(greeting);
console.log(greeting2);

var x = 1;
var y = 2;
var equation = `
${x} + ${y} = ${x+y}
`;

console.log(equation);

function tag(strings, ...values){
    console.log(strings);
    console.log(values);
}

function tag2(strings, ...values){
    if (values[0]<20) {
        values[1] = "awake";
    }
    return ` ${strings[0]}${values[0]}${strings[1]}${values[1]}  `
}

var message = tag2`It's ${new Date().getHours()} I'm ${""}`;
console.log(message);
