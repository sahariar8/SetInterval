
let intervalId;
function start(){
    let time = 0;
   const clock = document.getElementById("clock");
    intervalId = setInterval(()=>{
        clock.innerText = ++time;
    },1000);
}
function stop(){
    clearInterval(intervalId); 
}

function reset(){
    const clock = document.getElementById("clock");
    clock.innerText = "0";
}
