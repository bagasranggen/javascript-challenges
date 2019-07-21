function greeting() {
  var gender = document.getElementById("gender").value;
  var name = document.getElementById("name").value;
  var drink = prompt("Welcome " + gender + " " + name + "." + "What do you want to order for the beverages?")

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

  console.log(gender);
  console.log(name);

}
