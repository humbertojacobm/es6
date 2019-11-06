console.log("hi, 02 rest parameters");

console.log("how to pass parameters inside of other callback functions in ES5");

function Store(){
    var aisle = {
        fruit : [],
        vegetable : []
    }
    return {
        add: function(category) {
           var items = [].splice.call(arguments,1);
           //console.log(items);
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
