function greeting() {
	var gender = document.getElementById("gender").value;
	var name = document.getElementById("name").value;
	var drink = prompt("Welcome " + gender + " " + name + "." + "What do you want to order for the beverages?");

	if (gender !== "" && name !== "") {
		drink;
	} else {
		alert("Please fill the form first");
	}

	if (drink !== "Juice") {
		alert("Okay, " + name + ". Your " + drink + " will be ready in a minute.")
	} else {
		alert("Sorry, the juice isn't available at the moment.")
	}

}

var identities = document.getElementById('name');
identities.addEventListener('keyup', function onEvent(e) {
	if (e.keyCode === 13) {
		greeting_new();
	}
});

function greeting_new() {
	var gender = document.getElementById("gender").value;
	var name = document.getElementById("name").value;
	var add_form = document.getElementById("beverage_form");
	var form = '<form onSubmit="return false;"><div class="input-group"><div class="input-group-prepend"><span class="input-group-text" id="beverage_message">Welcome&nbsp;<span id="insert_gender"></span>&nbsp;<span id="insert_name"></span>. What do you want to order for the beverages?</span></div><input type="text" class="form-control" id="beverage_order"><div class="input-group-append"><button type="button" class="btn btn-outline-secondary btn-light" onclick="check_beverage()">Submit</button></div></div></form>';

	if (gender !== "" && name !== "") {
		add_form.innerHTML = form;
		document.getElementById("insert_gender").innerHTML = gender;
		document.getElementById("insert_name").innerHTML = name;
	} else {
		alert("Please fill the form first");
	}

	var beverage = document.getElementById('beverage_order');
	beverage.addEventListener('keyup', function onEvent(e) {
		if (e.keyCode === 13) {
			check_beverage();
		}
	});

}

function check_beverage() {
	var drink = document.getElementById("beverage_order").value;
	var remove_form = document.getElementById("beverage_form");
	var gender = document.getElementById("gender").value;
	var name = document.getElementById("name").value;

	if (drink !== "Juice") {
		alert("Okay, " + gender + " " + name + ". Your " + drink + " will be ready in a minute.");
		remove_form.parentNode.removeChild(remove_form);
		document.getElementById("identities").reset();
	} else {
		alert("Sorry, the juice isn't available at the moment.");
	}
}
