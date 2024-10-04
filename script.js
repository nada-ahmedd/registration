document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const birthDate = document.getElementById('birthDate').value.trim();

    const namePattern = /^[A-Za-z]{3,}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^(\+?\d{1,3})?\d{10}$/;
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;

    if (!namePattern.test(firstName)) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid First Name',
            text: 'First name must be at least 3 letters.',
        });
        return;
    }

    if (!namePattern.test(lastName)) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Last Name',
            text: 'Last name must be at least 3 letters.',
        });
        return;
    }

    if (!emailPattern.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Email',
            text: 'Please enter a valid email address.',
        });
        return;
    }

    if (!phonePattern.test(phone)) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Phone Number',
            text: 'Phone number should be 10 digits.',
        });
        return;
    }

    if (!datePattern.test(birthDate)) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Date of Birth',
            text: 'Please enter a valid date of birth.',
        });
        return;
    }

    Swal.fire({
        icon: 'success',
        title: 'Form Submitted',
        text: 'Your registration form has been successfully submitted!',
    });
     });