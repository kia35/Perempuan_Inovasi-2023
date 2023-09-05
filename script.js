function handleGetFormData() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const city = document.getElementById('city').value;
  const zipCode = document.getElementById('zip-code').value;
  const status = document.getElementById('status').checked ? 'on' : 'off';

  const data = {
    name: name,
    email: email,
    city: city,
    zipCode: zipCode,
    status: status,
  };

  return data;
}

function isNumber(string) {
  for (let i = 0; i < string.length; i++) {
    if (isNaN(string[i]) || string.trim() === "") {
      return false;
    }
  }
  return true;
}

function checkboxIsChecked() {
  const statusCheckbox = document.getElementById('status');
  return statusCheckbox.checked;
}

function validateFormData(data) {
  if (data === null) {
    return false;
  }
  if (!isNumber(data.zipCode)) {
    return false;
  }
  if (!checkboxIsChecked()) {
    return false;
  }
  return true;
}

const form = document.getElementById('form');
form.addEventListener('submit', submit);

function submit(event) {
  event.preventDefault();
  const formData = handleGetFormData(); // Get the form data
  const isValid = validateFormData(formData);

  if (!isValid) {
    alert('Periksa form anda sekali lagi');
  } else {
    alert('Terimakasih.');
  }
}
