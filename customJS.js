// Declaring general vars.
var team = window["someVar"];
var winTotal1 = window["win1"];
var barcelona;
var realMadrid;
var erovnuli;
var dinamoTbilisi;
var milani;
var manUtd;
var nonWins = 0;
var lastWinTotal = 0;

//Vars for arrays. Includes team name and total wins.
var teamArray0 = [window["someVar"], window["win1"]];
var teamArray1 = [window["someVar2"], window["win2"]];
var teamArray2 = [window["someVar3"], window["win3"]];
var teamArray3 = [window["someVar4"], window["win4"]];

//Logic for assigning team variables to arrays. Dynamically updated.
if (teamArray0[0] == "ბარსელონა") {
  barcelona = teamArray0;
}
else if (teamArray1[0] == "ბარსელონა") {
  barcelona = teamArray1;
}

else if (teamArray2[0] == "ბარსელონა") {
  barcelona = teamArray2;
}

else if (teamArray3[0] == "ბარსელონა") {
  barcelona = teamArray3;
}

console.log(barcelona);

//Logic for checking number of nonWins in a row.
  //Check current winTotal
  //if current winTotal > last winTotal
  //then nonWins++

if (barcelona[1] > lastWinTotal){
  nonWins++;
  lastWinTotal = barcelona[1];
}

//Logic for HTML5 Notification.
if (nonWins > 1) {
  new Notification ("Header", {
      body: team
    });
}

console.log(lastWinTotal);
