console.log('hello');
//alert('hey this is Jobin');
//How to write a comment inline
// var b = 'smothie';
// console.log(b);
// variables
// var number = 45;
// console.log(number);

/* var age = prompt('What is your age?');
document.getElementById('sometext').innerHTML = age; */

//Numbers in Javascript
var num1 = 5.7;
//num1 = num1 +1;
num1++;
console.log(num1);
//devide, multiply *, remainder %
//Increment or decrement by any number
num1 += 10
console.log(num1);

//Functions
/* function fun() {
    console.log('this is a function');
} */
//call
//fun();
/* Let's create a function that take in a name and says 
hello followed by your name*/
/* var name = prompt('What is your name?');
function greet(yourname) {
    var result = 'Hello ' + yourname; //String concatenation
    console.log(result);
}
greet(name); */
//How do arguments work in functions?
/* function sumn(a,b) {
    var sum = a + b;
    console.log(sum);
}
sumn(10,35); */
/*var num=23;
While loops - If a specific constion is met
 while(num < 100) {
    num += 1;
    console.log(num);
} */
/* for (let num = 0; num < 100; num++) {
    console.log(num);
} */
//Data Types
/* let yourAge = 18; //number
let yourname = 'Job'; //String
let name = {first: 'Jane', last: 'Doe'}; //object
 */
//Strings in Javascript (common methods)
/* let fruit = 'banana';
let moreFruits = 'banana\napple'

console.log(moreFruits)
console.log(fruit.length)
console.log(fruit.indexOf('an'))
console.log(fruit.slice(2,4))
console.log(fruit[2])
console.log(fruit.split('.')); */

//Array
/* let fruits = ['banana', 'apple', 'orange', 'pineapples'];
console.log(fruits[3])

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); 
}
 let numbers = [5,10,21,34,3,45,32,27];
 console.log(numbers.sort(function(a,b){return a-b})) 

let emptyarray = [];
for (let n = 0; n <= 10; n++) {
    emptyarray.push(n);
}
console.log(emptyarray); */

let student = {
    first: 'Jobin',
    last: 'George',
    age: 35,
    height: 164,
    studentInfo: function ( ) {
        return this.first + '\n' + this.last
        
    }
};
console.log(student.first);
console.log(student.last);
student.first = 'Dennis';
console.log(student.first);
student.age++;
console.log(student.age)
console.log(student.studentInfo())

// conditionals, control flows (if else)
// 18-35 is my target demographic
/* var age = prompt('How old are you?');
if ((age >= 18) && (age<=35) )
{status = 'target demo';}
else
{status = 'not my audience';}
console.log(status) */

//switch statements
// differentiate b/w weekday vs weekend
// 0 Sunday
// 6 Saturday
switch(6) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';
}
console.log(text);
