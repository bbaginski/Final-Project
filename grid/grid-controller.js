
(function() {
    angular
        .module('app')
        .controller('GridController', function() {
            var vm = this; 
            var savedSquare = [undefined, 'bob', undefined, undefined, 'brian'];
            vm.showName = function(num){
                return savedSquare[num];
            }
            vm.awayTeamScore = [5,4,3,2,1,0,9,8,7,6];
            vm.homeTeamScore = [6,7,8,9,1,2,3,4,5,0];
            var grid = document.getElementById('Grid'); 
            
            function cellClick(event) {
                if (event.target.classList.contains('cell')){
                     console.log(event.target.id); 
                     event.target.classList.add("selected"); 
                     event.target.innerHTML = "<span>Bob</span>"
                }
              }
              
              grid.addEventListener('click', cellClick, false)

              var cells = document.querySelectorAll('#Row1 .cell');
                Array.prototype.forEach.call(cells, function(elements, index) {
                    // conditional here.. access elements
                });



        });


})();