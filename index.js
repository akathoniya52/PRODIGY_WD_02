// javascript
// grab the time variable
let seconds = document.getElementById('seconds')
let mintues = document.getElementById('minutes')
let hours = document.getElementById('hours')
// dark mode
let darkMode = document.getElementById('dark-mode')
let dark = false
// event
darkMode.addEventListener('click',()=>{
    dark = !dark
    if(dark){
        document.body.style.background = "black"
        document.body.style.color = "white"
    }
    else{
        document.body.style.background = "white"
        document.body.style.color = "black"
    }
})

let count = 0;
let min = 0;
let hrs = 0;
let intervalId = null;

function start() {
    if (intervalId === null) {
        intervalId = setInterval(function() {
            count++;
            if(count%60===0){
                min++;
                if(min<10){
                    mintues.textContent = '0'+min;
                }
                else{
                    mintues.textContent=min;
                }
                count = 0;
            }
            if(min>0 && min%60===0){
                hrs++;
                if(hours<10){
                    hours.textContent = '0'+hrs;
                }
                else{
                    hours.textContent = hrs;                    
                }
            }
            
            if(count<10){
                seconds.textContent = '0'+count;
            }
            else{
                seconds.textContent = count;                            
            }
            
        }, 1000);
    }
}
function stop() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

function reset() {
    stop();
    count = 0;
    seconds.textContent = count;
    mintues.textContent = 0;
    hours.textContent = 0;
}





