(function() {
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        
        Message.getByRoomId = function(roomId) {
            
            var messages1 = $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    
            return messages1;
            // Filter the messages by their room ID.
        };
        
        return Message;
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();