(function(){
    angular.module('app')
      .factory('UserDataFactory', function(){
        var name;
        var email;
        return {
          setData,
          getData
        };
  
        function setData (newdata) {
          
            data = newdata;
            console.log(data);
        }
  
        function getData () {
           
          return data;
        }

        
      });
  })();