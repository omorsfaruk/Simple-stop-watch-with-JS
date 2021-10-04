var h = 0;
var m = 0;
var s = 0;
var stopTime = true;

//FUNCTION FOR START TIMER
function startTimer(){
    if(stopTime == true){
        stopTime = false;
        startOn();
    }
}
function startOn(){
    if(stopTime == false){
        s = parseInt(s);
        m = parseInt(m);
        h = parseInt(h);
        s = s + 1;
        if(s == 60){
            m = m + 1;
            s = 0;
        }
        if(m  == 60){
            h = h + 1;
            s = 0;
            m = 0;
        }
        if(h<10){
            h = "0" + h;
        }
        if(m<10){
            m = "0" + m;
        }
        if(s<10){
            s = "0" + s;
        }
        document.getElementById('stopwatch').innerText = h + ':' +m + ':' +s;
        
        setTimeout("startOn()", 1000);
    }
}
//FUNCTION FOR STOP TIMER
function stopTimer(){
    if(stopTime == false){
        stopTime = true;
    }
}
//FUNCTION FOR RESET THE TIMER
function resetTimer(){
    document.getElementById('stopwatch').innerText = "00:00:00";
    h=0;
    m=0;
    s=0;
    stopTime = true;
}

 