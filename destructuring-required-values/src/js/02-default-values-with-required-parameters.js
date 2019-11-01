console.log("hi, destructuring with required values");
console.log("02-default-values-with-required-parameters");


function ajax({
   type = "get",
   url = requiredParemeter("url"),
   data = {},
   success = requiredParemeter("success"),
   error = () => {},
   isAsync = true
} = {}){
   console.log(JSON.stringify({type, url, data, success, error, isAsync},null,2));
}

function requiredParemeter(name){
   throw new Error(`Missing parameter "${name}"`);
}

try {
 ajax({
    url: "http://www.algo.com.pe",
    success: () => {}
});
} catch (e) {
   console.warn(e.message);
}
