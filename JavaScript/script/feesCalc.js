let courseBox=document.querySelector('#course');
let tfeesBox=document.querySelector('#tfees');
let cfeesBox=document.querySelector('#cfees');
let pfeesBox=document.querySelector('#pfees');
let dfeesBox=document.querySelector('#dfees');
let ocRaoButton=document.querySelector('#oc');
let bcRaoButton=document.querySelector('#bc');
let scRaoButton=document.querySelector('#sc');

	
//course box

courseBox.addEventListener('change',function()
{
	let selectedValue=courseBox.value;
	if(selectedValue==='java')
	{
		tfeesBox.value=20000;
	}
	else if(selectedValue==='python')
	{
		tfeesBox.value=18000;
	}
	else if(selectedValue==='mern')
	{
		tfeesBox.value=19000;
	}
	else
	{
		tfeesBox.value='Invalid Course';
	}
})

ocRaoButton.addEventListener('change',function()
{
	let xyz=2000;
	cfeesBox.value=xyz;
})

bcRaoButton.addEventListener('change',function()
{
	let abc=3000;
	cfeesBox.value=abc;
})

scRaoButton.addEventListener('change',function()
{
	let hgf=4000;
	cfeesBox.value=hgf;
})

let calculate=()=>
{
	let totalFees=tfeesBox.value;
	let conFees=cfeesBox.value;
	let paidFees=pfeesBox.value;
	
	if(tfeesBox.value=='')
	{
		dfeesBox.value=0;
	}
	else if(tfeesBox.value=='' && cfeesBox.value=='')
	{
		dfeesBox.value=0;
	}
	else if(tfeesBox.value=='' && cfeesBox.value=='' && paidFees.value=='')
	{
		dfeesBox.value=0;
	}
	else
	{
		let dueFees=totalFees-conFees-paidFees;
		dfeesBox.value='DueFees :-'+dueFees;
	}
}
