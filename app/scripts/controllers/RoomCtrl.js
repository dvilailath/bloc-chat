(function() {
    function RoomCtrl($uibModal, Room) {
        
        this.chatrooms = Room.all;
        
        this.open = function() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal'
            }
        )};

    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$uibModal', 'Room', RoomCtrl]);
})();