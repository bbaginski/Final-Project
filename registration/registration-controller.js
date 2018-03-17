(function(){
    angular
        .module('app')
        .controller('RegistrationController', function() {
            
            var vm = this;
            var userData= [];
            vm.name = '';
            vm.email = '';

              vm.regButton = function (){
                var data = {
                    name: vm.name,
                    email: vm.email
                }
                console.log(data);             
                userData.push(data);
                console.log(userData);
              }
        });
})();
