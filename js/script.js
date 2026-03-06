// Smooth scrolling for navigation links

document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", function(e) {

if (this.hash !== "") {

e.preventDefault();

const target = document.querySelector(this.hash);

if(target){
target.scrollIntoView({
behavior: "smooth"
});
}

}

});

});



// Sticky header shadow on scroll

window.addEventListener("scroll", function(){

const header = document.querySelector("header");

if(window.scrollY > 50){
header.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
}
else{
header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";
}

});


function openImage(src){
document.getElementById("imagePopup").style.display = "flex";
document.getElementById("popupImg").src = src;
}

function closeImage(){
document.getElementById("imagePopup").style.display = "none";
}

// HAMBURGER MENU

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

menuToggle.classList.toggle("active");
navMenu.classList.toggle("active");

});

// CLOSE MENU AFTER CLICK

document.querySelectorAll("#navMenu a").forEach(link => {

link.addEventListener("click", () => {

menuToggle.classList.remove("active");
navMenu.classList.remove("active");

});

});

console.log("%c👨‍💻 Designed & Developed by Rohit Badole",
"color:#c79a3b; font-size:18px; font-weight:bold;");

