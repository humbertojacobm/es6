console.log("hi, weak map 03");

var myMap = new WeakMap();

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
//myMap.set('string',2);

//iterators
//keys()
//entries()
//values

for(var [key, value] of myMap.entries()){
   console.log(key + ' = ' + value);
}