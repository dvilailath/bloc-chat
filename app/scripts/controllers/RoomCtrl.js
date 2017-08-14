(function() {
    function RoomCtrl($uibModal, Room, Message) {
        
        this.chatrooms = Room.all;
        
        this.open = function() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal'
            }
        )};
        
        this.roomValue = "Welcome to Bloc Chat";
        
        this.setChatRooms = function(roomNumber, roomKey) {
            this.roomValue = roomNumber;
            this.roomKey = roomKey;
            this.msg = Message.getByRoomId(this.roomKey);
            console.log(this.msg);
        };
        

    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$uibModal', 'Room', 'Message', RoomCtrl]);
})();