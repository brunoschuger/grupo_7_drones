window.onload = () => {
    console.log("se cargo la pagina")
    
  
    const passwordInp = document.querySelector("#password-login");
    const emailInp = document.querySelector("#email-login");
    const submitButton = document.getElementById('login-btn')

    const isFieldNotEmpty = (value) => {  // funcion que revisa que un campo no este vacio
        return value.trim() !== '';
    };
    const areAllFieldsNotEmpty = () => {   // funcion que revisa (utilizando la anterior) que todos los campos tengan info 
        return (
            isFieldNotEmpty(emailInp.value) &&
            isFieldNotEmpty(passwordInp.value)
        );
    };
    const checkErrors = () => {
        const errorsHTML = Array.from(document.querySelectorAll('.error'));
        const errors = errorsHTML.map(error => error.innerHTML);
        console.log('estos son los errores:  ' + errors); 
        const passwordError = validatePassword(passwordInp.value); // el boton no se habilita hasta que la pw cumpla los requisitos, pero no mostramos msj de error
        submitButton.disabled = errors.some(error => error !== "") || !areAllFieldsNotEmpty() || passwordError !== ''
        // revisamos con el metodo some si hay algun mensaje de error, y sumamos el checkeo de campos vacios 
        //para solucionar el problema de la activacion del boton de submit cuando completabamos solo 1 campo de forma correcta.
    };
   
    /*  separamos funciones de validacion (que retornan msj de error), y eventos on change donde el value se pasa como 
parametro de dicha funcion */

    
    const validateEmail = (value) => {
        const length = value.length;
        const isEmailCorrect = value.includes('@') && value.includes('.');

        if (!isEmailCorrect || length < 6) {
            return 'El email es inválido';
        } else {
            return '';
        }
    };
    emailInp.oninput = (e) => {
        const value = e.target.value;
        const errorMessage = validateEmail(value);
        const errorParagraph = e.target.parentElement.querySelector('.error');
        errorParagraph.innerHTML = errorMessage;
        checkErrors();
    };

    const validatePassword = (value) => {
        const length = value.length;
        const hasUppercase = /[A-Z]/.test(value);

        if (length < 8) {
            return 'La contraseña debe tener al menos 8 caracteres';
         } else if (!hasUppercase) {
            return 'La contraseña debe contener al menos una letra mayúscula'; 
        } else {
            return '';
        }
    };

    passwordInp.oninput = (e) => {
        const value = e.target.value;
        const errorMessage = validatePassword(value);
        /* const errorParagraph = e.target.parentElement.querySelector('.error');
        errorParagraph.innerHTML = errorMessage; */
        checkErrors();
    };


    // Deshabilita el botón al cargar la página
    submitButton.disabled = true;
}
