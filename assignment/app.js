//localStorage.setItem('listName', []);
if(!localStorage.listName) {
  localStorage.listName = JSON.stringify([]);
  //sessionStorage.listName = JSON.stringify([]);
}

var elements = ["INPUT", "BUTTON", "BR", "UL"];

for(var i = 0; i < elements.length; i++) {
  if(elements[i] == "BUTTON") {
      var el = document.createElement(elements[i]);
      var buttonText = document.createTextNode("Add Text");
      el.appendChild(buttonText);
      el.addEventListener('click', addName);
  } else if(elements[i] == "INPUT") {
      var el = document.createElement(elements[i]);
      el.id = "inputVal";
  }else {
      var el = document.createElement(elements[i]);
  }
  document.body.appendChild(el);
}

(function() {
  var data = JSON.parse(localStorage.listName);
  for(var i = 0; i< data.length;i++){
    var listItem = document.createElement("LI");
    var listText = document.createTextNode(data[i]);
    listItem.appendChild(listText);
    var list = document.getElementsByTagName('ul')[0];
    list.appendChild(listItem);
  }
})();

function addName() {
    var inputVal = document.getElementById('inputVal').value;
    if(inputVal != ""){

      var data = JSON.parse(localStorage.listName);
      data.push(inputVal);
      localStorage.listName = JSON.stringify(data);

      var listItem = document.createElement("LI");
      var listText = document.createTextNode(inputVal);
      listItem.appendChild(listText);
      var list = document.getElementsByTagName('ul')[0];
      list.appendChild(listItem);
      document.getElementById('inputVal').value = "";
    } else {
      alert('Please type some value');
    }
}

//String()
//Number()
//Array()
//Object()


//var image = new Image();
//image.src = "";
var image = document.createElement('IMG')
document.body.appendChild(image);

var result;
function readFile() {
  var file = document.getElementById('myfile').files[0];
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function() {

  }
  reader.onerror = function() {

  }
  reader.onloadend = function(e) {
      console.log(e);
      result = e.target.result;
      image.src = result;
  }
}

//new FileReader();
// Blob();

//JSON

var jsonObject = {
  "name": "vineet",
  "age": "23",
  "weight":"200",
  "job": "Software",
}


for(key in jsonObject) {
  if(key) {
    console.log( jsonObject[key]);
  }
}


//  JSON.parse()
// JSON.stringify()

//console.log(jsonObject);
