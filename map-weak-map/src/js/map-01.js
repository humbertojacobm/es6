console.log("hi, map´01");

var myMap = new Map();

//API
/*
set()
get()
size
clear()
has()
*/

myMap.set('foo','bar');
myMap.set('hello','world');

console.log(myMap.get('foo'));
console.log(myMap.get('hello'));
//console.log(myMap.get('querty'));
console.log(myMap.size);

// myMap.clear();

// console.log(myMap.size);

console.log(myMap.has('foo'));
console.log(myMap.has('querty'));

//iterators
//keys()
//entries()
//values

for (var key of myMap.keys()) {
   console.log(key);   
}

for(var value of myMap.values()){
   console.log(value);
}

for(var [key, value] of myMap.entries()){
   console.log(key + ' = ' + value);
}