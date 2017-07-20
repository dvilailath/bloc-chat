(function() {
    function RoomCtrl($scope, Room) {
        $scope.chatrooms = Room.all;
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$scope', 'Room', RoomCtrl]);
})();