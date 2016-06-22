var firebaseToCheck = new Firebase("https://clicktesterapp.firebaseio.com/");

firebaseToCheck.on("changed_child", function (childSnapshot, dataSnapshot){
      updatePixels(childSnapshot.val());
      var _getCurrentChanges = function (x) {
        childSnapshot.val();
      };
      return {
        getCurrentChanges: _getCurrentChanges
      };
});

function updatePixels (currentState) {
  Object.keys(currentState).forEach(function(key){
    var x = document.getElementById(key);
    x.style.backgroundColor = currentState[key].color;
  });
}