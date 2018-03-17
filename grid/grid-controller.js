
(function() {
    angular
        .module('app')
        .controller('GridController', function() {
            var vm = this; 
            var savedSquare = [undefined, 'bob', undefined, undefined, 'brian'];
            vm.showName = function(num){
                return savedSquare[num];
            }
            vm.isTaken = function(num){
                if(savedSquare[num] !== undefined){
                    return "taken";
                }
                
            }
            vm.awayTeamBet = [5,4,3,2,1,0,9,8,7,6];
            vm.homeTeamBet = [6,7,8,9,1,2,3,4,5,0];
            vm.awayTeamScore = [1,0,0,0];
            vm.homeTeamScore = [2,0,0,0];

             
            var grid = document.getElementById('Grid'); 
            var name = "Bob"
            
            function cellClick(event) {                
                var cellId = event.target.id                       
                var cellIdNum = cellId.replace(/\D/g,''); 

                if (event.target.classList.contains('selected')){                     
                    event.target.classList.remove("selected"); 
                    event.target.innerHTML = "" ;                 
                    savedSquare[cellIdNum] = undefined;      
               }
               else if (event.target.classList.contains('cell') && savedSquare[cellIdNum] === undefined){  
                     event.target.classList.add("selected"); 
                     event.target.innerHTML = name ;                
                     savedSquare[cellIdNum] = name;
                }
                 
              }
              
              grid.addEventListener('click', cellClick, false);

            //   var x = document.getElementsByClassName("cell")[0].getAttribute("col-num"); 
            //   var y = document.getElementsByClassName("cell")[0].getAttribute("row-num");
            //   if  (awayTeamScore[0] === x && homeTeamScore === y){
            //         event.target.classList.add("winner"); 
            //   }



        });


})();