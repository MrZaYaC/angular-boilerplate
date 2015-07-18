(function (angular) {
  'use strict';
  angular.module('app').controller('SignUpController', SignUpController);

  SignUpController.$inject = ['signUpFormModel'];
  function SignUpController(signUpFormModel) {
    var vm = this;

    vm.user = signUpFormModel;
    vm.signUp = signUp;
    vm.signUpForm = '';

    function signUp() {
      console.log(vm.signUpForm);
      if(vm.signUpForm.$valid){
        signUpFormModel.signUp();
      }
    }
  }
})(angular);