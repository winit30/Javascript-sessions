

function MyClass(name, age, weight, job) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.job = job;

    this.newMethod = function() {
        console.log("this is a method");
      }
}


var newClass = new MyClass("Vineet", "43", "212", "anything");

console.log(newClass.name);

newClass.newMethod();

var element = document.getElementById('container');

element.innerHTML = "This is a dummy Text";

element.className = "contText";

//element.setAttribute('class', 'newClass');

element.style.backgroundColor = "#999";
