var inputId = document.getElementById('password');
inputId.addEventListener('keyup', function onEvent(e) {
	if (e.keyCode === 13) {
		verifyPassword();
	}
});

function verifyPassword() {
	var correctPassword = "apahayo";
	var submitedPassword = document.getElementById("password").value;

	if (submitedPassword == correctPassword) {
		alert("Correct!");
	} else {
		window.location = "https://kode.id/home";
	}

}
