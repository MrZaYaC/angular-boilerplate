(function (angular) {
  'use strict';
  angular.module('app').factory('signUpFormModel', signUpFormModel);
  signUpFormModel.$inject = ['AuthService'];
  function signUpFormModel(AuthService) {
    var signUpFormModel = {
      login: '',
      password: '',
      confirmPassword: '',
      signUp: signUp
    };
    return signUpFormModel;

    function signUp() {
      AuthService.signUp(signUpFormModel.login, signUpFormModel.password).then(function (answer) {
        console.log(answer);
        if(answer.data.result){
          signUpFormModel.login = '';
          signUpFormModel.password = '';
          signUpFormModel.confirmPassword = '';
        }
      });
    }
  }
})(angular);