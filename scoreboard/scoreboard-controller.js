(function() {
    angular
        .module('app')
        .controller('scoreCtrl', scoreCtrl)

    function scoreCtrl($http) {
        var vm = this;

        $http({
            method: "GET",
            url: "https://api.mysportsfeeds.com/v1.2/pull/nba/2017-2018-regular/scoreboard.json?fordate=20180315",
            qs: { fordate: "20180316?" },
            headers: {
                "Cache-Control": "no-cache",
                Authorization: "Basic dHNpbXBzOlNwYXJ0YW4xOQ=="
            }
        }).then(function mySuccess(response) {
            vm.teamName = response.data; 
        }, function myError(response) {
            vm.status = response.statusText;
        });

    }

})();