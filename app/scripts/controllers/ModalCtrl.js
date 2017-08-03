(function() {
    function ModalCtrl($uibModalInstance, Room) {

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
        
    };
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
})();
