window.onload=pageLoad;
function pageLoad(){
	var contactForm = document.getElementById("form");
	contactForm.onsubmit= validate;
}
function validate(){
	var check = true;
	var first = document.getElementById("first").value;
	var last = document.getElementById("last").value;
	var number = document.getElementById("number").value;
	var username = document.getElementById("username").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	
	if(first == ""){
		alert('Name is required !');
		check= false;
	}
	if(last == ""){
		alert('Name is required !');
		check= false;
	}
	if(username == ""){
		alert('Username is required !');
		check= false;
	}
	
	if(email == ""){
		alert('E-mail is required !');
		check= false;
	}

	if(password == ""){
		alert('Password is required !');
		check= false;
	}
	
	
	if (number == "") {

		alert('Phone is required !');
	}
	

	if (!first.match(/^[A-Za-z ]+$/)){ //space------------------------------
		alert("only letters or space allowed in name field");
		check= false;
	}
	if (!last.match(/^[A-Za-z ]+$/)){ //space------------------------------
		alert("only letters or space allowed in name field");
		check= false;
	}
	if (!email.match(/^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/)){
		alert("Email is Not Valid");
		check=false;
	}

	if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)){
		alert("Password is Not Valid, It must contain 8 characters: 1 uppercase, one lowercase, one number and one special character at least");
		check=false;
	}
	
	if (!number.match(/[0-9]{3}-[0-9]{3}-[0-9]{4}/)){
		//if (!phone.match(/^[0-9]{11}$/)){

		alert("Phone is not valid");
		check=false;
	}

	
	return check;


}
