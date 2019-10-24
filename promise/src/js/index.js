console.log("hi, promise");
//Promise with ES6(2015)

var d = new Promise((resolve,reject) => {  
   //throw new Error('error thrown!') ;
    setTimeout(()=> {
      if(true){
         resolve('hello word');
       }else{
         reject('no bueno');
       }
    },2000);    
});

//1 manner
// d.then( (data) => {
//    console.log("sucess: "+data);
// } );

// d.catch((data) => {
//    console.error("error: "+data);
// });

//2 manner
// d.then( (data) => {
//    console.log("sucess: "+data);
// }, (error) => {
//    console.error("new error msg: "+error);
// } );

//3 manner
// d.then( (data) => {
//    console.log("sucess: "+data);
// })
// .catch((data) => {
//       console.error("error: "+data);
//    });

//4 manner: double then.
// d.then((data) => console.log("success: "+data))
// .then((data) => console.log("success02: "+data))
// .catch((error) => console.error('error:', error));

//5 manner: double then, returning from the first toward second.
d.then((data) => {
   console.log("success: "+data);
   throw new Error('error thrown!') ;
   return 'foo bar';
})
.then((data) => {
   console.log("success02: "+data)
   //throw new Error('error thrown!') ;
})
.catch((error) => console.error('error:', error));
