console.log("hi, 03 rest parameters");

console.log("using destructuring assigment for pass parameters");

function Store(){
    var aisle = {
        fruit : [],
        vegetable : []
    }
    return {
        add: function(category, ...items) {           
           console.log(items);
           items.forEach(function(value,index,array){
              aisle[category].push(value);
           })
        },
        aisle : aisle
    }
}

var myGroceryStore = new Store();
myGroceryStore.add('fruit','apples','oranges');
console.log(myGroceryStore.aisle);
