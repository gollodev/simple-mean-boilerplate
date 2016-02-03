(function() {
  'use strict';

  angular.element(document).ready(function() {
    angular.bootstrap(document.body, ['app']);
  });

  angular.module('app', ['core.module'])

  .controller('MainController', MainController);


  function MainController() {
    var vm = this;

    vm.hello = "Simple MEAN Boilerplate";
  }
})();
