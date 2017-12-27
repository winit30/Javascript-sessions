console.log(name);

var e1 = {
  name: "Ajay",
  age: 34
}

var e2 = {
   name : " Komal",
   age: 23
}

var e3 = {
  name: "Amit",
  age: 21
}

var e4 = {
   name : "Rohit",
   age: 45
}

var e5 = {
   name : "Akbar",
   age: 45
}

var a = ["Vineet", 24, "male", true, {name:"John"}];
      //    0      1      2


//            shift()                 pop()
var x = [ 9 , 1, 2 ,4 , 7, 5, 6, 10];
//            unshift()               push()

//.map();
//.reduce();
//.filter();
//.search();

var company = [ e1]

var company2 = [{name: "fgdf", age: "fghgf"}, {name: "fgdf", age: "fghgf"} , {name: "fgdf", age: "fghgf"} ,{name: "fgdf", age: "fghgf"} ]

var h = {
  name: "dfgdf",
  bar: {
    fgdf: {
      sjfjgbjdf: {
          age: 23
      }
    }
  }
}


console.log(company,h.name, h.bar.fgdf.sjfjgbjdf.age );

company.unshift(e5);

company.push(e5);

console.log(company);

// operators (Arithmatic)
// + - * / %

// ++ --

var a = 3 % 2;

var b = 5;
//b = b + 1;

b = b + 6;
b += 6;


b++  // always add 1 to the original number
b-- // always minus 1 to the original number

// operators (Conditional)
// && || > < >= <= ! === ==

// !true == false;

// !false == true;

var s = [];


var lengthOfS = s.length;

if((5 > 3) || (1 < 0) && (2 < 0) && (4 > 6 ) ) {
  console.log("True");
} else {
  console.log("False");
}
var n = "5"; // type string
var m = 5;  // number

if( 4 != 6 ) {
  console.log("True");
} else {
  console.log("False");
}


var f = 5;


switch(f) {
  case 1:
    console.log("one");
    break;
  case 8:
    console.log("Eight");
    break;
  case 5:
    console.log("Five");
    break;
  default:
      console.log("No cases matched");
}

if(f == 1) {
  console.log("one");
  switch(f) {
    case 1:
    if(f == 5) {
      if(f == 5) {
        if(f == 5) {

        }
      }
    }
      break;
    case 8:
      console.log("Eight");
      break;
    case 5:
      console.log("Five");
      break;
    default:
        console.log("No cases matched");
  }
} else if(f == 8) {
  console.log("Eight");
} else if(f == 5) {
  console.log("Five");
} else if(f == 4) {
  console.log("Four");
}else {
  console.log("No conditions matched");
}

if(f == 5) {

}

var nameArray = ["fgf", "gdg", "dgd", "dsg", "dfgdf", "fgf", "gdg", "dgd", "dsg", "dfgdf",  "dsg", "dfgdf"];
/*
for(var i = 0; i < nameArray.length; i++) {
  console.log(nameArray[i]);
}*/

var k = 0;

/*while (k<nameArray.length) {
  console.log(nameArray[k]);
  k++;
}*/

do {
  console.log('First');
  console.log(nameArray[k]);
  k++;
} while(false)
