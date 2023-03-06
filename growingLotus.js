// Get the image element by ID
const lotus = document.getElementById("lotus");
const lotusStreak = document.getElementById("lotusStreak");
// Set an event listener on the variable that is incremented
let count = localStorage.getItem("count") || 0;
let lotusGrown = localStorage.getItem("lotusGrown") || 0;

window.addEventListener('beforeunload', function(event) {
  
  // Call this function when the page loads to reset the plant height if it's a new day
  //resetLotus();
  incrementCount();
});

window.addEventListener('load', function(event) {
    // Restore the plant height
    count = localStorage.getItem("count") || 0;
    lotusGrown = localStorage.getItem("lotusGrown") || 0;
    lotusStreak.textContent = "Lotus Grown: "+lotusGrown;
    incrementCount();
    
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
        lotus.src = "img/LotusImg/Stage1.PNG";
      } else if (count == 1) {
    lotus.src = "img/LotusImg/Stage2.PNG";
  } else if (count == 2) {
    lotus.src = "img/LotusImg/Stage3.PNG";
  } else if (count == 3) {
    lotus.src = "img/LotusImg/Stage4.PNG";
  }else if (count == 4) {
    lotus.src = "img/LotusImg/Stage5.PNG";
  }else if (count == 5) {
    lotus.src = "img/LotusImg/Stage6.PNG";
  }else if (count == 6) {
    lotus.src = "img/LotusImg/Stage7.PNG";
  }else if (count == 7) {
    lotus.src = "img/LotusImg/Stage8.PNG";
  }else if (count == 8) {
    lotus.src = "img/LotusImg/Stage9.PNG";
  }else if (count == 9) {
    lotus.src = "img/LotusImg/Stage10.PNG";
  }else if (count == 10) {
    lotus.src = "img/LotusImg/Stage11.PNG";
  }else if (count == 11) {
    lotus.src = "img/LotusImg/Stage12.PNG";
  }else if (count == 12) {
    lotusGrown++;
    lotusStreak.textContent = lotusGrown;
    count=0;
    reloadImg();
    console.log("REACHED END");
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
    lotus.src = "img/LotusImg/Stage1.PNG";
    incrementCount();
    
}
