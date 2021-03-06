import HomeController from 'js/home';
import NavBarDirective from 'js/directive/nav-bar';
import 'less/main.less';

angular.module('demo', ['ui.router'])
.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'HomeController as Home',
    });
  $urlRouterProvider.otherwise('/home');
})
.controller('HomeController', HomeController)
.directive('navBar', () => new NavBarDirective);
