var done = [0,0,0,0,0,0,0,0,0]
let playerXS = document.getElementById("playerX_Score");
var root = document.documentElement;
let playerYS = document.getElementById("playerY_Score");
let tie = document.getElementById("tie_Score");
let play = document.querySelectorAll(".Selector");
let volume = document.getElementById("Volume");
let mood = document.getElementById("Mood");
let h2e = document.querySelectorAll('h2');
var turn = 0;
var end =0;
mood.addEventListener('mouseover',function(){
    mood.classList += " fa-spin"
    console.log("mouse is over the element")
})
mood.addEventListener('mouseout',function(){
    if (mood.classList.contains("fa-spin")) this.classList.remove("fa-spin")
})
mood.onclick = () => {
    if (mood.classList.contains("fa-moon")){
        mood.classList.remove("fa-moon");
        mood.classList += (" fa-sun");
        root.style.setProperty('--bg-color', "rgb(221,221,221)");
        root.style.setProperty('--font-color', "rgb(10,10,10)");
    }
    else if (mood.classList.contains("fa-sun")){
        mood.classList.remove("fa-sun");
        mood.classList += (" fa-moon");
        root.style.setProperty('--bg-color', "rgb(10,10,10)");
        root.style.setProperty('--font-color', "rgb(221,221,221)");
    }
}
volume.onclick = function(){
    if (volume.classList.contains("fa-volume-xmark")){
        volume.classList = "fa-solid fa-volume-high fs-2 mt-3 me-2";
    }
    else if (volume.classList.contains("fa-volume-high")){
    volume.classList = "fa-solid fa-volume-xmark fs-2 mt-3 me-2";
    }
    }
let announce = document.getElementById("Announcement");
function announcey() {
    if (turn == 0){
        announce.textContent = "Player X Turn"
    }
    else if (turn == 1){
        announce.textContent = "Player O Turn"
    }
}
function Replay(){
    announcey();
    for (let i=0;i<9 ;i++) {
        done[i] = 0;
        play[i].textContent ="";
    }
}
play.forEach(function(selector,index) {
    selector.addEventListener('click',function(){
        if (end == 1){
            end =0;
            Replay();
            return;
        }
        else{
        let audio;
        if (turn == 0 && done[index] == 0){
            selector.textContent = "X";
            done[index] = 1;
            turn = 1;
            if (volume.classList.contains("fa-volume-high")){
            audio = new Audio('mats/X.mp3');
            audio.play();
        }
        Check(); return;
        }
        else if (turn == 1  && done[index] == 0){
            selector.textContent = "O";
            turn = 0;
            done[index] = 1;
            if (volume.classList.contains("fa-volume-high")){
            audio = new Audio('mats/Y.mp3');
            audio.play();
            }
            Check(); return;
        }
    }
    })
});
function Check(){
    if ( (play[0].textContent == play[1].textContent && play[0].textContent == play[2].textContent && play[0].textContent != "") || (play[3].textContent == play[4].textContent && play[3].textContent == play[5].textContent && play[3].textContent != "") || (play[6].textContent == play[7].textContent && play[6].textContent == play[8].textContent && play[6].textContent != "")
    || (play[0].textContent == play[4].textContent && play[0].textContent == play[8].textContent && play[0].textContent != "") || (play[2].textContent == play[4].textContent && play[2].textContent == play[6].textContent && play[2].textContent != "")
    || (play[0].textContent == play[3].textContent && play[0].textContent == play[6].textContent && play[0].textContent != "") || (play[1].textContent == play[4].textContent && play[1].textContent == play[7].textContent && play[1].textContent != "") || (play[2].textContent == play[5].textContent && play[2].textContent == play[8].textContent && play[2].textContent != "")
    )
    {
        if (turn == 1){
            announce.textContent = "Player X Has Won!!!!";
            playerXS.textContent++;
            end =1;
            return;
        }
        else if (turn == 0){
            announce.textContent = "Player O Has Won!!!!";
            playerYS.textContent++;
            end =1;
            return;
        }
    }
    let count =0;
    for (let i =0;i<done.length;i++){
        if (done[i]==1) count++;
    }
    if (count == 9) {tie.textContent++;
        announce.textContent = "It's Tied..";
        end = 1;
        return;
    }
}