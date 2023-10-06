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