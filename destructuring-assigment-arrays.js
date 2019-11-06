var [first,,,,fifth] = ["red","yellow","green", "blue","orange"];

console.log(first);
console.log(fifth);

var people = [
    {
        "firstName": "Clinton",
        "lastName": "Ruiz",
        "phone": "1-403-985-0449",
        "email": "correo1@gmail.com",
        "address": "av. real audiencia",        
    },
    {
        "firstName": "vanessa",
        "lastName": "gamarra",
        "phone": "1-403-985-789",
        "email": "vane@gmail.com",
        "address": "av. real audiencia",        
    },
    {
        "firstName": "emmy",
        "lastName": "gamarra",
        "phone": "1-403-985-789",
        "email": "emmy@gmail.com",
        "address": "av. la capilla",        
    },
    {
        "firstName": "stward",
        "lastName": "mori",
        "phone": "1-403-985-123",
        "email": "stwared@gmail.com",
        "address": "av. real calle",        
    }
]

people.forEach(({firstName})=> console.log(firstName));

var [,vanessa] = people;

function logEmail({email}){
    console.log(email);
}

logEmail(vanessa);