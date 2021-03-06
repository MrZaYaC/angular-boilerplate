(function(angular){
  'use strict';
  angular.module('app').config(signUpRoute);
  signUpRoute.$inject = ['$stateProvider'];

  function signUpRoute($stateProvider) {
    $stateProvider.state('signUp', {
      url: '/sign-up',
      templateUrl: '/view/signUp.html',
      controller: 'SignUpController',
      controllerAs: 'vm',
      data: {
        title: 'MAIN.SIGN_UP'
      }
    });
  }
})(angular);
