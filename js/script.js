function subscribe() {
    var email = document.getElementById('emailInput').value;

    // Validación del correo electrónico
    if (!validateEmail(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    // Enviar el correo 
    sendSubscriptionEmail(email);
}

// Validación simple de dirección de correo electrónico
function validateEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

function sendSubscriptionEmail(email) {
    // Simulación de envío de datos al servidor (falta implementar una API)
    console.log('Enviando suscripción para:', email);

  }
