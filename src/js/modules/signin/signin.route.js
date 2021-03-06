(function (angular) {
  'use strict';
  angular.module('app').config(signInRoute);
  signInRoute.$inject = ['$stateProvider'];

  function signInRoute($stateProvider) {
    $stateProvider.state('signIn', {
      url: '/sign-in',
      templateUrl: '/view/signIn.html',
      controller: 'SignInController',
      controllerAs: 'vm',
      data: {
        title: 'MAIN.SIGN_IN'
      }
    });
  }
})(angular);