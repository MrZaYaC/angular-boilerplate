(function (angular) {
  'use strict';
  angular.module('app').directive('loginExist', loginExist);
  loginExist.$inject = ['$q','UserService'];
  function loginExist($q, UserService) {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$asyncValidators.loginExist = function(modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) {
            return $q.when();
          }
          var def = $q.defer();
          UserService.exist(viewValue).then(function(result){
            console.log(result);
            result.data.result ? def.reject() : def.resolve()
          });
          return def.promise;
        };
      }
    };
  }
})(angular);