
prompt("choose player1 or player2")

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomImgscr1 = "images/dice"  + randomNumber1 + ".png";
    var image1 = document.querySelectorAll ("img") [0];
    image1.setAttribute("src", randomImgscr1);

    var randomNumber2 =Math.floor(Math.random()* 6) + 1;
    var randomImgscr2 = "images/dice"  + randomNumber2 + ".png";
    var image2 = document.querySelectorAll ("img") [1];
    image2.setAttribute("src", randomImgscr2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
}
if (randomNumber1 === randomNumber2) { 
        document.querySelector("h1").innerHTML = "Draw!";
}
































