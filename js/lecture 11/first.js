// const student = {
//     Name : "Hamza",
//     Marks : 72,
//     printMarks : function(){                       //this.marks in this object "this" is use for representation of this obj function
//         console.log("Marks",this.Marks);                  //student.printMarks();
//     },
// };
                                                    //types of funtion
                                                    // type 1
// printMarks : function(){
// console.log("Marks",this.Marks);
// };
//                                                     // type 2
// printMarks(){
//     console.log("Marks",this.Marks);
// };
                                                    //Prototypes in Js
const employee = {
  totalTax (){
  console.log("tax rate is 10%")}
};
const ali1 = {
    salary : 500,
};
const ali2 = {
    salary : 500,
    totalTax (){
        console.log("tax rate is 20%")}
};
ali1.__proto__ = employee;                    //ali1.totalTax();
ali1.__proto__ = employee;                    //ali2.totalTax(); if object & prototype have same method, object's method will be used.
                                                    //classes in Js
// class toyotaCar{
//     start(){
//      console.log("start");         
//     }

//     stop(){
//         console.log("stop")   
//        }

//        setBrand (brand) {
//         this.brand = brand;                                       //2nd show the same vale which is in argument
//      }
// };
// let fortuner = new toyotaCar;
// fortuner.setBrand("fortuner");                              //first any name. 2nd after. funtionName 
// let lexus = new toyotaCar;
// lexus.setBrand("lexus");
                                                    //constructor in Js 
// class toyotaCar{
//     constructor(brand , mile){
//         console.log("this is new car");
//         this.brand = brand ;
//         this.mile = mile ;
//     }
//     start(){
//      console.log("start");         
//     }

//     stop(){
//         console.log("stop")   
//     }
// };
// let fortuner = new toyotaCar("fortuner", "10"); 
// let lexus = new toyotaCar("lexus", "12");
                                                    //inheritance in Js
// class person {
//     constructor(){
//         this.species = "homo sapiens"
//     }
//     eat(){
//         console.log("eat")
//     }
//     sleep(){
//         console.log("sleep")
//     }
//     work(){
//         console.log("Do nothing")
//     }
// }
// class doctor extends person{
//     work(){
//         console.log("check the patients")
//     }
// }
// class engineer extends person {
//     work(){
//         console.log("solve problem, bulid something")
//     }
// }
// let hamza = new doctor();
// let zubair = new engineer();
                                                    //super keyword in Js
//  class person {
//     constructor(name){
//         this.name = name;
//         console.log("parent value");
//     }
//     eat(){
//         console.log("eat")
//     }
    
// }
// class engineer extends person {
//     work(){
//         console.log("solve problem, bulid something")
//     }
//     constructor(name){
//         console.log("child value");
//         super(name);                         //to invoke parent class constructor
//         console.log("exist value");
               
//     }
// }
// let eng = new engineer("hamza");
                                                    //Task 1 and 2
//  let data = "secret info" 
//  class User {
//     constructor(name , email){
//         this.name = name
//         this.email = email
//     }
//     viewData(){
//         console.log("data", data)
//     }
// }
// class Admin extends User{
//     constructor(name,email){
//         super(name,email);
//     }
//     editData(){
//        data = "some new value"                     //Admin1.editData(); after that  we only call data that show new value
//     }
// }
// let student1  = new User("hamza","defgmail.com");
// let student2  = new User("zubair","abcgmail.com");
// let teacher  = new User("itsme","ah81gmail.com");
// let Admin1 = new Admin ("admin", "admingmail.com");
                                                    //Error Handling
// let a = 1;
// let b = 2 ;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// try{
//     console.log(a * c);  //error
// } catch (err){
//     console.log(err);
// }
// console.log(a + b);
// console.log(a ** b);
// console.log(a / b);
