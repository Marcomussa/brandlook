const contactForm = document.getElementById("contact-form")
const nameForm = document.getElementById("name-form")
const email = document.getElementById("email-form")
const message = document.getElementById("text-form")

const serviceID = ""
const templateID = ""

emailjs.init("");

document.addEventListener("DOMContentLoaded", () => {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault()

        var response = grecaptcha.getResponse();
        if (response.length === 0) {
            alert('Por favor, completa el reCAPTCHA antes de enviar el formulario.');
        } else {
            
        const templateParams = {
            nameForm: nameForm.value,
            email: email.value,
            message: message.value,
        };
        
        emailjs.send(serviceID, templateID, templateParams)
        .then(function(response) {
            console.log('Correo electrónico enviado con éxito:', response);
            alert('¡El correo electrónico se ha enviado con éxito!');
        }, function(error) {
            console.error('Error al enviar el correo electrónico:', error);
            alert('Hubo un error al enviar el correo electrónico. Por favor, inténtalo de nuevo.')});
        }
    });
})

