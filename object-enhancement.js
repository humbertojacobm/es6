console.log("hi object enhancement");

var color = "red";
var speed = 10;
var drive = "go";
var car = {
    color,
    speed,
    [drive]: function(){
        console.log("vroom");
    },
    go2(){
        console.log("vroom2");
    }
}

console.log(car.color);
console.log(car.speed);

car.go();
car.go2();