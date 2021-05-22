

var nav = document.querySelector('nav');
var welcomeMsg = document.getElementById('msg');
var color = document.getElementsByTagName(nav);

//var message = document.createElement("div");
window.addEventListener('DOMContentLoaded', () =>{
    const circle = new CircularProgressBar('pie');
} );

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        
        );
    }
    
const header = document.getElementById('welcome');
const about = document.getElementById('about');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');
const message = document.getElementById('msg');






document.addEventListener('scroll', function () {
    if(isInViewport(about)){
        message.textContent = "About me"
    }
    else if(isInViewport(projects)){
        message.textContent = "Projects"
    }
    else if(isInViewport(contact)){
        message.textContent = "Contact"
    }
    else if(isInViewport(header)){
        message.textContent = "Welcome to my portfolio"
    }
}, {
    passive: true
});







window.onscroll = () =>{
    if(window.pageYOffset > 100){
        //nav.classList.add('bg-dark', 'shadow');
        nav.style.backgroundColor = "black";
    } 
    else {
        nav.classList.remove('bg-dark', 'shadow');
        //message.innerHTML= "Welcome to my portfolio";
        nav.removeAttribute("style")
    }

}

