// console.log ("hello!");
                                                                  // //     use of for loop
// for(i = 1 ; i < 5 ; i ++ ){
//     console.log ("hello hamza");
// }

// sum of 1 to 5
// let sum = 0
// for(i = 1 ; i < 5; i ++){
//     sum = sum + i ;
//    // sum += i ;
// }
// console.log (sum);



                                                                  //   use of while loop

// let i = 1 ;
// while (i < 10 ){
// console.log ("hello");
// i ++ ;
// }

// sum of 1 to 5
//      


                                                                 //     use of do-while loop

// let i = 10 ;
// do {
// console.log ("hello");
// i ++ ;
// }while (i < 10 );

// let i = 1 ;
// do {
// console.log ("i =",i);
// i ++ ;
// }while (i < 10 );


                                                                 // use for-of loop 
    // let str = "hamza";
    // let size = 0 ;
    // for (let i of str ){
    //     console.log ("i =",i);
    //    size ++ ;
    // }
    // console.log(size);   
                                                                   //    use of for-in loop
   //  let student = {
   //      name : "hamza" ,
   //      rank : "sac" ,
   //      pak : 526974 ,
   //      trade : "it asstt" ,
   //  }
   //  for (let key in student){ 
   //      console.log ("key =", key,"value =", student[key]  );
   //  }
                                            // first task of lecture 3
   //   print all even number from 0-100
      //  let sum = 0 ;
      //    for(i =0; i<= 50; ++ i ){
      //    sum =  i * 2
      //    console.log (sum);
      //  }
           
      // for (i = 0; i<= 100; i++){
      //    if (i % 2 == 0){
      //       console.log(i)
      //    }
      // }
      // (i % 2 != 0) for an odd number 

                                                                  //  2nd task of lecture 3

      //  let gameNumber = 25;
      //  let result = prompt("enter the game number")  
      //  while (result !== "25") {
      //    result = prompt("Wrong number Try again") 
      //  }
      // console.log ("Correct Ans") 
                                                                      //use of  String  
   //    str = "hamza"; 
   //   console.log(str.length  ) ;
   //   console.log(str[4] ) ;
     

                                                                    //   Template literal
//       let specialString = `this is a template literal`;
//       console.log(specialString);

//       let obj = {
//          item : "pen",
//          price : 10 ,
//          };

// let con = `the price of ${obj.item} is ${obj.price} rupees`;
// console.log(con);
// console.log ("the price of ", obj.item, "is", obj.price, "rupees" );

                                                                  //  Escape Character properites
// let nextLine = `Ameer\nHamza`; 
// console.log(nextLine);
// console.log (nextLine.length); 
// let tabSpace = `Ameer\tHamza`; 
// console.log(tabSpace); 
// console.log(tabSpace.length);
                                                               //   String Methode in Js                              
// let str = "    This is My first Day in my College"
// str = str.toUpperCase();
// console.log(str);
// let std = "    This is My first Day in my College"
// std = std.toLowerCase();
// console.log(std); 
// let sta = "      This is My first Day in my College           "

//  sta = sta.trim();
// console.log(sta);   
// let stb = "         This is My first Day in my College     "
// console.log(stb);
// "This is my first day in my college"

// // str.slice
// let str = "This is My first Day in my College"
// console.log(str.slice(5,15));

// // str.1concat(str2)
// let str1 = "hello "
// let str2 = "world"
// console.log(str1. concat (str2));
// console.log(str1 + str2);

// str.replace(searchVal,newVal);
// let str = "This is My first Day in my College"
// console.log(str.replace("This is","that was"));

// str.charAt(idx)
// let str = "This is My first Day in my College"
// console.log(str.charAt(8));


//                                              //***********string************ */
// const nam = "hamza"
// nam.charAt(2)
// nam.length
// nam[0]
// const repoCount = 50
// console.log(`hello my name is ${nam} and my repocount is ${repoCount}`);
//  const gameName = new String('quaid-e-azam');
//  console.log(gameName);
//  console.log(gameName.__proto__);
//  console.log(gameName.indexOf('z'));
//  console.log(gameName.includes('zub'));                  //to check the value is the present or not in the string
//  console.log(gameName.split('-'));                       // to create new branchs by space or dash
//  const newString = gameName.substring(0,4);              // to get the value in the string
//  const otherString = gameName.slice(-3,4);                //to get the value but in this we can use negative value
//  console.log(otherString);

//                                               //***********numbers************ */
// const scores = 300;
// const score = new Number(300.678);
// console.log(typeof scores);
// console.log(typeof score);                    //object
// console.log(score.toString().length);        //to find length of string
// console.log(score.toFixed(2));                //after .point give maximam two numbers
// console.log(score.toPrecision(4));           //round of the value and give maximum of numbers value
// const hundreds = 100000000000;
// console.log(hundreds.toLocaleString('en-in'));       //chang the reading scale of numbers

                                              //***********math************ */
// console.log(Math);
// console.log(Math.abs(-4));                   //to change the negative sign into postive
// console.log(Math.round(4.6));                  //use for round of the value
// console.log(Math.ceil(4.6));                  //to get the upper value after round of
// console.log(Math.floor(4.6));                  //to get the lower value after round of
// console.log(Math.min(3 , 4 , 7 , 8 ,9));                  //to get the lower value 
// console.log(Math.max(3 , 4 , 7 , 8 ,9));                  //to get the max value 
// console.log(Math.random());                  //in this it create a random value b/w (0 to 1) after that after that we multiplay 
// console.log((Math.random() * 10) + 1);           // that number that is max requirment and +1 because after adding 1 it can't give 
// console.log(Math.floor((Math.random() * 10) + 1));           //in 0 value

// min = 10
// max = 20
// console.log(Math.floor(Math.random() * (max - min + 1) + min ));

                                              //***********date************ *

// let mydate = new Date()                   //**      Fri May 24 2024 01:15:13 GMT+0500 (Pakistan Standard Time)
// console.log(mydate);
// console.log(typeof mydate);
// console.log(mydate.toDateString());                     // **  Fri May 24 2024
// console.log(mydate.toLocaleDateString());                //   **    5/24/2024
// console.log(mydate.toString);                   // ** 2024-05-23T20:11:35.917Z

// let date = new Date( 2001 , 3 , 24 , 4 , 45 ,  ) 
// console.log(date); 

// let creatNewDate =  Date.now()
// console.log(Math.floor(creatNewDate));
// console.log(Math.floor(Date.now()/1000));


                                                               //  3nd task of lecture 3
// let x =prompt("enter name");
// console.log("@",x,x.length);
// console.log(`@${x}${x.length}`)

// let x =prompt("enter name");
// let userName = "@" + x + x.length ;
// console.log(userName);
