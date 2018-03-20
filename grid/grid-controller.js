(function() {
  angular.module("app").controller("GridController", function() {

    var vm = this;
    var savedSquare = [undefined, "bob", undefined, undefined, "brian"];
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
            if (home === (Math.abs(vm.homeTeamScore[i]) % 10) && away === (Math.abs(vm.awayTeamScore[i]) % 10) ) {
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
 

    vm.homeTeamBet = [6, 7, 8, 9, 1, 2, 3, 4, 5, 0];
    vm.awayTeamBet = [5, 4, 3, 2, 1, 0, 9, 8, 7, 6];
    vm.homeTeamScore = [6, 6, 0, 0];
    vm.awayTeamScore = [2, 5, 0, 0];
    vm.winList = ["-----","-----","-----","-----"]

    var grid = document.getElementById("Grid");
    var name = "Bob";

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
      }
    }

    grid.addEventListener("click", cellClick, false);
  });
})();
