const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting before validation

  const firstName = document.querySelector('#firstName').value;
  const lastName = document.querySelector('#lastName').value;
  const email = document.querySelector('#email').value;
  const guest = document.querySelector('#guests').value;

  if (!firstName || !lastName || !email || !guest ) {
    alert('Please fill in all fields!');
    return;
  }

  // if all inputs are filled, submit the form
  form.submit();
});



