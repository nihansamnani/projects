var timer = 10;
var computerRn=Math.floor(Math.random()*10);
var user;
var answer = "";
var checking = (user===computerRn);
console.log(computerRn);

function runTimer() {
  setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#time").textContent = timer;
    } else {
      timer=0;
      document.querySelector("#time").textContent = "0";
      answer = "incorrect"
      clearInterval();
      corrct = document.querySelector("#field-mid").innerHTML = `<center><h2>Game Over!<br>Your answer is ${answer}<br>The Number was ${computerRn}</h2></center>`;
    }
  }, 1000);
}
function check(){
    if(user===computerRn){
      answer = "correct";
        // console.log("Correct");
        corrct = document.querySelector("#field-mid").innerHTML = `<center><h2>Game Over!<br>Your answer is ${answer}<br>The Number was ${computerRn}</h2></center>`;
        // timer=0;
        document.querySelector("#time").textContent = "0";


    }
    else{
        answer = "incorrect";
        corrct = document.querySelector("#field-mid").innerHTML = `<center><h2>Game Over!<br>Your answer is ${answer}<br>The Number was ${computerRn}</h2></center>`;
        timer=0;
        document.querySelector("#time").textContent = "0";

    }
    
}
document.querySelector(".field-bottom").addEventListener('click',function(details){
    user = Number(details.target.textContent);
    document.querySelector(".user").textContent = user;
});


runTimer();
