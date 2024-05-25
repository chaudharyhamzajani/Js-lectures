// function myfunction(){
//    console.log("this is my first function") ;
//    console.log( "that i create first time");
// };
// myfunction();

// function myfunction(msg ){ // this is variable is called function parameter -> input
//   console.log(msg);
// };
// myfunction("i love pakistan"); //this value is called argument -> input

// // Function -> sum of two numbers
// function sum (a , b){
//    console.log( a + b );
// };
// let result = sum( 5 , 6);                      //we only print the value but can't store
// console.log("result :" , result);

// function sum (a , b){
// //    s = a + b;
// //    return s;
//    return a + b ;                                // after return cammand , no code is excuited
// };
// let value = sum( 5 , 6);
// console.log("value :" , value);
               //*** */
// const messageLoginIn = (userName = "its me") => {
//     if(userName === ""){
//         console.log("plese enter a valid user name");
//         return
//     }    
//     return  `${userName} just loggin`
// };
// console.log(messageLoginIn());
// console.log(messageLoginIn(""));
// console.log(messageLoginIn("hamza"));

              //****** */
// const calculateCartPrice = (value1 , value2 ,...num)=>{                                //... this is called rest operator
//     return  num 
// }
// console.log(calculateCartPrice(12 , 35 ,35 ,465 , 456));

//                              //how to use values of object in fuctions
// const user = {
//     name : "hamza",
//     email : "abcd",
//     price : 15,
// }

// function handleObject(anyobject){
//    return (`username is ${anyobject.name} and price is ${anyobject.price}`);
// }
// console.log(handleObject(user));

//                              //how to use values of arrays in fuctions
// let returnNewValue = [10 , 20 , 30 , 40 , 50]
// function secondValue(anyvalue){
//     console.log(`this is the value that you want ${anyvalue[1]}`);
// }
// // secondValue(returnNewValue);
// console.log(secondValue([10 , 20 , 30 , 40 , 50]));

                                                               //arrow fuction 
// function sum (a , b){
//     return a + b;   
// }
// const arrowsum = ( a , b)=>{
//    console.log (a + b);
// };   

// function mult (a , b){
//     return a * b ;
// }
// const arrowmult = (a , b) =>{
//     console.log(a * b);
// }
                                                               //task 1
// function myfunction(str){
// let count = 0 ;
// for(let value of str){
//     if (value === "a" || value === "e" || value === "i" || value === "o" || value === "u"){
//         count++ ;
//     }
// }
// //  console.log(count);
// return count;
// }
                                                               //task 1
// let myfunction = (str)=>{
// let count = 0 ;
// for(let value of str){
//     if (value === "a" || value === "e" || value === "i" || value === "o" || value === "u"){
//         count++ ;
//     }
// }
// //  console.log(count);
// return count;
// }
//                                    //*******************scope********
// let a = 10
// const  b = 20                //these are called global values

// if(true){
//     let a = 100
//     const  b = 200                //these are called block scope values
//     var c = 300
//     console.log("inner : " , a );
//     console.log("inner : " , b );   
// }

                      //neasted scope
function one (){
    name = "hamza",
    channel = "youtube" 
    function two (){
        console.log(name);
    }
    two()
}
one();





