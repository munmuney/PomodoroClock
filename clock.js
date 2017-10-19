$(document).ready(function() {
  var sound = $("audio")[0];
  
  var count = parseInt($("#sessionDefault").html());
  var breakCount = parseInt($("#breakDefault").html());
  
  $("#reset").hide();
  
  $("#start").click(function() {
    var counter = setInterval(timer, 1000);
    count*=60;
    
    function timer() {
      $("#start, #sessionSub, #sessionAdd, #breakTime, #breakSub, #breakAdd, #breakDefault, #zero").hide();      
      count--;
      if (count === 0) {
        clearInterval(counter);
        sound.play();
        var startBreak= setInterval(breakTimer,1000);
        breakCount*=60;

        $("#sessionDefault, #sessionTime").hide();
      }
      if (count%60 >= 10) {
        $("#sessionDefault").html(Math.floor(count/60) + ":" + count%60);    
      }
      else {
        $("#sessionDefault").html(Math.floor(count/60) + ":" + "0" + count%60);
      }
              
      function breakTimer() {
        $("#breakDefault, #breakTime").show();
        breakCount--;
        if (breakCount === 0) {
          clearInterval(startBreak);
          sound.play();
          $("#reset").show();
          $("#breakDefault, #breakTime").hide();
        }

        if (breakCount%60 >= 10) {
          $("#breakDefault").html(Math.floor(breakCount/60) + ":" + breakCount%60);
        }
        else {
          $("#breakDefault").html(Math.floor(breakCount/60) + ":" + "0" + breakCount%60);
        }        
      }
    }
  });
  
  $("#reset").click(function() {
    count=5;
    breakCount=5;
    $("#sessionDefault").html(count);
    $("#breakDefault").html(breakCount);   
    $("#start, #sessionTime, #sessionSub, #sessionDefault, #sessionAdd, #breakTime, #breakSub, #breakDefault, #breakAdd, #zero").show();
    $("#reset").hide();
  });
  
  $("#sessionSub").click(function() {
    if (count > 1) {
      count--;
      $("#sessionDefault").html(count);
    }
  });
  
  $("#sessionAdd").click(function() {
    count++;
    $("#sessionDefault").html(count);
  });
  
  $("#breakSub").click(function() {
    if (breakCount > 1) {
      breakCount--;
      $("#breakDefault").html(breakCount);
    }
  });
  
  $("#breakAdd").click(function() {
    breakCount++;
    $("#breakDefault").html(breakCount);
  });
});
