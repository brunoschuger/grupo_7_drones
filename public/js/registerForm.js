window.onload = () => {

    const nameInp = document.querySelector("#name");
    const lastNameInp = document.querySelector("#last_name");
    const passwordInp = document.querySelector("#password");
    const confirmPasswordInp = document.querySelector("#confirmPassword");
    const imgInp = document.querySelector("#profileImg");
    const emailInp = document.querySelector("#email");
    const usernameInp = document.querySelector("#username");
    const submitButton = document.getElementById('register-submit-btn')

    const isFieldNotEmpty = (value) => {  // funcion que revisa que un campo no este vacio
        return value.trim() !== '';
    };
    const areAllFieldsNotEmpty = () => {   // funcion que revisa (utilizando la anterior) que todos los campos tengan info 
        return (
            isFieldNotEmpty(nameInp.value) &&
            isFieldNotEmpty(lastNameInp.value) &&
            isFieldNotEmpty(usernameInp.value) &&
            isFieldNotEmpty(emailInp.value) &&
            isFieldNotEmpty(passwordInp.value) &&
            isFieldNotEmpty(confirmPasswordInp.value)
        );
    };
    const checkErrors = () => {
        const errorsHTML = Array.from(document.querySelectorAll('.error'));
        const errors = errorsHTML.map(error => error.innerHTML);
        console.log(errors)
        submitButton.disabled = errors.some(error => error !== "") || !areAllFieldsNotEmpty();
        // revisamos con el metodo some si hay algun mensaje de error, y sumamos el checkeo de campos vacios 
        //para solucionar el problema de la activacion del boton de submit cuando completabamos solo 1 campo de forma correcta.
    };

    /*  separamos funciones de validacion (que retornan msj de error), y eventos on change donde el value se pasa como 
parametro de dicha funcion */
    const validateName = (value) => {
        const length = value.length;

        if (length === 0) {
            return 'El campo no puede estar vacío';
        } else if (length > 20 || !/^[a-zA-ZñÑáÁéÉíÍóÓúÚ\s]+$/.test(value)) {  // prohibe caracteres especiales en el nombre
            return 'El nombre es inválido';
        } else {
            return '';
        }
    };
    nameInp.onchange = (e) => {
        const value = e.target.value;
        const errorMessage = validateName(value);
        e.target.nextElementSibling.innerHTML = errorMessage;
        checkErrors();
    };
    const validateLastName = (value) => {
        const length = value.length;

        if (length === 0) {
            return 'El campo no puede estar vacío';
        } else if (length > 20 || !/^[a-zA-ZñÑáÁéÉíÍóÓúÚ\s]+$/.test(value)) {
            return 'El apellido es inválido';
        } else {
            return '';
        }
    };

    lastNameInp.onchange = (e) => {
        const value = e.target.value;
        const errorMessage = validateLastName(value);
        e.target.nextElementSibling.innerHTML = errorMessage;
        checkErrors();
    };

    const validateUsername = (value) => {
        const length = value.length;

        if (length === 0) {
            return 'El campo no puede estar vacío';
        } else if (length > 10) {
            return 'El nombre de usuario no puede exceder los 10 caracteres';
        } else if (/\s/.test(value)) {
            return 'El nombre de usuario no puede contener espacios';
        } else {
            return '';
        }
    };

    usernameInp.onchange = (e) => {
        const value = e.target.value;
        const errorMessage = validateUsername(value);
        e.target.nextElementSibling.innerHTML = errorMessage;
        checkErrors();
    }
    const validateEmail = (value) => {
        const length = value.length;
        const isEmailCorrect = value.includes('@') && value.includes('.');

        if (!isEmailCorrect || length < 6) {
            return 'El email es inválido';
        } else {
            return '';
        }
    };
    emailInp.onchange = (e) => {
        const value = e.target.value;
        const errorMessage = validateEmail(value);
        e.target.nextElementSibling.innerHTML = errorMessage;
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
        e.target.nextElementSibling.innerHTML = errorMessage;
        checkErrors();
    };

    const validateConfirmPassword = (value, originalPassword) => {
        if (value !== originalPassword) {
            return 'Las contraseñas no coinciden';
        } else {
            return '';
        }
    };

    confirmPasswordInp.oninput = (e) => {
        const value = e.target.value;
        const errorMessage = validateConfirmPassword(value, passwordInp.value);
        e.target.nextElementSibling.innerHTML = errorMessage;
        checkErrors();
    };

    // Deshabilita el botón al cargar la página
    submitButton.disabled = true;
}
