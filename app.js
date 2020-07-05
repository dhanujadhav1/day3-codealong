
var player1 = ["prograd", 0, 1000];

var player2 = ["faceprep", 0, 1000];


var board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];
var player1_button = document.getElementById("player-1", rollDice_1);
var player2_button = document.getElementById("player-2");
player1_button.addEventListener("click", rollDice_1);
player2_button.addEventListener("click");

function rollDice_1() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("player one rolls");
    changePosition_1(player1[1], position);

}

function changePosition_1(old, current) {
    var newPosition = old + current;
    console.log(newPosition);
    player1[1] = newPosition;
    console.log(player1[1]);
    updateMoney_1(player1[1]);

}
function updateMoney_1(p1) {
    var updatemoney = 0;
    if (p1 < board.length)
        updatemoney = player1[2] - board[p1 - 1];
    else {
        p1 = p1 % 15;
        updatemoney = player1[2] - board[p1 - 1];
    }
    console.log(updatemoney);
}
//for player two
function rollDice_2() {
    let position = Math.floor(Math.random() * 6) + 1;
    console.log("player two rolls");
    changePosition_2(player2[1], position);

}

function changePosition_2(old, current) {
    var newPosition = old + current;
    console.log(newPosition);
    player2[1] = newPosition;
    console.log(player2[1]);
    updateMoney_2(player2[1]);

}
function updateMoney_2(p1) {
    var updatemoney = 0;
    if (p1 < board.length)
        updatemoney = player2[2] - board[p1 - 1];
    else {
        p1 = p1 % 15;
        updatemoney = player2[2] - board[p1 - 1];
    }
    console.log(updatemoney);
}