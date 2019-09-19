document.querySelector(".showtext").style.display = 'none';

document.querySelector(".checker").addEventListener('click',function(){
    document.querySelector(".showtext").style.display = 'block';
});


function load() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo1").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "data.json", true);
    xhttp.send();
  }








//   document.querySelector(".showtext").style.display = 'none';

// document.querySelector(".checker").addEventListener('click',function(){
//     document.querySelector(".showtext").style.display = 'block';
// });


// function load() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         document.getElementById("demo1").innerHTML 
//     };
//     xhttp.open("GET", "data.json", true);
//     xhttp.send();
//   }






  

//   var xmlhttp = new XMLHttpRequest();
// var url = "myTutorials.txt";

// xmlhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         var myArr = JSON.parse(this.responseText);
//         myFunction(myArr);
//     }
// };
// xmlhttp.open("GET", url, true);
// xmlhttp.send();

// function myFunction(arr) {
//     var out = "";
//     var i;
//     for(i = 0; i < arr.length; i++) {
//         out += '<a href="' + arr[i].url + '">' + 
//         arr[i].display + '</a><br>';
//     }
//     document.getElementById("id01").innerHTML = out;
// }