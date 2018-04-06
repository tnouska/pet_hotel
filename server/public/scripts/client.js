let petApp = angular.module('PetApp', ['ngRoute', 'ngMaterial']);

petApp.config(function ($routeProvider) {
    console.log('petApp config loaded');
    $routeProvider
    .when('/', {
            redirectTo: '/home'
    })
    .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardController as vm'
    })
    .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as vm'
    })
    .when('/manage', {
        templateUrl: 'views/manage.html',
        controller: 'ManageController as vm'
    })
    .otherwise({
        redirectTo:'/home'
    });
});
petApp.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .dark();
});