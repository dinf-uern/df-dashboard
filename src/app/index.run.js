(function() {
  'use strict';

  angular
    .module('dfDashboard')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
