let validateForm=()=>
{
	isFormValid=validateUserName() && validateEmail() && validatePassword() && validateConfirmPassword();
	if(isFormValid)
	{
		alert("Form Submitted Successfully")
		return true;
	}
	else
	{
		return false;
	}
}


let regEx=/^[a-zA-Z0-9_]{1,15}$/;
var passwd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
//validate username

let validateUserName=()=>
{
	let inputEl=document.querySelector('#username');
	let inputField=inputEl.value;

	if(inputField==='')
	{
		applyColors(inputEl,'orangered');
		displayErrorMessage('Please Enter Username')
		return false;
	}
	else if(inputField.length<4)
	{
		applyColors(inputEl,'orangered');
		displayErrorMessage('Min 4 chars Required')
		return false;
	}
	else if(regEx.test(inputField))
	{
		applyColors(inputEl,'limegreen');
		return true;
	}
	else
	{
		applyColors(inputEl,'orangered');
		displayErrorMessage('No Special Chars Are Allowed')
		return false;
	}
}


//validate email

let validateEmail=()=>
{
	let inputEl=document.querySelector('#email');
	let inputField=inputEl.value;

	if(inputField==='')
	{
		applyColors(inputEl,'orangered');
		displayErrorMessage('Please Enter Email')
		return false;
	}
	else
	{
		applyColors(inputEl,'limegreen');
		return true;
	}
}

//validate password 
let validatePassword=()=>
{
	let inputEl=document.querySelector('#password');
	let inputField=inputEl.value;

	if(inputField==='')
	{
		applyColors(inputEl,'orangered');
		displayErrorMessage('Please Enter Password')
		return false;
	}
	else if(passwd.test(inputField))
	{
		applyColors(inputEl,'limegreen');
		return true;
	}
	else
	{
		applyColors(inputEl,'orangered');
		displayErrorMessage('Enter a valid Password')
		return false;	
	}
}

//match password
let validateConfirmPassword=()=>
{
	let password = document.querySelector('#password');
	let passwordFiled=password.value;
    let confirm = document.querySelector('#c_password');
	let confirmFiled=confirm.value;
    
	if(confirmFiled==='')
	{
		applyColors(confirm,'orangered');
		displayErrorMessage('Please Enter Confirm Password')
		return false;
	}
	else if(passwordFiled != confirmFiled)  
	{   
		applyColors(confirm,'orangered');
		displayErrorMessage('Password did not match')
		return false;  
	} 
	else 
	{  
		applyColors(confirm,'limegreen');
		return true; 
	}  
}

//apply colors

let applyColors=(tag,color)=>
{
	tag.style.borderColor=color;
	tag.style.boxShadow=`0 0 10px ${color}`;
}

//displayErrorMessage

let displayErrorMessage=(message)=>
{
	let errorMessageDiv=document.querySelector('#error-msg');

	let h3Tag=document.createElement('h3');
	h3Tag.innerText=message;

	errorMessageDiv.appendChild(h3Tag);

	//removeErrorMessage();

	setTimeout(removeErrorMessage,2000);
}

//removeErrorMessage

let removeErrorMessage=()=>
{
	let removeTag=document.querySelector('#error-msg h3');
	removeTag.remove();
}