// function alertTest() {
//   console.log("this is function");
// }
// const greeting = document.getElementById('greeting').innerHTML = "Goodbye";
// alertTest();
// alertTest();
// function testing(message) {
//   console.log(message)
// }

// testing("computer");
// testing("good bye");

// const localTime = document.getElementByClassName("local-time")[0];

// // const localTime = document.getElementsByClassName("time-number");
// // for(let i =0; i<localTime.length; i++){
// //   localTime[i].innerHTML = '10';
// }
//  adding CSS style using DOM ==========.style.backgroundColor or fontSize...
// const greeting = document.getElementById('greeting').style.backgroundColor = 'Green';
// const weather = document.querySelector("p#weather").style.color = 'red';

// adding event listener for DOM ( document object Model)
const greetingPost = document.getElementById('greeting').addEventListener('click', function(){
  this.style.color = 'green', this.style.marginLeft = '123px';
})

console.log("----------creating HamBuger Menu using JavaScript=---------------")

document.querySelector('#open-nav-menu').addEventListener('click', function(){
document.querySelector('header nav .wrapper').classList.add('nav-open');
})
document.querySelector('#close-nav-menu').addEventListener('click', function(){
  document.querySelector('header nav .wrapper').classList.remove('nav-open');
  var name = "kkkkkkk";
})

console.log("Different other examples so I can learn")
console.log("practice Var Let and ...Varialbles");
let customer = "sara";
let balance = 300;
balance = balance + 200; 
console.log("hi " + customer + "your new balance is " + balance + "USD");
