                                       // ********************In js how to define data******************************


const rollNumber = 12345                          //mostly use
let name = "chaudhary hamza";                     //mostly use
var classNo = "b13"
college = "superior";
let changingData;
// rollNumber = "123 "      //const can't be updated
name = "hamza"                //let can  update   
classNo = "b12"               //variable can  update 
college = "punjab"
console.log(rollNumber);
console.table([name , rollNumber , classNo , college , changingData]);

"use strict";                  //when we want to use only modern js code
// alert(3+3)                  //itc can't work in such way in node js


                                    //***************************** In Js data types *****************************



let fullName = "string";                  //string
let numbers = 123                             //number
let isLoginIn = false                     //boolean
let state;                                //undefined
//number => 2 to power 53 
// bigint  => use for more then big vlue data restoration then number. we use in stock market
//string => ""
//boolean => true/false
//null => standalone value . for example we use for temperature when server give error its we recive message null not 0
//undefined =>  
//symbol => unique use in react & for figma tools
//object => 


                                            //***************   convertion of data types    ***********************



// let first = 33
// let second = "33"
// let third= "sore"
// let four = null
// let five = undefined
// let sixIsBoolean = true;
// let sevenIsNumber = 1 ;
// let eightIsNumber = 0 ;
// let nineIsNumber = "" ;
// let tenIsNumber = "hamza" ;
// console.log(typeof first); 
// console.log(typeof second);
// console.log(typeof third);
// console.log(typeof four);
// console.log(typeof five);

//                                          //convert number into string
// let firstNumber = String(first);
// console.log(firstNumber);
// console.log(typeof firstNumber);

//                                          //convert string into number
// let secondNumber = Number(second);
// console.log(typeof secondNumber);
// console.log(secondNumber);

// let thirdNumber = Number(third);
// console.log(typeof thirdNumber);
// console.log(thirdNumber); 

//                                          //convert null into number
// let fourNumber = Number( four);
// console.log(typeof fourNumber);
// console.log(fourNumber);

//                                          //convert undefine into number
// let fiveNumber = Number(five);
// console.log(typeof fiveNumber);
// console.log(fiveNumber);

//                                          //convert boolean into number
// let sixNumber = Number(sixIsBoolean);
// console.log(typeof sixNumber);
// console.log(sixNumber);

//                                          //convert number into boolean
//   // 1 into boolean
// let sevenNumber = Boolean(sevenIsNumber);
// console.log(typeof sevenNumber);
// console.log(sevenNumber);
//   // 0 into boolean
// let eightNumber = Boolean(eightIsNumber);
// console.log(typeof eightNumber);
// console.log(eightNumber);
//   // "" into boolean
// let nineNumber = Boolean(nineIsNumber);
// console.log(typeof nineNumber);
// console.log(nineNumber);
//   // "hamza" into boolean
// let tenNumber = Boolean(tenIsNumber);
// console.log(typeof tenNumber);
// console.log(tenNumber);


//                                        *************************************************




                                         //   ********** create an object and how to print object key values
// let  student = {
//     age : 20,
//     class: 6,
//     name: "hamza",
//     section:"b",
// };
// console.log(student);
// console.log (typeof student);
// console.log (typeof student.age);
// console.log (typeof student["class"]);
                                            //  lecture tasks 1
// const product = {
//     type : "pen",
//     name : "standard ct ball pen",
//     Rating : 4,
//     isdeal : true,
//     offer : 5,
//     price: 270,
// }
// console.log (product,);
// console.log (typeof product,);
// console.log (typeof product.isdeal);
// console.log (typeof product["isdeal"]);
                                            //  lecture tasks 2
// const profile ={
//     username:"hamza",
//     isfollow:true,
//     posts:195,
//     followers:595,
//     following:4,
// };
// console.log (profile,);
// console.log (typeof profile,);
// console.log (typeof profile.isdeal);
// console.log (typeof profile["isdeal"]);
                                            //  lecture 1 end