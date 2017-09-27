// Declaring general vars.
/*
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
*/

var lastMatchDay = 0;

//Vars for arrays. Includes team name and total wins.
var teamArray0 = [window["team1"], window["win1"]];
var teamArray1 = [window["team2"], window["win2"]];
var teamArray2 = [window["team3"], window["win3"]];
var teamArray3 = [window["team4"], window["win4"]];
var teamArray4 = [window["team5"], window["win5"]];
var teamArray5 = [window["team6"], window["win6"]];
var teamArray6 = [window["team7"], window["win7"]];
var teamArray7 = [window["team8"], window["win8"]];
var teamArray8 = [window["team9"], window["win9"]];
var teamArray9 = [window["team10"], window["win10"]];


//Logic for assigning team variables to arrays. Dynamically updated.
/*
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

else if (teamArray4[0] == "ბარსელონა") {
  barcelona = teamArray4;
}

else if (teamArray5[0] == "ბარსელონა") {
  barcelona = teamArray5;
}

else if (teamArray6[0] == "ბარსელონა") {
  barcelona = teamArray6;
}

else if (teamArray7[0] == "ბარსელონა") {
  barcelona = teamArray7;
}

else if (teamArray8[0] == "ბარსელონა") {
  barcelona = teamArray8;
}

else if (teamArray9[0] == "ბარსელონა") {
  barcelona = teamArray9;
}
*/

function realMadridChecker() {
  if (teamArray0[0] == "რეალი მადრიდი") {
    realMadrid = teamArray0;
  }
  else if (teamArray1[0] == "რეალი მადრიდი") {
    realMadrid = teamArray1;
  }

  else if (teamArray2[0] == "რეალი მადრიდი") {
    realMadrid = teamArray2;
  }

  else if (teamArray3[0] == "რეალი მადრიდი") {
    realMadrid = teamArray3;
  }

  else if (teamArray4[0] == "რეალი მადრიდი") {
    realMadrid = teamArray4;
  }

  else if (teamArray5[0] == "რეალი მადრიდი") {
    realMadrid = teamArray5;
  }

  else if (teamArray6[0] == "რეალი მადრიდი") {
    realMadrid = teamArray6;
  }

  else if (teamArray7[0] == "რეალი მადრიდი") {
    realMadrid = teamArray7;
  }

  else if (teamArray8[0] == "რეალი მადრიდი") {
    realMadrid = teamArray8;
  }

  else if (teamArray9[0] == "რეალი მადრიდი") {
    realMadrid = teamArray9;
  }
}

//setInterval (realMadridChecker, 4000);



/*
setTimeout(function(){
  console.log(realMadrid); }, 4000);
*/
//Logic for checking number of nonWins in a row.
  //Check current winTotal
  //if current winTotal > last winTotal
  //then nonWins++
/*
if (barcelona[1] > lastWinTotal){
  nonWins++;
  lastWinTotal = barcelona[1];
}
*/
//Logic for HTML5 Notification.
/*
if (nonWins > 1) {
  new Notification ("Header", {
      body: team
    });
}

console.log(lastWinTotal);
*/

function checkBarcelona(teamName) {
    if (teamArray0[0] == teamName) {
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
    else if (teamArray4[0] == "ბარსელონა") {
      barcelona = teamArray4;
    }
    else if (teamArray5[0] == "ბარსელონა") {
      barcelona = teamArray5;
    }
    else if (teamArray6[0] == "ბარსელონა") {
      barcelona = teamArray6;
    }
    else if (teamArray7[0] == "ბარსელონა") {
      barcelona = teamArray7;
    }
    else if (teamArray8[0] == "ბარსელონა") {
      barcelona = teamArray8;
    }
    else if (teamArray9[0] == "ბარსელონა") {
      barcelona = teamArray9;
    }
}


setInterval (checkBarcelona("ბარსელონა"), 3000);





function matchDayChecker() {
  if (window["currentMatchDay"] > lastMatchDay ) {
    console.log("New DAY");
    lastMatchDay++;
  }
}
setInterval (matchDayChecker, 3000);
