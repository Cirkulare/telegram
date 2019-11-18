let message;
function userName() {
  let userName = document.getElementById("Name").value;
  let lastName = document.getElementById("LastName").value;
  let eMail = document.getElementById("Email").value;
  let phone = document.getElementById("Phone").value;
  message = [userName, lastName, eMail, phone];
}
