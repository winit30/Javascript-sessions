"use strict";

function mutateCar() {
  //  alert('Hi');
    console.log('hello');
}

var myFunction = function(a, v, f) {
  var inputVal =  document.getElementById('inputVal').value;
}

function subscribeFunction(a , d, f) {
  //alert('Subscribe Me');
}

myFunction(2, 7, 6)

subscribeFunction(2, 4, 5);

(function() {
  console.log("auto call function");
})();

// arguments and parameters

function firstPara() {
    console.log(arguments);
}


firstPara(2,3,4, 54,4);

function newFunction() {
  var todaysDate = new Date();
  console.log(todaysDate.getDay(),todaysDate.getMonth(), todaysDate.getFullYear(), todaysDate.getHours() );

}

var myNewFunction = newFunction;

myNewFunction();

try {
      console.log(dfjgdkjfk);
} catch(err) {
    console.log('2', err);
}
finally {
  console.log('fgdfgd');
}

for (var i = 0; i < 10; i++) {
    if (i === 3) { break; }
    console.log(  "The number is " + i );
}

for (i = 0; i < 10; i++) {
    i ==4;
    if (i === 3) { continue; }
    console.log(  "The number is " + i );
}

var a = 0;

function recursionFunc() {
  console.log('recursion');
  if(a == 5) {
    return false;
  }
  a++
  recursionFunc();

}

recursionFunc();
/*
var count = 0;
var interval = setInterval(function(){
                    count++;
                    console.log("This is a time out");
                    if(count == 5) {
                      clearInterval(interval);
                    }
                    console.log(count);
                }, 1000);
*/
//closure

function closureFunction() {
  var f = 0;
  return function() {
    f++;
    console.log(f);
  }
}

var closrFunction = closureFunction();
var closrFunction2 = closureFunction();

closrFunction()
closrFunction()
closrFunction()
