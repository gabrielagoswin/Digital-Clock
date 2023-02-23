


 
    
function setClock(){
    var time = new Date();
    var hour = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    screen = document.querySelector(".screen").innerHTML= hour+":"+minutes+"<br>"+seconds;
    
}

function setTime(){
    
    for(let i = 0; i<12; i++ ){
        
    }
    
}



setInterval(setClock, 1000);
