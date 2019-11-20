const myForm = document.getElementById('myForm');

  myForm.addEventListener('submit', function (e) {
  e.preventDefault();

  let formData = {
    'User name': document.getElementById("Name").value,
    "User last name": document.getElementById("LastName").value,
    "E Mail": document.getElementById("Email").value,
    "User phone": document.getElementById("Phone").value
  };

    fetch('/submit', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify(formData)
  }).then(function(response) {
    return response.text();
  }).then(function (text) {
    console.log(text);
  }).catch(function (error) {
      console.error(error);
  })});
