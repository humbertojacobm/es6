console.log("hi, array-from");

const products = Array.from(document.querySelectorAll('.product-price'));

products
   .filter( product => parseFloat(product.innerHTML) <10)
   .forEach( x => x.style.color = 'red');

console.log('testing');

console.log(products);