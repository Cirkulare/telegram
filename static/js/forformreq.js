const myform = document.getElementById('myForm');

myform.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch('/submit', {
    method: 'post',
    body: formData
  }).then(function(response) {
    return response.text();
  }).then(function (text) {
    console.log(text);
  }).catch(function (error) {
    console.error(error);
  })
});
