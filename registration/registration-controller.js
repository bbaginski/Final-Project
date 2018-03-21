(function(){
    angular
        .module('app')
        .controller('RegistrationController', function (UserDataFactory) {
            
            var vm = this;
            var userData= [];
            vm.name = '';
            vm.email = '';
            
              vm.regButton = function (){
                var data = {
                    name: vm.name,
                    email: vm.email
                }
                UserDataFactory.setData(data);
              //  UserDataFactory.setemail(vm.email);
                console.log(data);             
                userData.push(data);
                console.log(userData);
                
              }
        });
})();
