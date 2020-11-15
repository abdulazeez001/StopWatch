function Stopwatch(hour,minute,second,hour_tag,minute_tag,second_tag){
    this.hour = hour 
    this.minute = minute
    this.second = second
    this.isCounting = false
    this.hour_tag = hour_tag
    this.minute_tag = minute_tag
    this.second_tag = second_tag
}
Stopwatch.prototype.showOnScreen = function(){

    this.hour>9 ? this.hour_tag.textContent = `${this.hour}` : this.hour_tag.textContent = `0${this.hour}`
    this.minute>9 ?this.minute_tag.textContent = `${this.minute}` :this.minute_tag.textContent = `0${this.minute}`
    this.second>9 ?this.second_tag.textContent = `${this.second}` : this.second_tag.textContent = `0${this.second}`
}
Stopwatch.prototype.startCount = function(){

    this.second+=1
    if (this.second % 60==0){
        this.minute+=1
        this.second = 0
    }
    if (this.minute != 0 && this.minute % 60 == 0){
        this.hour+=1
        this.minute = 1
    }
    
    this.showOnScreen()
    
}
Stopwatch.prototype.resetCount = function(){
        
    this.hour = 0
    this.minute = 0
    this.second = 0
    
    this.showOnScreen()
}


var startCount = function(stop_watch,start_btn){
    stop_watch.isCounting = true
    start_btn.disabled = true
    interval = setInterval(()=>stop_watch.startCount(),1000) 
}
var pauseCount = function(stop_watch,start_btn){
    start_btn.disabled = false
    if (stop_watch.isCounting) clearInterval(interval);
    stop_watch.isCounting = false
}
var resetCount = function(stop_watch,start_btn){
    start_btn.disabled = false
    stop_watch.resetCount()
    if (stop_watch.isCounting) clearInterval(interval);
    stop_watch.isCounting = false 
}
var changeMode = function(mode_btn){
    mode_btn[0].textContent == 'Light' ?  mode_btn[0].textContent = 'Dark' :  mode_btn[0].textContent = 'Light';
    mode_btn[0].id == 'light' ?  mode_btn[0].id = 'dark' :  mode_btn[0].id = 'light';
    document.body.id=='dark-mode' ? document.body.id='light-mode': document.body.id='dark-mode';
}



var clock;
var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');


var startBtn = document.getElementById('start');
var pauseBtn = document.getElementById('pause');
var resetBtn = document.getElementById('reset');
var modeBtn = document.getElementsByClassName('mode')


clock = new Stopwatch(0,0,0,hour,minute,second)
startBtn.addEventListener('click',()=>{startCount(clock,startBtn)})
pauseBtn.addEventListener('click',()=>{pauseCount(clock,startBtn)})
resetBtn.addEventListener('click',()=>{resetCount(clock,startBtn)})
modeBtn[0].addEventListener('click',()=>{changeMode(modeBtn)})


