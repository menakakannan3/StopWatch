window.onload = function(){
    var secondss =00;
    var millisecondss =00;
    var appendmilliseconds = document.getElementById('milliseconds')
    var appendseconds = document.getElementById('seconds')
    var buttonstart = document.getElementById('startbutton')
    var buttonstop = document.getElementById('stopbutton')
    var buttonrestart = document.getElementById('resetbutton')
    var interval ;

    buttonstart.onclick =function(){
        clearInterval(interval);
        interval = setInterval(starttimer, 10);
    }

    buttonstop.onclick =function(){
        clearInterval(interval);
    }

    buttonrestart.onclick=function(){
        clearInterval(interval);
        millisecondss = "00";
        secondss = "00";
        appendmilliseconds.innerHTML = millisecondss;
        appendseconds.innerHTML = secondss;
    }


         function starttimer (){
          millisecondss++;


          if(millisecondss<=9){
              appendmilliseconds.innerHTML = "0"+ millisecondss;
          }

          if(millisecondss > 9){
              appendmilliseconds.innerHTML = millisecondss;
          }
          if(millisecondss>99){
              console.log("seconds");
              secondss++;
              appendseconds.innerHTML ="0" + secondss;
              millisecondss = 0;
              appendmilliseconds.innerHTML="0" + 0;
          }
          if(secondss >9){
              appendseconds.innerHTML =secondss;
          }
        }
}