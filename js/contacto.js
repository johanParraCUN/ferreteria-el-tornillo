document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const nombreInput = document.getElementById('nombre');
    const nombreError = document.getElementById('nombreError');
    const successMsg = document.getElementById('successMsg');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        nombreError.textContent = '';
        successMsg.textContent = '';
        
        const nombreValue = nombreInput.value.trim();
        
        if (nombreValue.length < 2) {
            nombreError.textContent = 'El nombre debe tener al menos 2 caracteres.';
            isValid = false;
        }
        
        if (isValid) {
            // Simulate successful submission
            successMsg.textContent = '¡Mensaje enviado con éxito!';
            form.reset();
            
            // Clear success message after 3 seconds
            setTimeout(() => {
                successMsg.textContent = '';
            }, 3000);
        }
    });
});
