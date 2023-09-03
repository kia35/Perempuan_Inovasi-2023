// Tambahkan kode JavaScript kalian di file ini
function handleGetFormData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;

  return {
    name,
    email,
    city,
    zipCode,
    status,
  };
}


function isNumber(str) {

  return !isNaN(str);
}


function checkboxIsChecked() {
  const status = document.getElementById('status');
  return status.checked;
}


function validateFormData(obj) {
  return obj !== null && typeof obj.zipCode === 'number' && document.getElementById('status').checked;
}


let btnKirim = document.getElementById("submit-form")
console.log(btnKirim);
btnKirim.addEventListener("click", submit)

function submit(event) {
  event.preventDefault();
  const warning = document.getElementById('warning');
  if (!validateFormData(formData)) {
    warning.innerHTML = 'Periksa form anda sekali lagi';
  } else {
    warning.innerHTML = '';
  }
}

document.getElementById('form').addEventListener('submit', submit);
