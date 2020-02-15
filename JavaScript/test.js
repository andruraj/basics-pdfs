//separate js file for large amount of javascript functionality
//dont rely on JS for behaviour/functionality
//place async js in <head>
//place sync js at end of <body>

//alert
alert('Hello');

//console
console.log(1);

//JS runs line by line from top to bottom.

//variables
let a = 24; console.log(a);
a = 'age'; console.log(a);

const b = 100; console.log(b);
// b = 101; console.log(b); //throws error

var c = 5; console.log(c); //older way
c = 'no.'; console.log(c);

//naming
/*
cannot start with numbers. start with $# or _ or alphabets
*/

//Datatypes
//.................................
//Numbers
let res = 5 * (10-3)**2; //follows B O D M A S
console.log(res);
console.log(5/'hello'); //Nan
console.log(5*'hello'); //NaN


//Strings
let s = 'Andru'; //or "Andru"
console.log(s);
let r = s + 'raj'
console.log(r); //concatenation
console.log(s+5);
console.log(5+' stars');
console.log(s[0]); //get char

//string functions
console.log(r.length);
console.log(r.toUpperCase());
console.log(r.toLowerCase());
console.log(r.indexOf('d'));
console.log(r.lastIndexOf('a'));
console.log(r.slice(1,5));          // start,stop-1,step
console.log(r.substring(0,5));      // start,stop-1,step
console.log(r.replace('a','S')); //replace only first appearance
console.log(r.includes('r'));

//template strings
let title = 'ReadNovel';
let author = 'Wuxia writer';
let likes = 10895231;
let t = `The Blog called ${title} by ${author} has ${likes} likes`;
console.log(t);

//html templates
let html = `
    <h2>Testing Templates</h2>
    <p>Maybe i can write this template variable to html using document.write() function</p>
`;
console.log(html);
document.write(html);

//Boolean

//null
let age = null;
console.log(age, age+3, `age is ${age}`, `and sometimes age is ${age + 3}`);

//NaN(Not a Number) - Undefined
let size;
console.log(size, size + 3, `size is ${size}`, `and sometimes size is ${size + 3}`); //becomes undefined

//Objects
//Arrays
let array = ['Andru', 'Anand', 'Agas']; console.log(array[1]);
array[0] = 'Andrew'; console.log(array);

let n = [1,2,3,4,5]; console.log(n);
console.log(n.length);
console.log(array.join(', '));
let k = array.concat(n); console.log(k);
console.log(k.indexOf(3));
k.push('hello'); console.log(k);
k.pop(); console.log(k);
console.log(k.includes(5));

//comparison
let x = 25;
console.log('a == 25 ' , x == 25); // loose comparison
console.log("a == '25' " , x == '25');
console.log('a === 25 ' , x === 25); // strict comparison => checks value and type
console.log("a === '25' " , x === '25');
console.log("a !== 25 " , x !== 25);
console.log("a !== '25' " , x !== '25');

x='andru';
console.log("x > 'Andru'", x > 'Andru');
console.log("x > 'andru'", x > 'andru');
console.log("x < 'Andru'", x < 'Andru');
console.log("x < 'andru'", x < 'andru');
console.log("x > 'andru'", x > 'andru');
console.log("x == 'Andru'", x == 'Andru');
console.log("x == 'andru'", x == 'andru');

//Symbol
//..................................

//Type conversion
let score = '100';
score = Number(score);  //cast to Numbers
console.log(score+1);
console.log(typeof(score));
let word = String(50);
console.log(word, typeof word);
let l = Boolean('0'); //true for all numbers except 0, all strings except empty string
console.log(l, typeof l);