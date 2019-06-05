const username = 'admin';
const password = 'admin123';
const submitButton = document.querySelector('#submitButton');
const results = document.querySelector('.results');

submitButton.addEventListener('click', function(event) {
  event.preventDefault();

  const formReg = document.querySelector('#register');
  const usernameInput = document.querySelector('#usernamesignup').value;
  const passwordInput = document.querySelector('#passwordsignup').value;

  if (username === usernameInput && password === passwordInput) {
    results.innerHTML = 'Username and Password correct, you may proceed';
    results.style.backgroundColor = 'green';
    // console.log('True');
  } else {
    results.innerHTML =
      'You have entered an incorrect <b>Username</b> or <b>Password</b>, please check details and try again';
    results.style.backgroundColor = 'red';
    // console.log('False');
  }
});
