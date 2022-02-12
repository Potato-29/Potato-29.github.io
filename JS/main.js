

AOS.init();



var nav = document.querySelector('nav');
var welcomeMsg = document.getElementById('msg');
var color = document.getElementsByTagName(nav);
var arrow =  document.getElementById('icon');


//var message = document.createElement("div");
window.addEventListener('DOMContentLoaded', () =>{
    const circle = new CircularProgressBar('pie'); circle.initial()
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
    
var header = document.getElementById('btn');
var skillSection = document.getElementById('skills');
var projects = document.getElementById('aboutSection');
var footer = document.getElementById('footerSection');
var message = document.getElementById('msg');




var mobile = window.matchMedia("(max-width: 480px)")
var tablet = window.matchMedia("(min-width: 600px)")

document.addEventListener('scroll', function () {
    if(isInViewport(skills)){
        if(mobile.matches || tablet.matches){
            message.textContent = "Skills"
        }
        else{
            message.textContent = "Skills"
            message.style.paddingLeft = "500px"
        }
       
    }
    
    else if(isInViewport(projects)){
        if(mobile.matches || tablet.matches){
            message.textContent = "Projects"
        }
        else{
            message.textContent = "Projects"
            message.style.paddingLeft = "500px"
        }
        
    }
    else if(isInViewport(footer)){
        if(mobile.matches || tablet.matches){
            message.textContent = "End"
        }
        else{
            message.textContent = "End"
            message.style.paddingLeft = "500px"
        }
    }
    
    else if(isInViewport(header)){
        message.textContent = "Welcome to my portfolio"
        
        message.removeAttribute("style")
       
    }
}, {
    passive: true
});







window.onscroll = () =>{
    if(window.pageYOffset > 100){
        //nav.classList.add('bg-dark', 'shadow');
        nav.style.backgroundColor = "black";
        arrow.style.opacity = 0;
        

    } 
    else {
        nav.classList.remove('bg-dark', 'shadow');
        //message.innerHTML= "Welcome to my portfolio";
        nav.removeAttribute("style")
        arrow.removeAttribute("style")
        
    }

}

