(function() {
    function RoomCtrl($uibModal, $cookies, Room, Message) {
        
        this.chatrooms = Room.all;
        
        this.roomValue = null;
        
        this.roomId = null;
        
        this.currentUser = $cookies.get('blocChatCurrentUser');
        
        this.open = function() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal',
                backdrop: 'static'
            }
        )};
        
        this.setCurrentRoom = function(room, roomId) {
            this.roomValue = room;
            this.roomId = roomId;
            this.messages = Message.getByRoomId(this.roomId)
        };
        
        this.sendMessage = function() {
            
            this.newMessage.roomId = this.roomId;
            
            console.log(this.roomId);
            
            this.newMessage.username = this.currentUser;
            
            console.log(this.newMessage);
            
            Message.send(this.newMessage);
            
            
        };
        
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$uibModal', '$cookies','Room', 'Message', RoomCtrl]);
})();