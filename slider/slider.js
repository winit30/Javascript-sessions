var imagePosition = 1;
function slider() {
  var li = document.getElementsByTagName('li');
  setInterval(function(){
    for(var i = 0; i< li.length;i++){
     li[i].style.opacity= 0;
    }
    li[imagePosition].style.opacity= 1;
    imagePosition++;
    if(imagePosition > (li.length - 1)){
      imagePosition = 0;
    }
  }, 3000)
}

slider();

setTimeout(function(){
  var sliderContWidth = document.getElementById('slider').offsetWidth;
  console.log(sliderContWidth);
}, 2000)
