#webpack-dev-server
https://github.com/webpack/webpack-dev-server

npm install webpack-dev-server --save-dev

#In package.json
"build:dev-server:array-from": "webpack-dev-server --config ./array-from/webpack.config.js"

#to run
npm run build:dev-server:array-from

#to open the expected page
http://localhost:9000/array-from/index.html

#ARRAY-FROM

#return node-list
document.querySelectorAll('.product-price')

#convert to an array easy to manipulate
Array.from(document.querySelectorAll('.product-price'));

#example:

const products = Array.from(document.querySelectorAll('.product-price'));

products
   .filter( product => parseFloat(product.innerHTML) <10)
   .forEach( x => x.style.color = 'red');

