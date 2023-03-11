// Get the image element by ID
const lotus = document.getElementById("lotus");
const lotusStreak = document.getElementById("lotusStreak");
const lotusText = document.getElementById("final-text");

// Set an event listener on the variable that is incremented
let count = localStorage.getItem("count") || 0;
let lotusGrown = localStorage.getItem("lotusGrown") || 0;

window.addEventListener('beforeunload', function(event) {
  incrementCount();
});

window.addEventListener('load', function(event) {
    count = localStorage.getItem("count") || 0;
    lotusGrown = localStorage.getItem("lotusGrown") || 0;
    lotusStreak.textContent = "Lotus Grown: "+lotusGrown;
    if(lotusGrown >= 100){
      lotusText.textContent = "Come here and complete tasks by the end of the day to grow your lotus. \bYou have grown more than 100 lotus! Your habits have improved, congratulations";
    }
    incrementCount();
    if(count < 30){
      document.getElementById("butt").disabled = true;
      document.getElementById("dailyTasks1").disabled = false;
      var nodes = document.getElementById("dailyTasks1").getElementsByTagName('*');
    for(var i = 0; i < nodes.length; i++){
         nodes[i].disabled = false;
    }
    }
    if(count >= 30 && count <= 35){
      document.getElementById("butt").disabled = false;
      document.getElementById("dailyTasks1").disabled = true;
      var nodes = document.getElementById("dailyTasks1").getElementsByTagName('*');
      for(var i = 0; i < nodes.length; i++){
           nodes[i].disabled = true;
      }
    }
    
});

function reloadImg(){
    localStorage.setItem("lotusGrown", lotusGrown);
    localStorage.setItem("count", count);
    lotusStreak.textContent = "Lotus Grown: "+lotusGrown;
    incrementCount();
    console.log("LOAD");

}

function incrementCount() {
    console.log("count:"+count);
    if (count == 0) {
        lotus.src = "img/LotusImg/Stage1.png";
      } else if (count >= 1 && count <= 5) {
    lotus.src = "img/LotusImg/Stage2.png";
  } else if (count >= 5 && count <= 10) {
    lotus.src = "img/LotusImg/Stage3.png";
  } else if (count >= 10 && count <= 15) {
    lotus.src = "img/LotusImg/Stage4.png";
  }else if (count >= 15 && count <= 20) {
    lotus.src = "img/LotusImg/Stage5.png";
  }else if (count >= 20 && count <= 25) {
    lotus.src = "img/LotusImg/Stage6.png";
  }else if (count >= 25 && count <= 30) {
    lotus.src = "img/LotusImg/Stage7.png";
  }else if (count >= 30 && count <= 35) {
    lotus.src = "img/LotusImg/Stage8.png";
    lotusGrown++;
    lotusStreak.textContent = "Lotus Grown: "+lotusGrown;
    document.getElementById("butt").disabled = false;
    document.getElementById("dailyTasks1").disabled = true;
    var nodes = document.getElementById("dailyTasks1").getElementsByTagName('*');
    for(var i = 0; i < nodes.length; i++){
         nodes[i].disabled = true;
    }
    console.log("REACHED END");
    if(lotusGrown >= 100){
      lotusText.textContent = "Come here and complete tasks by the end of the day to grow your lotus. \bYou have grown more than 100 lotus! Your habits have improved, congratulations";
    }
  }
}
// Call this function whenever the user completes a task
function completeTask() {
    count++;
    localStorage.setItem("count", count);
    incrementCount();
}

function resetLotus() {
    localStorage.setItem("count", 0);
    count = 0;
    document.getElementById("butt").disabled = true;
    document.getElementById("dailyTasks1").display = true;
    var nodes = document.getElementById("dailyTasks1").getElementsByTagName('*');

    for(var i = 0; i < nodes.length; i++){
      nodes[i].disabled = false;
    }
    reloadImg();
    lotus.src = "img/LotusImg/Stage1.PNG";
    incrementCount();
    
}
