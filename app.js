document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('form');
  const firstName = document.querySelector('.firstName');
  const lastName = document.querySelector('.lastName');
  const email = document.querySelector('.email');
  const password = document.querySelector('.password');
  const togglePassword = document.getElementById('togglePassword');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
  });

  function validateInputs() {
    // Check first name
    if (firstName.value.trim() === '') {
      showError(firstName, 'First Name cannot be empty');
    } else {
      removeError(firstName);
    }

    // Check last name
    if (lastName.value.trim() === '') {
      showError(lastName, 'Last Name cannot be empty');
    } else {
      removeError(lastName);
    }

    // Check email
    if (!validateEmail(email.value.trim()) || email.value.trim() === '') {
      showError(email, 'Looks like this is not an email');
    } else {
      removeError(email);
    }

    // Check password
    if (password.value.trim() === '') {
      showError(password, 'Password cannot be empty');
    } else {
      removeError(password);
    }
  }

  function showError(input, message) {
    const formControl = input.parentElement;
    input.classList.add('error');
    const errorMessage = formControl.querySelector('.error-message');
    const alertIcon = formControl.querySelector('.notifyalert');
    errorMessage.style.display = 'block';
    errorMessage.textContent = message;
    if (alertIcon) {
      alertIcon.style.display = 'block';
    }
  }

  function removeError(input) {
    const formControl = input.parentElement;
    input.classList.remove('error');
    const errorMessage = formControl.querySelector('.error-message');
    const alertIcon = formControl.querySelector('.notifyalert');
    errorMessage.style.display = 'none';
    if (alertIcon) {
      alertIcon.style.display = 'none';
    }
  }

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  // Toggle password visibility
  togglePassword.addEventListener('click', () => {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    togglePassword.classList.toggle('fa-eye');
    togglePassword.classList.toggle('fa-eye-slash');
  });
});
