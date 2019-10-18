console.log("const declarations");

const VALUE = {};
VALUE.foo = 'bar';
//VALUE = 'bar'; //generate error in constant
console.log('value: ', VALUE);

if(true){
    const foo = 'bar';
}
console.log('foo: '+foo);