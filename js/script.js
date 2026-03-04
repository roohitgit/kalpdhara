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