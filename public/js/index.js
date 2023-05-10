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

const urlParams = new URLSearchParams(window.location.search);
const success = location.href.split('/')
const successAlert = success[success.length - 1];
const alert = document.createElement('div');

if (successAlert && !localStorage.getItem('alertShown')) {
  console.log('success')
  alert.classList.add('bg-green-100', 'border', 'border-green-400', 'text-green-700', 'px-4', 'py-3', 'rounded', 'relative', 'mb-4');
  alert.setAttribute('role', 'alert');
  alert.innerHTML = `
    <strong class="font-bold">Success!</strong>
    <span class="block sm:inline">Your RSVP has been submitted.</span>
    <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
      <svg class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <title>Close</title>
        <path d="M14.348 5.652a.5.5 0 00-.707 0L10 9.293 6.357 5.652a.5.5 0 00-.707.707L9.293 10l-3.643 3.643a.5.5 0 00.707.707L10 10.707l3.643 3.643a.5.5 0 00.707-.707L10.707 10l3.641-3.648a.5.5 0 000-.707z" clip-rule="evenodd" fill-rule="evenodd"></path>
      </svg>
    </span>
  `;

  const formContainer = document.querySelector('#container');
  formContainer.insertBefore(alert, formContainer.firstChild);

  localStorage.setItem('alertShown', true);
} else {
  alert.style.display = 'none';
}

const closeButton = alert.querySelector('svg');

closeButton.addEventListener('click', (event) => {
  event.preventDefault();

  alert.remove();
  localStorage.removeItem('alertShown');
});


