var http =  new XMLHttpRequest();

//http Methods - GET, POST, PUT, DELETE

var curPosition;
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
          curPosition = position;
          console.log(position.coords.latitude, position.coords.longitude);
          var mainUrl = 'http://maps.googleapis.com/maps/api/geocode/json';
          //var locationUrl = `${mainUrl}?latlng=${coords.latitude},${coords.longitude}&sensor=true`;
          var locationUrl = mainUrl+"?latlng="+curPosition.coords.latitude+","+curPosition.coords.longitude+"&sensor=true";
          http.open('GET', locationUrl, true);
          http.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var res = JSON.parse(this.responseText);
                document.getElementById('address').innerHTML = res.results[0].formatted_address;
            }
          };
          http.send();
       });
   } else {
       x.innerHTML = "Geolocation is not supported by this browser.";
   }


//callBack function
   function newFunction(cb) {
     var result = 2+3;
     cb(result)
   }

  newFunction(function(r) {
    console.log(r);
  })

  //array Methods

var list = [
  {name:"golu"},
  {name:"molu"},
  {name:"dolu"},
  {name:"kolu"}
];

list.forEach(function(item, index){
    console.log(item, index);
})

var names = list.map(function(item, index){
                return item.name;
              });              

var filteredList = list.filter(function(item, index, array){

})
