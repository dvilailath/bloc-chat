(function() {
    function ModalCtrl($uibModalInstance, $cookies, Room) {

        this.createRoomForm = {
            headerText: "Create New Room",
            roomText: "Enter a new room name: "
        };
        
        this.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
        
        this.createroom = function(newRoom) {
            $uibModalInstance.close(newRoom);
            console.log(newRoom);
            return Room.add(newRoom);
        };
        
        this.setUsername = function () {
            $cookies.put('blocChatCurrentUser', this.username);
            console.log(this.username);
            $uibModalInstance.close();
        };
        
    };
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', '$cookies', 'Room', ModalCtrl]);
})();
