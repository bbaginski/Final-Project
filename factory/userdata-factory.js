(function(){
    angular.module('app')
      .factory('UserDataFactory', function(){ 
        var data = {};
        return {
          setData, setBet,
          getData
        };
  
        function setData (newdata) {
            data = newdata;
            console.log(data);
        }
  
        function getData () {     
          
          return data.name;
        }
        function setBet (bet) {          
          data.bets = bet;  
          console.log(data);       
        }

        
      });
  })();