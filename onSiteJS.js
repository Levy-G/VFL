//Get current seasonID.

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



//Function to fetch live data from VFL.
function tableBuilder() {
    fetch('https://vfl3.betradar.com/vfl/feeds/?/betssoneuropebetvfl/ka/Europe:Paris/gismo/vfl_tournament_livetablebyseasonandround/1218394/1', { method: 'get' })
        .then((response) => {
            return response.json();
        }).then((data) => {
            window["currentMatchDay"] = data.doc[0].data.currentround;

            window["team1"] = data.doc[0].data.tablerows[0].team.name;
            document.getElementById("team1").innerHTML = data.doc[0].data.tablerows[0].team.name;
            window["win1"] = data.doc[0].data.tablerows[0].winTotal;
            document.getElementById("winTotal1").innerHTML = data.doc[0].data.tablerows[0].winTotal;

            window["team2"] = data.doc[0].data.tablerows[1].team.name;
            document.getElementById("team2").innerHTML = data.doc[0].data.tablerows[1].team.name;
            window["win2"] = data.doc[0].data.tablerows[1].winTotal;
            document.getElementById("winTotal2").innerHTML = data.doc[0].data.tablerows[1].winTotal;

            window["team3"] = data.doc[0].data.tablerows[2].team.name;
            document.getElementById("team3").innerHTML = data.doc[0].data.tablerows[2].team.name;
            window["win3"] = data.doc[0].data.tablerows[2].winTotal;
            document.getElementById("winTotal3").innerHTML = data.doc[0].data.tablerows[2].winTotal;

            window["team4"] = data.doc[0].data.tablerows[3].team.name;
            document.getElementById("team4").innerHTML = data.doc[0].data.tablerows[3].team.name;
            window["win4"] = data.doc[0].data.tablerows[3].winTotal;
            document.getElementById("winTotal4").innerHTML = data.doc[0].data.tablerows[3].winTotal;

            window["team5"] = data.doc[0].data.tablerows[4].team.name;
            document.getElementById("team5").innerHTML = data.doc[0].data.tablerows[4].team.name;
            window["win5"] = data.doc[0].data.tablerows[4].winTotal;
            document.getElementById("winTotal5").innerHTML = data.doc[0].data.tablerows[4].winTotal;

            window["team6"] = data.doc[0].data.tablerows[5].team.name;
            document.getElementById("team6").innerHTML = data.doc[0].data.tablerows[5].team.name;
            window["win6"] = data.doc[0].data.tablerows[5].winTotal;
            document.getElementById("winTotal6").innerHTML = data.doc[0].data.tablerows[5].winTotal;

            window["team7"] = data.doc[0].data.tablerows[6].team.name;
            document.getElementById("team7").innerHTML = data.doc[0].data.tablerows[6].team.name;
            window["win7"] = data.doc[0].data.tablerows[6].winTotal;
            document.getElementById("winTotal7").innerHTML = data.doc[0].data.tablerows[6].winTotal;

            window["team8"] = data.doc[0].data.tablerows[7].team.name;
            document.getElementById("team8").innerHTML = data.doc[0].data.tablerows[7].team.name;
            window["win8"] = data.doc[0].data.tablerows[7].winTotal;
            document.getElementById("winTotal8").innerHTML = data.doc[0].data.tablerows[7].winTotal;

            window["team9"] = data.doc[0].data.tablerows[8].team.name;
            document.getElementById("team9").innerHTML = data.doc[0].data.tablerows[8].team.name;
            window["win9"] = data.doc[0].data.tablerows[8].winTotal;
            document.getElementById("winTotal9").innerHTML = data.doc[0].data.tablerows[8].winTotal;

            window["team10"] = data.doc[0].data.tablerows[9].team.name;
            document.getElementById("team10").innerHTML = data.doc[0].data.tablerows[9].team.name;
            window["win10"] = data.doc[0].data.tablerows[9].winTotal;
            document.getElementById("winTotal10").innerHTML = data.doc[0].data.tablerows[9].winTotal;
        });
}


//Fetch live data from VFL every X second.
//IMPORTANT. Need to write logic to fetch ONLY when there's a new matchday and ONLY between games. So far this is only a basic version.

tableBuilder(); //Initial execution of the function.

setInterval(tableBuilder, 3000);
