function lampCam1() {
    var checkbox1 = document.getElementById("checkbox1");
    if (checkbox1.checked) {
        fetch('http://192.168.2.54/control?var=lamp&val=100');
   
      
    } else {
        fetch('http://192.168.2.54/control?var=lamp&val=0');
        
    }
  } 

function lampCam2() {
    var checkbox2 = document.getElementById("checkbox2");
    if (checkbox2.checked) {
        fetch('http://192.168.2.58/control?var=lamp&val=100');
   
      
    } else {
        fetch('http://192.168.2.58/control?var=lamp&val=0');
        
    }
  } 
