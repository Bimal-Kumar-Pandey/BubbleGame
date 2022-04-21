
function makingBubble() {
  var clutter = "";

  for (var i = 0; i < 80; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div id="bubble">${rn}</div>`;
  }
  document.querySelector("#btm").innerHTML = clutter;
}
makingBubble();

var Score = 0;
function scoreShow(newscore) {
  Score = newscore;
  document.querySelector("#scoreboarding").textContent = Score;
}

function SetTimer(newTime) {
  setInterval(() => {
    if (newTime > 0) {
      newTime--;
      document.querySelector("#timesetting").textContent = newTime;
    } else {
      document.querySelector("#btm").innerHTML=`<h1>Game Over</h1> <br> <h2>Total Score :${Score}</h2`
    }
  }, 1000);
}

function hitShow() {
  hitter = Math.floor(Math.random() * 10);
  document.querySelector("#hitted").textContent = hitter;
}

function myfunc(){
document.querySelector("#btm").addEventListener("click",function(dets){
  if(Number(dets.target.textContent)===hitter) {
    scoreShow(Score+=10)
    hitShow();
  }
})
}

scoreShow(Score);
SetTimer(60);
hitShow();
myfunc();

