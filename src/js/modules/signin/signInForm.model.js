(function (angular) {
  'use strict';
  angular.module('app').factory('signInFormModel', signInFormModel);
  signInFormModel.$inject = ['$rootScope', 'AuthService'];
  function signInFormModel($rootScope, AuthService) {
    var signInFormModel = {
      login: '',
      password: '',
      rememberMe: true,
      signIn: signIn
    };
    return signInFormModel;

    function signIn() {
      AuthService.signIn(signInFormModel.login, signInFormModel.password).then(function (answer) {
        console.log(answer);
        if(answer.data.result){
          $rootScope.$broadcast('userLogon');
        }
      });
    }
  }
})(angular);