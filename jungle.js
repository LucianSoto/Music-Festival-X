const toggle = document.getElementById('toggle');
const navtoggle = document.getElementById('nav-toggle')
const email = document.getElementById('email');


// Toggle Nav Bar   
toggle.addEventListener('click', () =>
    navtoggle.classList.toggle('show-toggle')
);



// Slide Show
var slideIndex=1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex+=n)
}

function currentSlide(n) {
    showSlides(slideIndex=n);
}

function showSlides(n) {

    var i;
    var slides=document.getElementsByClassName("mySlides");
    var dots=document.getElementsByClassName("dot");

    if (n > slides.length){slideIndex=1;}

    if ( n < 1 ){slideIndex=slides.length;}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display="none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className=dots[i].className.replace("active", "");
    }

    slides[slideIndex-1].style.display="block";

    dots[slideIndex-1].className+=" active";
}

var timer = setInterval(function(){
    slideIndex++;
    showSlides(slideIndex);
},2000);




// Email REGEX check function
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //const re uses the expression above
    if(re.test(String(email).toLowerCase())) {
        showSuccess(input);
} else {
    alert("Email Not Valid");
}
}

// event listeners
email.addEventListener('submit', function(e) {
    e.preventDefault()

    isValidEmail(email);
});