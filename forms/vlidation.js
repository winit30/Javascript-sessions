var button = document.getElementById('submitButton');

button.onclick = function(e) {

  e.preventDefault();

  var inputs = document.getElementsByClassName('form-control');
  var errors = document.getElementsByClassName('alert');

  for(var i = 0; i< inputs.length;i++){
    if(inputs[i].value == "" ){
      errors[i].style.display = "block";
    } else {
        errors[i].style.display = "none";
      console.log(inputs[i].value);
    }
  }
}
