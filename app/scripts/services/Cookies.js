(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
        $uibModal.open({
            templateUrl: '/templates/username.html',
            controller: 'ModalCtrl',
            controllerAs: 'modal',
            size: 'sm',
            keyboard: false,
            backdrop: 'static'
      });
    }
    console.log(currentUser);
    // using remove to delete username after refresh
    $cookies.remove('blocChatCurrentUser');
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();