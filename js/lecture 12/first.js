
// console.log("1");
// console.log("2");
// setTimeout(()=>{
//     console.log("hello");              //2s =2000
// }, 4000);
// console.log("3");
// console.log("5");
                                                        //sychronase programmic Callback
// function sum (a , b){
//     console.log(a + b );
// }
// function calculate (a , b , sumCallback){
//     sumCallback(a , b);
// }
// calculate(1, 2, sum);
                                                        //sychronase programmic Callback
// function sum (a , b){
//         console.log(a + b );
//     }
//     function calculate (a , b , sumCallback){
//         sumCallback(a , b);
//     }
//     calculate(1, 2, (a , b)=>{
//         console.log(a + b);
//     });

// const hello = ()=>{
//     console.log("hello");
// }
// setTimeout(hello , 2000);
                                                        //nesting means a loop or if-else statement inside another loop or statement
                                                      // by using Callback hell example
// function getData  (iddata, getNextData){
// setTimeout(()=>{
//     console.log("data", iddata)
//     if(getNextData){
//         getNextData();         
//     }
// }, 2000)   
// };
// getData(1,()=>{
//     console.log("getData 2 ...")
//     getData(2,()=>{
//         console.log("getData 3 ...")
//         getData(3,()=>{
//             console.log("getData 4 ...")
//             getData(4);
//         });
//     });
// });
                                                       // by using promises chain  example                                                       
// function getData  (iddata){
//   return new Promise((resolve,reject )=>{
//     setTimeout(()=>{
//       console.log("data", iddata);
//       resolve("sucessfull");     
//   }, 2000); 
//   });
//   }

              //methode one
// getData(1).then((res)=>{
//   console.log(res);
// getData(2).then((res)=>{
//   console.log(res);
// })
//   });
              //methode two is better then one
// getData(1).then((res)=>{
//   return getData(2)})
//   .then((res)=>{
//    return getData(3)})
//    .then((res)=>{
//     console.log(res)
//   })

                                                       // by using asynch await  example                                                       
// function getData  (iddata){
//   return new Promise((resolve,reject )=>{
//     setTimeout(()=>{
//       console.log("data", iddata);
//       resolve("sucessfull");     
//   }, 2000); 
//   });
//   }
//        //use of IIFE(Immediately Invoked Function Expession)
// (async function (){
//   console.log("getdata 1...");
//   await getData(1);
//   console.log("getdata 2...");
//   await getData(2);
//   console.log("getdata 3...");
//   await getData(3);
//   console.log("getdata 4...");
//   await getData(4);
// })();
   

                                                               //use of resolve & reject in promises
// let promise = new Promise((resolve, reject) => {
//     console.log("this is a  promise");
//     // resolve(123);
//     reject("due to some error");
// });  
                                      //promises
// function getData  (iddata, getNextData){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       console.log("data", iddata)
//       resolve("successfull");
//       if(getNextData){
//           getNextData();         
//       }
//   }, 5000)   
//   }); 
//   }
                                                            // use of promise.then & promise.catch    
// const getPromise = ()=>{
//   return new Promise((resolve, reject) => {
//     console.log("this is a  promise");
//     // resolve("success");
//     reject("due to some error");
// });
// };
// let promise = getPromise();
// promise.then((res)=>{
//   console.log("promise fullfill", res)
// }) 
// promise.catch((err)=>{
//   console.log("promise rejected", err)
// }) 
                                                            // use of promise chain example   
// function  asynchronous1(){
// return new Promise((resolve,reject)=>{
// setTimeout(()=>{
//   console.log("1 data")
// resolve("sucessfull");
// },4000); 
// })
// };
// function  asynchronous2(){
//   return new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("2 data")
//   resolve("sucessfull");
//   },4000); 
//   })
//   };
// console.log("fetching data 1...");
// asynchronous1().then((res)=>{ 
//   console.log("fetching data 2...");
// asynchronous2().then((res)=>{})
// });
                                                            // use of async await function example
// function api (){
//   return new Promise((resolve, reject )=>{
//     setTimeout(()=>{
//       console.log("weather data");
//       resolve("200");
//     },2000)
  
//   });
// };
// async function getWeatherData (){
//   await api();
//   await api();
// }





