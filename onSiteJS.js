//Get current seasonID.

//Function to fetch live data from VFL.
function teamChecker() {
    fetch('https://vfl3.betradar.com/vfl/feeds/?/betssoneuropebetvfl/ka/Europe:Paris/gismo/vfl_tournament_livetablebyseasonandround/1215776/1', { method: 'get' })
        .then((response) => {
            return response.json();
        }).then((data) => {
            window["someVar"] = data.doc[0].data.tablerows[0].team.name;
            document.getElementById("team1").innerHTML = data.doc[0].data.tablerows[0].team.name;
            window["win1"] = data.doc[0].data.tablerows[0].winTotal;
            document.getElementById("winTotal").innerHTML = data.doc[0].data.tablerows[0].winTotal;

            window["someVar2"] = data.doc[0].data.tablerows[1].team.name;
            document.getElementById("team2").innerHTML = data.doc[0].data.tablerows[1].team.name;
            window["win2"] = data.doc[0].data.tablerows[1].winTotal;
            document.getElementById("winTotal2").innerHTML = data.doc[0].data.tablerows[1].winTotal;

            window["someVar3"] = data.doc[0].data.tablerows[2].team.name;
            window["win3"] = data.doc[0].data.tablerows[2].winTotal;

            window["someVar4"] = data.doc[0].data.tablerows[3].team.name;
            window["win4"] = data.doc[0].data.tablerows[3].winTotal;

            window["someVar5"] = data.doc[0].data.tablerows[4].team.name;
            window["win5"] = data.doc[0].data.tablerows[4].winTotal;

            window["someVar6"] = data.doc[0].data.tablerows[5].team.name;
            window["win6"] = data.doc[0].data.tablerows[5].winTotal;

            window["someVar7"] = data.doc[0].data.tablerows[6].team.name;
            window["win7"] = data.doc[0].data.tablerows[6].winTotal;

            window["someVar8"] = data.doc[0].data.tablerows[7].team.name;
            window["win8"] = data.doc[0].data.tablerows[7].winTotal;

            window["someVar9"] = data.doc[0].data.tablerows[8].team.name;
            window["win9"] = data.doc[0].data.tablerows[8].winTotal;

            window["someVar10"] = data.doc[0].data.tablerows[9].team.name;
            window["win10"] = data.doc[0].data.tablerows[9].winTotal;
        });
}

//document.getElementById("seasonid").innerHTML = g_srlive_selected_season;

//Fetch live data from VFL every X second.
//IMPORTANT. Need to write logic to fetch ONLY when there's a new matchday and ONLY between games. So far this is only a basic version.
//setInterval(teamChecker, 3000);
teamChecker();
