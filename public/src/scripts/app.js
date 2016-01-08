(function() {
  'use strict';

  angular.element(document).ready(function() {
    angular.bootstrap(document.body, ['pleisiApp']);
  });

  angular.module('pleisiApp', ['core.module'])

  .controller('MainController', MainControllerFn);


  function MainControllerFn() {
    var vm = this;

    vm.hello = "Hola Pleisi";
  }
})();
