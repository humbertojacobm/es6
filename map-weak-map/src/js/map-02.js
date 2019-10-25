console.log("hi, map 02");

var myMap = new Map();

//API
/*
set()
get()
size
clear()
has()
*/

var myObj = {};
var myFunc = function(){};

myMap.set(myObj,'bar');
myMap.set(myFunc,'world');
myMap.set('string',2);

//iterators
//keys()
//entries()
//values

for(var [key, value] of myMap.entries()){
   console.log(key + ' = ' + value);
}