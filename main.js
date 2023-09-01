var typed = new Typed(".text11", {
    strings:[ 'Frontend Developer' , 'C/C++ Developer' , 'Wordpress Developer' ,'Cinematographer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:150,
    loops:4
});

var typed = new Typed(".text112", {
    strings:['As a hardworking and driven individual, I am always seeking out new challenges and opportunities to expand my skill set.I am always willing to put in the extra effort to achieve my goals.I take pride in my ability to think outside the box and find creative solutions to complex problems.'],
    typeSpeed:50,
    backSpeed:50,
    backDelay:1000,
    loops:true
});

let number = document.getElementById('js');
let cnt=0;
setInterval( ()=> {
if(cnt==65)
{
    clearInterval();
}
else{
    cnt++;
    number.innerHTML = cnt + "%";
}
},30);

let number1 = document.getElementById('html');
let cnt1=0;
setInterval( ()=> {
if(cnt1==95)
{
    clearInterval();
}
else{
    cnt1++;
    number1.innerHTML = cnt1 + "%";
}
},18);

let number2 = document.getElementById('css');
let cnt2=0;
setInterval( ()=> {
if(cnt2==70)
{
    clearInterval();
}
else{
    cnt2++;
    number2.innerHTML = cnt2 + "%";
}
},30);

let number3 = document.getElementById('c');
let cnt3=0;
setInterval( ()=> {
if(cnt3==90)
{
    clearInterval();
}
else{
    cnt3++;
    number3.innerHTML = cnt3 + "%";
}
},30);


let number4 = document.getElementById('c11');
let cnt4=0;
setInterval( ()=> {
if(cnt4==90)
{
    clearInterval();
}
else{
    cnt4++;
    number4.innerHTML = cnt4 + "%";
}
},30);

let number5 = document.getElementById('wordpress');
let cnt5=0;
setInterval( ()=> {
if(cnt5==83)
{
    clearInterval();
}
else{
    cnt5++;
    number5.innerHTML = cnt5 + "%";
}
},30);

let number6 = document.getElementById('figma');
let cnt6=0;
setInterval( ()=> {
if(cnt6==50)
{
    clearInterval();
}
else{
    cnt6++;
    number6.innerHTML = cnt6 + "%";
}
},30);