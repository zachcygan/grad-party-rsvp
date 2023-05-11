const form = document.querySelector('form');

const fetchData = async (data) => {
  const createUser = await fetch('/rsvp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (!createUser.ok) {
    alert('Error submitting RSVP!');
    return;
  }

  if (createUser.ok) {
    window.location.href = '/success'
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting before validation

  const firstName = document.querySelector('#firstName').value;
  const lastName = document.querySelector('#lastName').value;
  const email = document.querySelector('#email').value;
  const partySize = document.querySelector('#guests').value;
  const yesAtt = document.querySelector('#yesAtt');
  const noAtt = document.querySelector('#noAtt');
  let attendance = -1; // 0 is false, 1 is true

  if (yesAtt.checked) {
    attendance = 1;
  } else if (noAtt.checked) {
    attendance = 0;
  } else {
    attendance = -1;
  }
  console.log(partySize)

  const data = {
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    email: email.trim(),
    partySize: partySize,
    attendance: attendance
  }
  

  if (!yesAtt.checked && !noAtt.checked) {
    alert('Please fill in all fields!');
    return;
  }

  if (!firstName || !lastName || !email || !partySize) {
    alert('Please fill in all fields!');
    return;
  }

  fetchData(data);

  // if all inputs are filled, submit the form
  // form.submit();
  
});



