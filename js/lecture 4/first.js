// let marks = [ 10 , 15 , 20 ,30 , 42];
// console.log(marks.length);
// console.log(marks);

// let booksName = ["urdu","math","science","computer" , "eng"];
//                                                 //   array length
// console.log(booksName .length);
// console.log(booksName);
// console.log(typeof booksName);
// booksName[0] = "physics"
//                                                //array indices
// console.log(booksName[0]);
                                               //arrays using for loop
// let booksName = ["urdu","math","science","computer" , "eng"];
// for (i = 0 ; i < booksName.length; i ++){
//     console.log(booksName[i]);
// };
                                               //arrays using for-of loop
// let booksName = ["urdu","math","science","computer" , "eng"];
// for(let val of booksName){
//     console.log(val);
// }

// let citys = ["sgd","lahore","multan","kohat"];
// for (let val of citys){
//     console.log (val.toUpperCase());
// }
//                                                //task 1 sum of arrays values
// let marks = [85,97,44,37,76,60];
// let sum = 0
//  for(let val of marks){
//     sum = sum + val ;
// //     avg = sum / marks.length
//  }  
//     console.log(sum);
                                                   //task 1 sum of arrays values
// let prices = [250 ,645,300, 900 ,50 ];
// let i= 0
//  for(let val of prices){
//     offer = val / 10 ;
//    prices[i] = prices[i] - offer ;
//    console.log(prices[i]);
//    i ++;
//  } 

// let prices = [250 ,645,300, 900 ,50 ];
// for(i = 0 ; i < prices.length ; i ++){
//     offer= prices[i] / 10 ;
//      prices[i]  = prices[i] - offer ;
//     console.log(prices[i]) ;
// }
                                                   //arrays Methods
          // Push()
//  let fooditem = ["burger", "bannana", "apple", "orange"]
//  fooditem.push("pinaple", "tamato");
//  console.log(fooditem)
           //pop()
// let fooditem = ["burger", "bannana", "apple", "orange"]
// console.log(fooditem);
// // fooditem.pop();
// let deleteditem = fooditem.pop();
// console.log(fooditem);
// console.log("deleted", deleteditem);
          // //toString()
// let marks = [10 ,20 , 30 , 40 ];
// console.log(marks);
// console.log(marks.toString());
//           //include()
// let marks = [10 ,20 , 30 , 40 ];                //this value exist or not
// console.log(marks);
// console.log(marks.includes(12));
//           //indexof()
// let marks = [10 ,20 , 30 , 40 ];                
// console.log(marks);
// console.log(marks.indexOf(12));                 //if value exist it's print its index otherwise its print -1
// console.log(marks.indexOf(30));
//           //join()
// let marks = [10 ,20 , 30 , 40 ];                
// console.log(marks);
// console.log(marks.join());                 //its change the value form array to string
// console.log(typeof marks);
//           //flat()
// let marks = [10 ,20 , 30 , 40 , [1 , 2 , [3 , 4]]];                
// console.log(marks);
// console.log(marks.flat(2));                 //the value tell about the depth of  array 
// console.log(typeof marks);
//           //Array.isArray & Array.from() 
// let marks = "hamza"              
// console.log(typeof marks);
// console.log(Array.isArray("hamza"));                 //its change the value form string to array
// let change = console.log(Array.from("hamza"));
// console.log(typeof change);
//           // Array.of()
// let score1 = 100
// let score2 = 200
// let score3 = 300
// console.log(Array.of(score1,score2,score3));                 //multiple varibles change into array
        //    concat()
// let myEntery = ["hamza", "zubair" ];
// let seniorEntery = ["umar", "abbas"];
// let juniorEntery = ["saif", "tanveer"];
// console.log(myEntery.concat(seniorEntery,juniorEntery));
            //unshift()
// let myEntery = ["hamza", "zubair" ];
// console.log(myEntery.unshift("saif"));
// console.log(myEntery);
            //shift()
// let myEntery = ["hamza", "zubair","saif" ];
// let val = (myEntery.shift());
// console.log(myEntery);
// console.log("deleted", val);
            //slice()
// let myEntery = ["hamza", "zubair","saif","tanveer", "faisal","iqrar" ];
// console.log(myEntery);
// console.log(myEntery.slice(1 ,4));
// console.log(myEntery);
            //splice()
// let myEntery = ["hamza", "zubair","saif","tanveer", "faisal","iqrar" ];
// console.log(myEntery);                             
// replace
// console.log(myEntery.splice(2 ,2,"umar","abbas"));                 
// add                                        //first value pass where to start.2nd value how much delete.3rd which value add
// console.log(myEntery.splice(2 ,0 ,"umar","abbas"));
// // delete
// console.log(myEntery.splice(2 ,2,));
// console.log(myEntery.splice(3 ));
// console.log(myEntery.splice( ));
// console.log(myEntery);
                                                   //task 2 
// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// console.log(companies);
// console.log(companies.splice(0,1));
// console.log(companies);
// console.log(companies.splice(1,1,"Ola"));
// console.log(companies);
// console.log(companies.splice(5,0,"Amazon"));
// console.log(companies);

                                           //***********objects***********
   let mysym = Symbol("key01")
let jsuser = {
        name : "hamza",
        age  : 20, 
        email : "www.google.co",
        isfollow : true,
        [mysym] : "key01",
        "full name" : " name"
   };
   console.log(jsuser.age);
   console.log(jsuser["age"]);
   console.log(jsuser["full name"]);
   console.log(jsuser[mysym]);
  
   jsuser.age = 12
   console.log(jsuser);
   Object.freeze(jsuser);
   jsuser.age = 15
   console.log(jsuser);
