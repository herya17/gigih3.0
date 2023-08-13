document.addEventListener('DOMContentLoaded', () => {
  const submit = document.getElementById('submit');

  submit.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (validateForm()) {
      window.alert('All required complete!');
    }
  });

});

const validateForm = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const isGmail = email.includes('@gmail.com');
  const isYahoo = email.includes('@yahoo.com');

  if (email === '') {
    window.alert('Email is required');
    return false;
  }

  if (!(isGmail || isYahoo)) {
    window.alert('Email must be valid email');
    return false;
  }

  if (password === '') {
    window.alert('Password is required');
    return false;
  }

  if (password.length < 6) {
    window.alert('Password cannot less then 6 character');
    return false;
  }

  return true;
}
