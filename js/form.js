document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Falta implementar acciones como enviarlos a un servidor o mostrar un mensaje al usuario
    console.log('Nombre:', name);
    console.log('Correo electrónico:', email);
    console.log('Sugerencias:', message);
});
