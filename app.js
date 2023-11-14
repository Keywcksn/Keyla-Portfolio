document.getElementById("viewCvBTN").addEventListener("click", function() {
    window.open("./assets/CV ATS - Keyla Azzahra.pdf", "_blank");
});

// Get a reference to the button and the target section
const scrollButton = document.getElementById("contactBTN");
const targetSection = document.getElementById("contact");

// Add a click event listener to the button
scrollButton.addEventListener("click", () => {
  // Use the `scrollIntoView` method to scroll to the target section
  targetSection.scrollIntoView({
    behavior: "smooth", // Add smooth scrolling behavior
    block: "start", // Scroll to the top of the target section
  });
});


function openmenu() {
    side.style.right = "0";
}

function closemenu() {
    side.style.right = '-200px'
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbx2lB3VZn-H2ntIYbf_SG704ul8DHaTYqN8HXAslgZCAa0nrJD1b7GWLwYrEWbcxZx_/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent!"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)

        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})


let contactBTN = document.getElementById('contactBTN');

let bgdown = document.getElementById('bgdown');

window.addEventListener('scroll', () => {
    let val = window.scrollY;

    contactBTN.style.top = val * -1.5 + 'px';

    // bgup.style.left = val * -1.5 + 'px';
    // bg2.style.left = val * 1.5 + 'px';
    // bg3.style.left = val * -1.5 + 'pax';
    bgdown.style.top = val * -1 + 'px';
});



// animate skills
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.card');  //ganti nama class
hiddenElements.forEach((el) => observer.observe(el));


//animate
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements2 = document.querySelectorAll('.stitle, .title, .about1, .about2');  //ganti nama class
hiddenElements2.forEach((el) => observer2.observe(el));


const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show2');
        }
        else {
            entry.target.classList.remove('show2');
        }
    });
});

const hiddenElements3 = document.querySelectorAll('.leftside, .rightside');  //ganti nama class
hiddenElements3.forEach((el) => observer3.observe(el));
