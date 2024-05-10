// function myfunction(){
//    console.log("this is my first function") ;
//    console.log( "that i create first time");
// };
// myfunction();
// myfunction();

// function myfunction(msg ){ // this is variable is called function parameter -> input
//   console.log(msg);
// };
// myfunction("i love pakistan"); //this value is called argument -> input

//Function -> 2 numbers, sum
// function sum (a , b){
//    console.log( a + b );
// };
// sum( 5 , 6);

// function sum (a , b){
//    s = a + b;
//    return s;
   
// };
// let value = sum( 5 , 6);
// console.log(value);
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
let myfunction = (str)=>{
let count = 0 ;
for(let value of str){
    if (value === "a" || value === "e" || value === "i" || value === "o" || value === "u"){
        count++ ;
    }
}
//  console.log(count);
return count;
}


