(function(angular){
  'use strict';
  angular.module('app').controller('AppController', AppController);

  AppController.$inject = ['$scope', '$location', 'UserService'];

  function AppController($scope, $location, UserService) {
    var vm = this;
    vm.init = init;
    vm.isCollapsed = true;
    vm.user = {isLogged: false};
    vm.logout = logout;

    $scope.$on('$stateChangeSuccess', onStateChangeSuccess);
    $scope.$on('userLogon', init);

    function init() {
      UserService.profile().then(function(answer){
        if(answer.data.result){
          vm.user.isLogged = true;
        }
      })
    }
    function onStateChangeSuccess() {
      vm.isCollapsed = true;
    }
    function logout() {
      UserService.logout().then(function(answer){
        if(answer.data.result){
          vm.user.isLogged = false;
        }
      })
    }
  }
})(angular);