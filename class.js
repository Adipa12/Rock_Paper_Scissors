//prob1.. creating a website  for your college .Create a class user with 2 properties name& email.It also has a method called viewdata() that allows user    to view website data?

// let Data = "some seceret data";

// class User {
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }
//     viewData(){
//         console.log("Data is", Data);
//     }
// }
// let student1 = new User("Adi", "Adi123@.com");
// let student2 = new User("Aditi", "Aditi@sharma.com");

//prob2..create a new class  Admin which inherits from user . Add a new method called edit data to Admin that allows it to edit website data?
 
// class Admin extends User {
//     constructor(name,email){   
//         // if you want to access the  child constructor ,call parent constructor with super keyword.
//         super(name,email);

//     }
//     editData(){
//         Data = "some editable data";
//     }
// }

// let teacher1 = new User("dean" , "dean@takla.com");
// let admin1 = new Admin("chaman", "chaman@chutiya.com");
//--------------------------------------------------------------------------------------

//Todays topic is Asynchronous programming.........

// function getData(dataId){
// console.log("gat the data");
// }
// setTimeout(getData, 2000);
// setTimeout(getData, 3000)

// function getData(dataId) {
//     setTimeout(() => {
//         console.log("data", dataId);
//     },3000);
// }

// function getData(dataId, getNextDAta){
//     setTimeout(() => {
//             console.log("Data", dataId);
//             if(getNextDAta){
//             getNextDAta();
//         }
      
//     },2000);
// }
// getData(1, () => {
//     getData(2, () => {
//         getData(3, ()=> {
//             getData(4);
//         });
//     });
//     });
//-------------------------------------------------------------------------
//# Promises......

//Promise is for eventual completion of task. It is an object in js.
// it is solution to callback hell
//in promise three states are presents (pending,resolve,reject)
//example

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("resolved the issue");
// });

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             console.log("data", dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 5000);
//     });
// }
// in previous function we use promise, first function return the promise than we save the promise (and the pending stage is showed) after the timeout period complete it gives the data with success message.

// we have two asyn functions we want to print the result of function1 first than function2 result print so used the then keyword and put second function inside of 1 function

// function asyncFunc1() {
//     return  new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     });
// }
// function asyncFunc2() {
//     return  new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     });
// }

// console.log(" feching  data1........");
// let p1 = asyncFunc1();
// p1.then((res) =>{
//     console.log("feching data2.......");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
        
//     });
// });
//-------------------------------------------------------------------------------

// # Async & Await-------------***************~~~~~~~~~~~~~~

// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather Data");
//             resolve(200);
//         }, 2000);
//     });
// }
// async function getWeatherData(){
//     await api();
// }

//----------------------------------------------------------------------------------

// fetch API.....

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async() => {
console.log("getting data........");
let response = await fetch(URL);
console.log(response);//JSON format
let data = await response.json();
factPara.innerText = data[3].text;
};

btn.addEventListener("click",getFacts);

