//closure
var newVariable = "First Variable";

console.log(newVariable);

var count1 = 0;
var count2 = 0;

function funcOne() {
    count1++;
    console.log("count Modified In function 1" , count1);
}

function funcTwo() {
  count2++;
  console.log("count Modified In function 2" , count2);
}

function closureFunction(a, d, c, d) {
      var clickCount = 0;
      return function() {
        clickCount++;
        console.log(clickCount);
      }
}
/*
(function() {
    var k = i;
    return function() {
      console.log(k);
    }
})();
*/


var funcClosure = closureFunction(2, 4, 4, 5);
var funcClosure2 = closureFunction();
var funcClosure3 = closureFunction();

for(var i = 0 ; i<10 ; i++) {
  setTimeout((function() {
      var k = i;
      return function() {
        console.log(k);
      }
  })(), 5000)
}

function() {
  console.log(i); i = 10;
}

function() {
  console.log(i); i = 10;
}

function() {
  console.log(i); i = 10;
}

(function() {                    {//k = i,   k = 0,}   ---scope 1
    var k = i;
    return function() {
      console.log(k);
    }
})()

(function() {                    {//k = i,   k = 1,}   ---scope 2
    var k = i;
    return function() {
      console.log(k);
    }
})()

.....

(function() {                    {//k = i,   k = 9,}   ---scope 9
    var k = i;
    return function() {
      console.log(k);
    }
})()

//

document.getElementById();
