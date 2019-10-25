GENERATOR

#to open the expected page
http://localhost:9000/generator/index.html

#to see the code visit index.js

#polyfill
  npm install --save @babel/polyfill

  entry: [
        "@babel/polyfill",
        path.resolve(__dirname,'src/js/index.js')
    ],

#URLS
https://codeburst.io/what-are-javascript-generators-and-how-to-use-them-c6f2713fd12e


