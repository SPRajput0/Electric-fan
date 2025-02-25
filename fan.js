


function startSpin(){
    const fan = document.querySelector('.fan');
    fan.style.animation = "spin 0.3s linear infinite";
}
function stopSpin(){
    const fan = document.querySelector('.fan');
    fan.style.animation = "none";
}
function highSpin(){
    const fan = document.querySelector('.fan');
    fan.style.animation = "spin 0.1s linear infinite";
}
function lowSpin(){
    const fan = document.querySelector('.fan');
    fan.style.animation = "spin 0.4s linear infinite";
}


document.querySelector('.btn1').addEventListener('click', startSpin);
document.querySelector('.btn2').addEventListener('click', stopSpin);
document.querySelector('#high').addEventListener('click', highSpin);
document.querySelector('#low').addEventListener('click', lowSpin);