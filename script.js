// Tambahkan kode JavaScript kalian di file ini
function handleGetFormData () {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const city = document.getElementById('city').value;
  const zipCode = document.getElementById('zip-code').value;
  const status = document.getElementById('status').checked ? 'checked' : 'unchecked';

  const data = {
    name: name,
    email: email,
    city: city,
    zipCode: zipCode,
    status: status
  }

  return data;
}

function isNumber (string) {
  i = document.getElementById('zip-code');
  for (let i = 0; i < string.length; i++) {
    if (isNaN(string[i])) {
      return false;
    }
  }
  return true;
}

function checkboxIsChecked() {
  const data = handleGetFormData();

  const nilaiStatus = data.status;

  return nilaiStatus === 'checked';
}


function validateFormData(data) {

  if (data === null) {
    return false;
  }
  if (!isNumber(data.zipCode)) {
    return false;
  }
  if (!checkboxIsChecked(data.status)) {
    return false;
  }
  return true;
}

const kirim = document.getElementById('submit-form');
kirim.addEventListener('click', submit);


function submit (event) {
  event.preventDefault();
  const data = handleGetFormData();
  const isValid = validateFormData(data);

  if (!isValid) {
    alert ('Periksa form anda sekali lagi');
  } else {
    alert ('');
  }
}
