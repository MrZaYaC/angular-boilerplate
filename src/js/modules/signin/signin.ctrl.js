(function (angular) {
  'use strict';
  angular.module('app').controller('SignInController', SignInController);

  SignInController.$inject = ['signInFormModel'];
  function SignInController(signInFormModel) {
    var vm = this;

    vm.user = signInFormModel;
    vm.signIn = signIn;
    vm.signInForm = '';

    function signIn() {
      console.log(vm.signInForm);
      signInFormModel.signIn();
    }
  }
})(angular);