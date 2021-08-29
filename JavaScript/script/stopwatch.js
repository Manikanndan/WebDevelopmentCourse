let milliSeconds=0;
let minutes=0;
let seconds=0;

let count=0;
let timerRunning=true;

//start timer

let startTimer=()=>
{
	count++;
	//document.querySelector('#m-sec').innerText=count;

	minutes=Math.floor((count/100)/60);
	seconds=Math.floor((count/100)-(minutes*60));
	milliSeconds=Math.floor(count-(seconds*100)-(minutes*6000));

	document.querySelector('#min').innerText=leadingZero(minutes);
	document.querySelector('#sec').innerText=leadingZero(seconds);
	document.querySelector('#m-sec').innerText=leadingZero(milliSeconds);
}

//start btn
let interval=null;
let startBtn=document.querySelector('#start-btn');
startBtn.addEventListener('click',function()
{
	//startTimer();
	//setInterval(startTimer,10)
	if(timerRunning)
	{
		setInterval(startTimer,10);
		timerRunning=false;
	}
});


//stop btn

let stopBtn=document.querySelector('#stop-btn');
stopBtn.addEventListener('click',function()
{
	clearInterval(interval);
	timerRunning=true;
});


//leading zero

let leadingZero=(time)=>
{
	if(time<=9)
	{
		return '0'+time;
	}
	else
	{
		return time;
	}
}

//start btn

let resetBtn=document.querySelector('#reset-btn');
resetBtn.addEventListener('click',function()
{
	clearInterval(interval);
	timerRunning=true;
	count=0;
	minutes=0;
	seconds=0;
	milliSeconds=0;
	interval=0;

	document.querySelector('#min').innerText='00';
	document.querySelector('#sec').innerText='00';
	document.querySelector('#m-sec').innerText='00';
});