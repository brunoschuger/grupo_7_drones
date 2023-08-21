window.onload = () => {
    const submitButton = document.getElementById('new-product-submit');
    const nameInp = document.getElementById('new-product-name');
    const descriptionInp = document.getElementById('new-product-description');
    const priceInp = document.getElementById('new-product-price');
    const imgInp = document.getElementById('new-product-img');
    const imgError = document.getElementById('imgError');
    console.log(priceInp)
   
    submitButton.disabled = true;
    const isFieldNotEmpty = (value) => {
        return value.trim() !== '';
    };

    const areAllFieldsNotEmpty = () => {
        return (
            isFieldNotEmpty(nameInp.value) &&
            isFieldNotEmpty(descriptionInp.value) &&
            isFieldNotEmpty(priceInp.value) 
        );
    };

    const checkErrors = () => {
        const errorsHTML = Array.from(document.querySelectorAll('.error'));
        const errors = errorsHTML.map(error => error.innerHTML);
        console.log(errors)
        submitButton.disabled = errors.some(error => error !== "") || !areAllFieldsNotEmpty()
    }

    const isValidImageType = (filename) => {
        const allowedExtensions = ['.jpg', '.jpeg', '.png'];
        const fileExtension = filename.substring(filename.lastIndexOf('.')).toLowerCase();
        return allowedExtensions.includes(fileExtension);
    };

    const validateName = (value) => {
        const length = value.length;

        if (length === 0) {
            return 'El campo no puede estar vacío';
        } else {
            return '';
        }
    };
    nameInp.oninput = (e) => {
        const value = e.target.value;
        const errorMessage = validateName(value);
        e.target.nextElementSibling.innerHTML = errorMessage;
        checkErrors();
    };

    const validateDescription = (value) => {
        const length = value.length;

        if (length === 0) {
            return 'El campo no puede estar vacío';
        } else if (length < 40) {
            return 'La descripcion tiene que tener al menos 40 caracteres';
        } else {
            return ''
        }
    };
    descriptionInp.oninput = (e) => {
        const value = e.target.value;
        const errorMessage = validateDescription(value);
        e.target.nextElementSibling.innerHTML = errorMessage;
        checkErrors();
    };
    const validatePrice = (value) => {
        const length = value.length;

        if (value < 1000) {
            return 'El precio tiene que ser minimo de 1000';
        } else {
            return ''
        }
    };
    priceInp.oninput = (e) => {
        const value = e.target.value;
        const errorMessage = validatePrice(value);
        e.target.nextElementSibling.innerHTML = errorMessage;
        checkErrors();
    };

    submitButton.addEventListener('click', (event) => {
        // Evita que el formulario se envíe automáticamente
        event.preventDefault();

        // Verifica si todas las validaciones de campos están pasando
        if (areAllFieldsNotEmpty()) {
            // Verifica las validaciones de la imagen
            if (!isFieldNotEmpty(imgInp.value)) {
                imgError.innerHTML = 'Debes seleccionar una imagen';
            } else if (!isValidImageType(imgInp.value)) {
                imgError.innerHTML = 'Debes seleccionar una imagen válida';
            } else {
                // Todas las validaciones pasaron, puedes enviar el formulario
                imgError.innerHTML = ''; // Limpia el mensaje de error de la imagen
                submitButton.disabled = false; // Activa el botón de submit
                submitButton.form.submit(); // Envía el formulario
            }
        }
    });

    


};

