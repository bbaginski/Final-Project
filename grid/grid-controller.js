(function() {
    angular.module("app").controller("GridController", function($http, UserDataFactory) {

        var vm = this;
        var savedSquare = [undefined, "Brittney", "Jennifer", "Elisia", "Brandon", undefined, "Tim", "Elizabeth", "Brian", "James", "Matthew", undefined, "Vinvith", "Alec", "Brooke", "Emily", "Spencer", undefined, "Brittney", "Jennifer", "Elisia", "Brandon", "Ja'mez", "Tim", "Elizabeth", undefined, "Brian", "James", "Matthew", "Vinvith", "Alec", "Brooke", "Emily", "Spencer", undefined, "Tim", "Brittney", "Jennifer", "Elisia", "Brandon", "Ja'mez", undefined, "Elizabeth", "Brian", "James", "Matthew", "Vinvith", undefined, "Brooke", "Emily", "Spencer", undefined, "Brittney", "Jennifer", "Elisia", "Brandon", "Ja'mez", "Tim", "Elizabeth", "Brian", undefined, "James", "Matthew", "Vinvith", "Alec", undefined, "Emily", "Spencer", "Tim", "Brittney", undefined, "Jennifer", "Elisia", "Brandon", "Ja'mez", "Tim", "Elizabeth", "Brian", "James", "Matthew", "Vinvith", "Alec", "Brooke", "Emily", "Spencer", "Tim", undefined, "Brittney", "Jennifer", "Elisia", "Brandon", "Ja'mez", "Tim", "Elizabeth", "Brian", "James", "Matthew", "Vinvith", "Alec", "Brooke"];
        // var savedSquare = JSON.parse(localStorage.getItem('savedSquare')).map(function(square) {
        //     if (!square) {
        //         return undefined;
        //     }
        //     return square;
        // });
        vm.awayTeamScore = [];
        vm.homeTeamScore = [];
        vm.homeTeamBet = [6, 7, 8, 9, 1, 2, 3, 4, 5, 0];
        vm.awayTeamBet = [5, 4, 3, 2, 1, 0, 9, 8, 7, 6];
        vm.winList = ["-----", "-----", "-----", "-----"];
        // vm.homeTeamScore = [6, 6, 0, 0];
        // vm.awayTeamScore = [2, 5, 0, 0];

        $http({
            method: "GET",
            url: "https://api.mysportsfeeds.com/v1.2/pull/nba/2017-2018-regular/scoreboard.json?fordate=20180315",
            headers: {
                "Cache-Control": "no-cache",
                Authorization: "Basic dHNpbXBzOlNwYXJ0YW4xOQ=="
            }
        }).then(function mySuccess(response) {
            var games = response.data.scoreboard.gameScore.filter(function(data) {
                return data.game.awayTeam.Name === 'Pistons' || data.game.homeTeam.Name === 'Pistons'
            });
            var game = games[0];
            vm.teaminfo = game;
            var quarterSummary = game.quarterSummary.quarter;
            vm.homeTeamScore = quarterSummary.map(function(quarter) {
                return quarter.homeScore;
            });
            vm.awayTeamScore = quarterSummary.map(function(quarter) {
                return quarter.awayScore;
            });
        }, function myError(response) {
            vm.status = response.statusText;
        });





        vm.showName = function(num) {
            return savedSquare[num];
        };
        vm.isTaken = function(num) {
            if (savedSquare[num] !== undefined) {
                return "taken";
            }
        };
        vm.isWinner = function(home, away, cellnum) {

            for (var i = 0; i < vm.awayTeamScore.length; i++) {
                if (home === (Math.abs(vm.homeTeamScore[i]) % 10) && away === (Math.abs(vm.awayTeamScore[i]) % 10)) {
                    var sqName = savedSquare[cellnum];
                    vm.winList[i] = sqName;
                    console.log(savedSquare[cellnum]);
                    return "winner";
                }
            }
        };
        vm.calcId = function(cIndex, pIndex) {
            var newID = cIndex + 1 + (pIndex * 10);
            return newID;
        };




        var grid = document.getElementById("Grid");
        var name = UserDataFactory.getData() || [];

        function cellClick(event) {
            var cellId = event.target.id;
            var cellIdNum = cellId.replace(/\D/g, "");

            if (event.target.classList.contains("selected")) {
                event.target.classList.remove("selected");
                event.target.innerHTML = "";
                savedSquare[cellIdNum] = undefined;

            } else if (event.target.classList.contains("winner")) {
                console.log("boom");

            } else if (event.target.classList.contains("cell") && savedSquare[cellIdNum] === undefined) {
                event.target.classList.add("selected");
                event.target.innerHTML = name;
                savedSquare[cellIdNum] = name;
                console.log(cellIdNum);
                UserDataFactory.setBet(cellIdNum) || [];

            }
            // localStorage.setItem('savedSquare', JSON.stringify(savedSquare));
        }

        grid.addEventListener("click", cellClick, false);
    });
})();