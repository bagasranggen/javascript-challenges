function verifyPassword() {
  var correctPassword = "apahayo";
  var submitedPassword = document.getElementById("password").value;

  if (submitedPassword == correctPassword) {
    alert("Correct!");
  } else {
    window.location = "https://kode.id/home";
  }

}
