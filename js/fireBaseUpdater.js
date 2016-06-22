var firebaseToCheck = new Firebase("https://clicktesterapp.firebaseio.com/");

firebaseToCheck.on("child_changed", function (childSnapshot, dataSnapshot){
      updatePixels(childSnapshot.val());
      console.log('this is datasnap  ' + childSnapshot.val());
/*      var _getCurrentChanges = function (x) {
        childSnapshot.val();
      };
      return {
        getCurrentChanges: _getCurrentChanges
      };*/
});

function updatePixels (currentState) {
  Object.keys(currentState).forEach(function(key){
    console.log('this is key  ' + key);
    var x = document.getElementById(key);
    x.style.backgroundColor = currentState[key].value;
  });
}