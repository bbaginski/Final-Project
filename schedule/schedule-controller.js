//   (function() {
angular.module("app").controller("ScheduleController", function($http) {

        var vm = this;
        vm.awayTeamName = [];
        vm.homeTeamName = [];
        vm.homeGameLocation = [];
        vm.gameTime = [];
        vm.gameDate = [];


        $http({
            method: "GET",

            url: "https://api.mysportsfeeds.com/v1.2/pull/nba/2017-2018-regular/full_game_schedule.json",
            params: {
                date: "since-yesterday",
                ///team: 'det'
            },

            headers: {
                "Cache-Control": "no-cache",
                Authorization: "Basic dHNpbXBzOlNwYXJ0YW4xOQ=="
            }
        }).then(function mySuccess(response) {
            var games = response.data.fullgameschedule.gameentry;
            vm.games = games;

        }, function myError(response) {
            vm.status = response.statusText;
        });
    })
    //   })();