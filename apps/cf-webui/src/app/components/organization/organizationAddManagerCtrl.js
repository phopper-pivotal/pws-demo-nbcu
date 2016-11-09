angular.module('app.organization').controller('OrganizationAddManagerCtrl', ['$route', '$scope', '$modalInstance', '$log', 'user', 'organizationService', 'messageService', function($route, $scope, $modalInstance, $log, user, organizationService, messageService) {

  $scope.ok = function () {

    organizationService.associateManagerWithOrganization(user).then(function(response) {
      messageService.addMessage('success', 'The manager has been successfully added.', true);
      $modalInstance.close();
    }, function(err) {
      messageService.addMessage('danger', 'The manager has not been added.', true);
      $modalInstance.close();
      $log.error(err);
    });
  };
  
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}]);