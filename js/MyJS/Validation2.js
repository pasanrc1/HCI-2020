

function ValidateForm(){
	var status = true;

	var email = document.forms["form1"]["inputEmail4"].value;
	var password = document.forms["form1"]["inputPassword4"].value;
	var address = document.forms["form1"]["inputAddress"].value;
	var city = document.forms["form1"]["inputCity"].value;
	var state = document.forms["form1"]["inputState"].value;
	var zip = document.forms["form1"]["inputZip"].value;


	if( email == ""){
		alert("Email field should be filled.");
		status = false;
		document.getElementById("inputEmail4").style.backgroundColor = "#fa9687";
		return false;
		
	}

	if( password == ""){
		alert("Password field should be filled.");
		status = false;
		document.getElementById("inputPassword4").style.backgroundColor = "#fa9687";
		return false;
		
	}

	if( address == ""){
		alert("Address field should be filled.");
		status = false;
		document.getElementById("inputAddress").style.backgroundColor = "#fa9687";
		return false;
		
	}

	if( city == ""){
		alert("City field should be filled.");
		status = false;
		document.getElementById("inputCity").style.backgroundColor = "#fa9687";
		return false;
		
	}

	if( state == ""){
		alert("State field should be filled.");
		status = false;
		document.getElementById("inputState").style.backgroundColor = "#fa9687";
		return false;
		
	}

	if( zip == ""){
		alert("Zip field should be filled.");
		status = false;
		document.getElementById("inputZip").style.backgroundColor = "#fa9687";
		return false;
		
	}

	if( status == true ){
		window.location.href = "ShoppingCart3.html";
	}
	
}