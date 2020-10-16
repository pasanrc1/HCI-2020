<script>
		var user_fnameOutput = document.getElementById('user_fnameOutput');
		var user_lnameOutput = document.getElementById('user_lnameOutput');
		var user_addressOutput = document.getElementById('user_addressOutput');
		var user_countryOutput = document.getElementById('user_countryOutput');
		var user_namOutput = document.getElementById('user_nameOutput');
		var user_secret_question = document.getElementById('user_secret_questionOutput');
		var user_secret_question_answer = document.getElementById('user_secret_question_answerOutput');
		var user_password1 = document.getElementById('user_password1Output');
		var user_password2 = document.getElementById('user_password2Output');
		var user_email = document.getElementById('user_emailOutput');

		function checkUsername(inputField, outputField, minLength, maxLength, inpName){
			var inp = document.getElementById(inputField).value;

			if(inp.length <= 0){
				document.getElementById(outputField).innerHTML = inpName + " should not be empty!";
				return false
			}

			else{
				if( !(inp.length >= minLength && inp.length <= maxLength) ){
					document.getElementById(outputField).innerHTML = "Length should be <br>" + minLength + " to " + maxLength + " characters long";
					return false;
				}

				else{
					document.getElementById(outputField).innerHTML="<img src=\'images/validation/check.png\' width=\'20px\' height=\'20px\'>";
					return true;
				}
			}
			
		}

		function checkString(inputField, outputField, inpName){
			var inp = document.getElementById(inputField).value;
			var letters = /^[A-Za-z]+$/;

			if(inp.length <= 0){
				document.getElementById(outputField).innerHTML = inpName + " should not be empty!";
				return false;
			}

			else{

				if( !((inp).match(letters)) ){
					document.getElementById(outputField).innerHTML = inpName + " should contain only<br> Alphabetical Characters";
					return false;
				}

				else{
					document.getElementById(outputField).innerHTML="<img src=\'images/validation/check.png\' width=\'20px\' height=\'20px\'>";
					return true;
				}
				
			}
			
		}

		function dateValidation(dateField, outputField, inpName) {
			var inp = document.getElementById(dateField).value;
			var date_regex = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/ ;

			if( !(date_regex.match(inp)) ){
				document.getElementById(outputField).innerHTML = "Invalid " + inpName;
				return false;
			}

			else{
					document.getElementById(outputField).innerHTML="<img src=\'images/validation/check.png\' width=\'20px\' height=\'20px\'>";
					return true;
			}
		}

		function addressValidation(inputField, outputField, minLength, inpName){
			var inp = document.getElementById(inputField).value;

			if(inp.length <= 0){
				document.getElementById(outputField).innerHTML = inpName + " should not be empty!";
				return false;
			}

			else{
				if(inp.length <= minLength){
					document.getElementById(outputField).innerHTML = inpName + " should contain<br> more than " + minLength + " characters!";
					return false;
				}

				else{
					document.getElementById(outputField).innerHTML="<img src=\'images/validation/check.png\' width=\'20px\' height=\'20px\'>";
					return true;
				}
			}
			
		}

		function checkEmpty(inputField, outputField, inpName){
			var inp = document.getElementById(inputField).value;
			if(inp.length <= 0){
				document.getElementById(outputField).innerHTML = inpName + " should not be empty";
			}

			else{
					document.getElementById(outputField).innerHTML="<img src=\'images/validation/check.png\' width=\'20px\' height=\'20px\'>";
					return true;
				}
		}

		function checkPassword(inputField, outputField, inpName, minLength){
			var inp = document.getElementById(inputField).value;
			var pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/ ;
			
			if(inp.length <= 0){
				document.getElementById(outputField).innerHTML = inpName + " should not be empty";
				return false;
			}

			else{
					if( !(inp.length >= 8) ){
						document.getElementById(outputField).innerHTML = "Password should more than <br>" + minLength + " characters long";
						return false;
					}

					else{
						if( !(inp.match(pattern)) ){
							document.getElementById(outputField).innerHTML = "Password should contains at least<br> 1 uppercase, 1 lowercase, <br> 1 digit and 1 Special Character";
							return false;
						}	

						else{
							document.getElementById(outputField).innerHTML="<img src=\'images/validation/check.png\' width=\'20px\' height=\'20px\'>";
							return true;
						}
					}

					
			}
		}

		function confirmPassword(inputField, compareField, outputField, inpName){
			var inp = document.getElementById(inputField).value;
			var comp = document.getElementById(compareField).value;

			if(inp.length >= 1){
				if(inp == comp){
					document.getElementById(outputField).innerHTML="<img src=\'images/validation/check.png\' width=\'20px\' height=\'20px\'>";
					return true;
				}
			}

			else{
				document.getElementById(outputField).innerHTML = inpName + " doesn't match";
				return false;
			}


			
		}

		function emailValidation(inputField, outputField, inpName){
			var inp = document.getElementById(inputField).value;
			var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

			if(inp.length  <= 0){
				document.getElementById(outputField).innerHTML = inpName + " should not be empty";
				return false;
			}

			else{
					if(inp.match(pattern)){
						document.getElementById(outputField).innerHTML="<img src=\'images/validation/check.png\' width=\'20px\' height=\'20px\'>";
						return true;
					}

					else{
						document.getElementById(outputField).innerHTML = inpName + " is invalid";
						return false;
					}	
			}
		}



		function formFullValidation(){
			var cnt = 0;
			if(checkString('user_fname', 'user_fnameOutput', 'First Name') == true){
				cnt = cnt + 1;
			}

			if(checkString('user_lname', 'user_lnameOutput', 'Last Name') == true){
				cnt = cnt + 1;
			}

			/*if(dateValidation('user_dob', 'user_dobOutput', 'Date of Birth') == true){
				cnt = cnt + 1;
			}*/

			if(addressValidation('user_address', 'user_addressOutput', 10, 'Address') == true){
				cnt = cnt + 1;
			}

			if(checkEmpty('user_country', 'user_countryOutput', 'Country') == true){
				cnt = cnt + 1;
			}

			if(checkUsername('user_name', 'user_nameOutput', 5, 15, 'Username') == true){
				cnt = cnt  + 1;
			}

			if(checkEmpty('user_secret_question', 'user_secret_questionOutput', 'Secret Question') == true){
				cnt = cnt + 1;
			}

			if(checkEmpty('user_secret_question_answer', 'user_secret_question_answerOutput', 'Secret Question Answer') == true){
				cnt = cnt + 1;
			}

		
			if(checkPassword('user_password1', 'user_password1Output', 'Passwords', 8) == true){
				cnt = cnt + 1;
			}

			if(confirmPassword('user_password2', 'user_password1', 'user_password2Output', 'Passwords') == true){
				cnt = cnt + 1;
			}

			if(emailValidation('user_email', 'user_emailOutput', 'Email Address') == true){
				cnt = cnt + 1;
			}

			if(cnt == 10){
				return true;
			}

			else{
				return false;
			}

		}

		function checkLogin(username, password){
			
		}

		

	</script>