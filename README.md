ES6
JAVASCRIPT 2015
WEBPACK 4
EXPORT MODULES.

https://babeljs.io/setup#installation

   npm install --save-dev babel-loader @babel/core
   module: {
     rules: [
       { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
     ]
   }

   npm install @babel/preset-env --save-dev

   {
      "presets": ["@babel/preset-env"]
   }

https://babeljs.io/docs/en/babel-plugin-transform-es2015-modules-umd

   npm install --save-dev babel-plugin-transform-es2015-modules-umd

   {
     "plugins": ["transform-es2015-modules-umd"]
   }   

#1
export {sumTwo, sumThree};

#2
export function sumTwo(a,b){...}

#3
import {sumTwo as addTwoNumber,
    sumThree
} from './maths/addition2'

#4
import * as addition2 from './maths/addition2'

#5
console.log(
    "2 + 3 = ",
    addition2.sumTwo(2,3)
);

#6
npm install --save lodash
https://lodash.com/

#7
import * as _ from 'lodash';
//////_.where(users,{age:36})
_.filter(users,{age:36})
