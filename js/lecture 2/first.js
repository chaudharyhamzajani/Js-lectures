                                            //   lecture 2
                                          //   *****************operaters**********************


// let value = 3
// let negative = -value
// console.log(negative);

// console.log(1 + "1");
// console.log("1" + 1);                
// console.log("1" + 1 +1);
// console.log(1 + 1 +"1");
// console.log(1 + 1 *2 / 3 % 4);                        //this is a bad code practice for operations we use brackets

// console.log(+"");
// console.log(+true);
              // *****bad code practise start******
// let num1 , num2 , num3 ;
// num1 = num2 = num3 = 4 ;

// console.log("2" > 1);

// console.log(null > 0);                      //false
// console.log(null == 0);                      //false
// console.log(null >= 0);                      //true

// console.log(undefined == 0);                      //false
// console.log(undefined > 0);                      //false
// console.log(undefined < 0);                      //false
              // *****bad code practise end******
              //js type  static or dynamic 
              //               *********memories types*************  
// first Primitive
// 7 types : String , Number, Boolean , null , undefined, Symbol, BigInt

// //examples
// // 1) string
// const str = "string";
// // 2) Number
// const num = 12
// // 3) Boolean
// const booleanValue = true;
// // 4) null
// let temp = null;
// // 5) undefine
// let undefineValue;
// // 6) symbol
// let id = Symbol(123);
// let newId = Symbol(123);
// console.log(id === newId);
// // 7) bigInt
// let newValue = 12333333333n
// console.log(typeof newValue);

// //second non-Primitive or Reference type
// //Arrays , object , function
// // example
// //arrays
// let heros = ["hamza" , "umar" , "ali"];
// //object
// let myobj = {
//   name : "hamza",
//   age : 20,
//   student : true,
// }
// //function
// let myfunction = function(){
//   console.log("hello");
// };
// console.log(typeof id);
                                      //  *********************************************
// // stack(permitive) , heap (non-permitive)         //copy of reference value
// let valueOne = "valueone.com";
// let valueTwo = valueOne;
// valueTwo = "change value"
// console.log(valueOne);
// console.log(valueTwo);

// //example of heap (non-permitive)           //copy of original value
// let valueThree = {
//   name : "hamza",
//   age : 20,
//   student : true, 
// };
// let valueFour = valueThree;
// valueFour.age = 21
// console.log(valueFour);
// console.log(valueThree);

                                            // Arithmetic operators
// let a = 5;
// let b = 2;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);
// console.log(a ++);
// console.log(a --);
// console.log(++ a);
// console.log(-- a);
                                            // Assignment operators
// let a = 5;
// let b = 2;
// a += 1;
// a = a + 1;
// console.log (a );
// console.log(c = a + b) ;
// console.log (a += b);
// console.log (a += 1);
// console.log (a *= 1);
// console.log (a -= 1);
// console.log (a /= 2);
// console.log (a **= 1);
// console.log (a %= 2);       //modulas of 5 its give the value of reminder
                                            // comparison operators
// the Ans is true or false
// let a = 5;
// let b = 2;
// console.log(a == b);
// console.log(a != b);

// in this its also check data type
// let a = 5;
// let b = "5";
// console.log(a === b);
// console.log(a !== b);

// let a = 5;
// let b = 2;
// console.log(a > b);
// console.log(a >= b);
// console.log(a < b);
// console.log(a <= b);
                                                              // logical and operators
// let a = 5;
// let b = 2;
// let cond1 = a === 5;
// let cond2 = a > b;
// console.log("cond1 && cond2 =", cond1 && cond2);
                                                                 // logical or operators
// let a = 5;
// let b = 2;
// let cond1 = a === 5;
// let cond2 = a < b;
// console.log("cond1 || cond2 =", cond1 || cond2);
                                                                   // logical not operators
// let a = 5;
// let b = 2;
// let cond1 = a === 5;
// let cond2 = a < b;
// console.log("cond1 !|| cond2 =", !(cond1 || cond2));

                                                                 // conditional statements   
                                                                    //  if statement 
// let a ="5";
// if (a = 5 ){
//     console.log("hello!") ;
// }
                                                                    //  if else statement    

// let a = 3 ;
// if (a > 5 ){
//     console.log("yes") ;
// }
// else {
//     console.log("no") ;
// }
                                                                    //  else if statement  
// let age = "4" ;
// if (age > "5" ){
//     console.log("yes") ;
// }
// else if (age === "3" ){
//     console.log("equal") ;
// }
// else if (age === "2" ){
//     console.log("equal") ;
// }
// else {
//     console.log("no") ;
// }
                                                                    //  ternary operators
// let age = 15;
// let result = (age >= 18 ? "adult" : "not adult")
//    console.log (result);
                                                                    //   task 1
// let student = age = prompt("enter a number");
// let result = (age %5  === 0 ? "it is a multiple of 5": "not multiple of 5")
//    console.log (result);   

// let  age = prompt("enter a number:");
// if (age %5 === 0){
//    console.log("multiple of 5");
// }
// else{
//    console.log("not multiple of 5");
// }
                                                                    //   task 2
// let  age = prompt("enter a number:");
// if ( age <= 49){
//    console.log ("F");
// }
// else if ( age <= 59){
//    console.log ("d");
// }
// else if ( age <= 69){
//    console.log ("c");
// }
// else if ( age <= 89){
//    console.log ("b");
// }
// else if ( age <= 100){
//    console.log ("a");
// }
// else {
//    console.log ("wrong number");
// }
