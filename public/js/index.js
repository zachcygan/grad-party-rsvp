const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting before validation
  
  const firstName = document.querySelector('#firstName').value;
  const lastName = document.querySelector('#lastName').value;
  const email = document.querySelector('#email').value;
  
  if (!firstName || !lastName || !email) {
    alert('Please fill in all fields!');
    return;
  }
  
  // if all inputs are filled, submit the form
  form.submit();
});
