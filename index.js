console.log("hola mundo");
var createGreeting = function(message, name){
    return message + name;
}

var arrowGreeting = (message, name) => {
    return message + name;
}

var arrowGreeting2 = (message, name) => message + name;

var arrowGreeting3 = message => message;

var arrowGreeting4 = message => "hello";

var squared = x => x * x;

var deliveryBoy = {
    name: "John",

    handleMessage: function (message, handler) {
        handler(message);
    },

    receive: function(){
        var that = this;
        this.handleMessage("Hello, ", function(message){
             that.name;
             console.log(message + that.name);
        });
    },
    receive2: function(){
        this.handleMessage("Hello, ", message => console.log(message + this.name));
    }
}

deliveryBoy.receive2();


