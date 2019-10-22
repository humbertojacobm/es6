console.log("hi, from main in export-module-folder, using webpack and babel");

//v2

// import {sumTwo as addTwoNumber,
//     sumThree
// } from './maths/addition2'

// console.log(
//     "2 + 3 = ",
//     addTwoNumber(2,3)
// );

// console.log(
//     "2 + 3 + 5 = ",
//     sumThree(2,3,5)
// );
import * as _ from 'lodash';
import * as addition2 from './maths/addition2'
import {users} from './data/users'

//console.log(users);
console.log(_.filter(users,{age:36}));

console.log(
    "2 + 3 = ",
    addition2.sumTwo(2,3)
);

console.log(
    "2 + 3 + 5 = ",
    addition2.sumThree(2,3,5)
);
