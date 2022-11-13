let start=document.getElementById('start');
let stop=document.getElementById('stop');
let restart=document.getElementById('restart');
let hr=0;
let min=0;
let sec=0;
let timer=0;
let count=document.getElementById("count");
let seconds=document.getElementById("seconds");
let minutes=document.getElementById("minutes");
let hour=document.getElementById("hour");
let id;
let flag=false;

start.addEventListener('click',function(){
        if(flag==false){
            flag=true;
            stopwatch(); 
        }else{
            return;
        }
         
});

stop.addEventListener('click',function(){
       clearInterval(id);
       flag=false;

});

restart.addEventListener('click',function(){
     clearInterval(id);
        timer=00;
        sec=00;
        min=00;
        hr=00;
        count.innerText="00";
        seconds.innerText="00";
        minutes.innerText="00";
        hour.innerText="00";
        flag=false;
});

function stopwatch(){
 id=setInterval(function(){
    
if(timer>99){
    timer=0;

    count.innerText=timer
    timer++;
    sec++;
    seconds.innerText=sec;
    
    if(sec>59){
        sec=0;
        min++;
        seconds.innerText=sec;
        minutes.innerText=min;
        
        if(min>59){
            min=0;
            hr++;
            minutes.innerText=min;
            hour.innerText=hour;
          }       
       }

}else{
    timer++;
    count.innerText=timer;
    }
    },10);


}


