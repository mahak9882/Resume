const textArray = [
    "“Engineering Intelligence through Code.”",
    "“9.34 CGPA | Computer Science @ Bennett.”",
    "“Building the Future with GenAI.”"
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === textArray.length) {
        count = 0;
    }
    currentText = textArray[count];
    letter = currentText.slice(0, ++index);

    const typingElement = document.getElementById("typing");
    if (typingElement) {
        typingElement.textContent = letter;
    }

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 3000); 
    } else {
        setTimeout(type, 80);
    }
}());
(function() {
    // Replace with your actual Public Key from EmailJS Account
    emailjs.init("25kwJ4UcKpRBt5GfD");
})();

const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const btnText = document.getElementById('btn-text');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // UI Feedback: Loading state
    btnText.innerHTML = "Sending...";
    submitBtn.disabled = true;

    // These IDs come from your EmailJS Dashboard
    const serviceID = 'service_eb8fkz2';
    const templateID = 'template_ig2vgwz';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btnText.innerHTML = "Message Sent!";
            submitBtn.style.backgroundColor = "#10b981"; // Change to Green
            contactForm.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                btnText.innerHTML = "Start a Conversation";
                submitBtn.style.backgroundColor = ""; 
                submitBtn.disabled = false;
            }, 3000);
        }, (err) => {
            btnText.innerHTML = "Failed to Send";
            submitBtn.style.backgroundColor = "#ef4444"; // Change to Red
            alert(JSON.stringify(err));
            submitBtn.disabled = false;
        });
});