var surname = document.getElementById("surnameField");
var age = document.getElementById("ageField");
var woman = document.getElementById("woman");
var man = document.getElementById("man");

surname.addEventListener("blur",checkSurname, false);
age.addEventListener("blur", checkAge, false);
woman.addEventListener("change", checkSex, false);
man.addEventListener("change", checkSex, false);

function checkSurname(){
	var sur = document.getElementById("surnameField").value;
	console.log(sur);
		var wzor1 = /[a-zA-Ząęóćźżłńś]/;
if( wzor1.test(sur)==true){
	
		document.getElementById("need2").innerHTML="";
		return true;
	 }
	 else{
	 	alert('Podaj swoje nazwisko');
	 	document.getElementById("need2").innerHTML="*Wymagane";
	 	document.getElementById("surnameField").value="";
	 	return false;
	 }
};

function checkAge(){
	var age = Number(document.getElementById("ageField").value);

	if(age>0 && age<120 && (age%1==0))
	{
		document.getElementById("need").innerHTML="";
		return true;
	}
		
		else{ 
			alert('Podaj prawidłowy wiek');
			document.getElementById("need").innerHTML="*Wymagane"
			document.getElementById("ageField").value="";
			return false;
		 }
};

function checkSex(){
	if(document.getElementById('woman').checked == true )
		{ 
		document.getElementById("need3").innerHTML="";
		document.getElementById("womandiv").style.visibility="visible";
		document.getElementById("womandiv").style.position="relative";
		document.getElementById("mandiv").style.visibility="hidden";
		document.getElementById("mandiv").style.position="absolute";
		return true;
		}
		else if(document.getElementById('man').checked == true ){
			document.getElementById("need3").innerHTML="";
			document.getElementById("mandiv").style.visibility="visible";
		document.getElementById("mandiv").style.position="relative";
		document.getElementById("womandiv").style.visibility="hidden";
		document.getElementById("womandiv").style.position="absolute";
			return true;

			}

	else
		{
			return false;
		}
};


