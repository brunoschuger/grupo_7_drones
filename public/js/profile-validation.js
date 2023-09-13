document.addEventListener('DOMContentLoaded', () => {
    // Obtener elementos del formulario
    const emailInput = document.getElementById('emailEdit');
    const newPasswordInput = document.getElementById('newPasswordEdit');
    const submitButton = document.getElementById('submitEditProfile');
    const emailMessage = document.getElementById('emailEditMessage');
    const passwordMessage = document.getElementById('passwordMessage');
  
    // Función para validar el correo electrónico
    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  
    // Función para validar la contraseña
    function validatePassword(password) {
      return password.length >= 8 && /[A-Z]/.test(password);
    }
  
    // Función para habilitar o deshabilitar el botón "Guardar cambios"
    function updateSubmitButton() {
      const isEmailValid = validateEmail(emailInput.value);
      const isPasswordValid = validatePassword(newPasswordInput.value);
  
      if (isEmailValid && isPasswordValid) {
        submitButton.removeAttribute('disabled');
        emailMessage.textContent = '';
        passwordMessage.textContent = '';
      } else {
        submitButton.setAttribute('disabled', 'disabled');
        if (!isEmailValid && emailInput.value.trim() !== '') {
          emailMessage.textContent = 'Ingrese un correo electrónico válido.';
        } else {
          emailMessage.textContent = '';
        }
        if (!isPasswordValid && newPasswordInput.value.trim() !== '') {
          passwordMessage.textContent = 'La contraseña debe tener al menos 8 caracteres y una mayúscula.';
        } else {
          passwordMessage.textContent = '';
        }
      }
    }
  
    // Agregar eventos de entrada para los campos de correo electrónico y contraseña
    emailInput.addEventListener('input', updateSubmitButton);
    newPasswordInput.addEventListener('input', updateSubmitButton);
  
    // Llamar a la función de actualización inicial (después de unos milisegundos para evitar el mensaje de error inmediato)
    setTimeout(updateSubmitButton, 100);
  
    // Validación del formulario al hacer clic en "Guardar cambios"
    submitButton.addEventListener('click', (e) => {
      if (!validateEmail(emailInput.value) || !validatePassword(newPasswordInput.value)) {
        e.preventDefault(); // Evitar el envío del formulario si hay errores
      }
    });
  });