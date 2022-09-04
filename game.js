window.onload = function () {
    var wallColor = document.getElementsByClassName("boundary");
    var score = 0;

    document.getElementsByClassName("boundary")[0].style.backgroundColor = '#eeeeee';
    for (var j= 0; j < wallColor.length-1; j++){
        wallColor[j].addEventListener("mouseover", function () {mouseOverWalls()} );
    }
    function mouseOverWalls() {
        
        for (i = 0; i < wallColor.length-1; i++) {
            wallColor[i].style.backgroundColor = "red";
        }
        score=score-10
        document.getElementById("status").innerText = "You Lost:" +" " +score;
        
    }

    document.getElementById("start").addEventListener("mouseover", function() {mouseOverStart()})
    function mouseOverStart() {
        for (i = 0; i < wallColor.length-1; i++) {
            wallColor[i].style.backgroundColor = "#eeeeee";
        }
        
    }

    document.getElementById("start").addEventListener("click", function() {mouseClick()})
    function mouseClick(){
        document.getElementById("status").innerText = "NEW GAME! Begin by moving your mouse over the 'S'.";
        score=0
    }

    document.getElementById("end").addEventListener("mouseover", function() {mouseOverEnd()})
    function mouseOverEnd(){
        if (document.getElementsByClassName("boundary")[0].style.backgroundColor === "rgb(238, 238, 238)") {
            score=score+5
            document.getElementById("status").innerText = "You won" +" " +score;
        }
    }

    document.getElementById("game").addEventListener("mouseleave", function() {mouseLeaveDiv()})
    function mouseLeaveDiv(){
        score=score-10
        document.getElementById("status").innerText = "You Lost:" +" " +score;
    }
}