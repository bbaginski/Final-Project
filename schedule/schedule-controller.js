(function() {
    angular.module("app")
        .controller("ScheduleController", function($http) {
            $http({
                    method: "GET",
                    url: "https://api.mysportsfeeds.com/v1.2/pull/nba/2017-2018-regular/full_game_schedule.json",
                    qs: { fordate: "until-3-weeks-from-now?" },
                    headers: {
                        "Cache-Control": "no-cache",
                        Authorization: "Basic dHNpbXBzOlNwYXJ0YW4xOQ=="
                    }
                }).then(function mySuccess(response) {
                    var schedule = response.data.fullgameschedule.gameentry;
                    console.log(schedule);
                    console.log('HELLO');
                }),
                function myError(response) {
                    vm.status = response.statusText;
                }
        });
})();