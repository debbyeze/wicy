// date
 var date = new Date();
  var year = date.getFullYear();
 document.getElementById("copyright-date").innerHTML = year;
 
 var closeMenu = document.getElementById("close");
var menu = document.getElementById("menu");
var navList =document.getElementById("nav");
var mainPage = document.querySelector("main");

menu.addEventListener("click", () => {
    menu.style.display = "none";
    navList.style.display="block";
    closeMenu.style.display="block";
});

closeMenu.addEventListener("click", () => {
    closeMenu.style.display = "none";
       navList.style.display = "none";
    menu.style.display = "block";
});

 
   mainPage.addEventListener("click", () => {
   if(closeMenu.style.display==="block"){
     closeMenu.style.display = "none";
      navList.style.display = "none";
     menu.style.display = "block";
   }
     
   });

  


  //  photo slide
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  var blue = document.getElementById("blue-indicator");
  var purple = document.getElementById("purple-indicator");

  prev.addEventListener("click", () => {
  var whyte = document.getElementById("whyte");
  var debby = document.getElementById("deborah");
    whyte.style.display="none";
  debby.style.display="flex";
  prev.style.display="none";
  next.style.display="block";
  purple.style.backgroundColor="#68a1c1";
  blue.style.backgroundColor="#802990";
  
  });

  next.addEventListener("click", () => {
  var whyte = document.getElementById("whyte");
  var debby = document.getElementById("deborah");
    whyte.style.display="flex";
  debby.style.display="none";
  prev.style.display="block";
  next.style.display="none";
  purple.style.backgroundColor="#802990";
  blue.style.backgroundColor="#68a1c1";
  });





function readFile () {
var image = document.getElementById('imageResult');
  image.src = URL.createObjectURL(event.target.files[0]);
  image.style.width="100px";
  image.style.height="100px";
  image.style.display="block"
  var text = document.getElementById("uploadText");
  text.innerText="image uploaded";
};


var pw = document.getElementById("psw");

pw.addEventListener("mouseover", () =>{
if(pw.type === "password") {
  pw.type ="text";
} else {
 pw.type = "password";
};

});

