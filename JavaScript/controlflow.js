//Control flow - loops
//for loop
/* 
for (let i = 0; i < 5; i++) {
    console.log('in loop', i);
}
console.log('loop finished');
 */

let names = ['Andru', 'Anand', 'Agastin'];
for (let index = 0; index < names.length; index++) {
     const html = `<li>${names[index]}</li>`;
     document.write(html);
}

//while loop
let i=0;
while(i<5){
     console.log('in loop:', i);
     i++;
}

//do while
let j=5;
do{
     console.log('in loop:', j);
     j++;
}while(i<5);

//if
const pass = "password";
if (pass.length >=12) {
     console.log("this pass is very strong");
} else if (pass.length >=8) {
     console.log("this pass is long enough");
} else {
     console.log("this pass is not long enough");
}

//logical operators
//NOT - !
//AND - &&
//OR - ||

//break and continue
const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i=0; i < scores.length; i++){
     if(scores[i] === 0 ){
          continue;
     }

     console.log('Your score: ', scores[i]);

     if(scores[i] === 100){
          console.log("You got the highest score. Congrats!!!");
          break;
     }
}

//switch
const grade = 'D';

switch(grade){
     case 'A':
          console.log("Your got an A!"); break;
     case 'B':
          console.log("Your got an B!"); break;
     case 'C':
          console.log("Your got an C!"); break;
     case 'D':
          console.log("Your got an D!"); break;
     case 'E':
          console.log("Your got an E!"); break;
     case 'F':
          console.log("Your got an F!"); break;
     default:
          console.log("Not a valid grade");
}

//variables and scopes