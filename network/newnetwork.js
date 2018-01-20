var http = new XMLHttpRequest();

http.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
   }
 };
 http.open("POST", "http://localhost:3000/post", true);
 
 http.setRequestHeader("Content-type", "application/json");

 var body = {
   fname: "Vineet",
   lname: "Mishra"
 }

 var json = JSON.stringify(body);

 http.send(json);
