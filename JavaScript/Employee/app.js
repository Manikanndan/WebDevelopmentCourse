let employees=getAllEmp();

console.log(employees);


let displayEmployees=(employees)=>
{
	document.querySelector('#count').innerText=employees.length;

	let tableBody=document.querySelector('#table-body');

	let tableRows='';

	for(let employee of employees)
	{
		tableRows+=`<tr>
		<td>${employee.id}</td>
		<td>${employee.first_name}</td>
		<td>${employee.last_name}</td>
		<td>${employee.email}</td>
		<td>${employee.gender}</td>
		<td>${employee.country}</td>
		</tr>`
	}
	tableBody.innerHTML=tableRows;
}

//all emp btn
let allEmpsBtn=document.querySelector('#all-emp-btn');
allEmpsBtn.addEventListener('click',function()
{
	displayEmployees(employees);
});


//male emp btn
let maleEmpsBtn=document.querySelector('#male-emp-btn');
maleEmpsBtn.addEventListener('click',function()
{
	let maleEmps=employees.filter((employee)=>
	{
		return employee.gender==='Male';
	})
	displayEmployees(maleEmps);
});

//female emp btn
let femaleEmpsBtn=document.querySelector('#female-emp-btn');
femaleEmpsBtn.addEventListener('click',function()
{
	let femaleEmps=employees.filter((employee)=>
	{
		return employee.gender==='Female';
	})
	displayEmployees(femaleEmps);
});


//search logic

let searchBox=document.querySelector('#emp-search');
searchBox.addEventListener('keyup',function()
{
	let textEntered=searchBox.value;

	if(textEntered.length>=1 && textEntered!=='')
	{
		let filteredEmployees=employees.filter((employee)=>
		{
			return employee.first_name.toLowerCase().startsWith(textEntered.toLowerCase());
		})
		displayEmployees(filteredEmployees);
	}
});