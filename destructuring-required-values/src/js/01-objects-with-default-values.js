console.log("hi, destructuring with required values");
console.log("objects-with-default-values");
console.log("how to send objects with default values as parameters in javascript");

function ajax({
   type = "get",
   url = "",
   data = {},
   success = () => {},
   error = () => {},
   isAsync = true
} = {}){
   console.log(JSON.stringify({type, url, data, success, error, isAsync},null,2));
}

try {
 ajax({
    url: "http://my.api.io",
    success: () => {}
 });
 ajax({
});
} catch (e) {
   console.warn(e.message);
}
