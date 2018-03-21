(function() {

    angular.module('app', ['ngRoute'])
        .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    template: '<registration></registration>'
                })
                .when('/grid', {
                    template: '<grid></grid>'
                })
                .when('/schedule', {
                    template: '<schedule></schedule>'
                })
        });
})();