
(function (window) {

var names = ["Yaakov", "Bassem", "Juliana", "Mark", "Michael", "Joyce", "Arsany", "Laurin", "John", "Mary", "Jason", "Madonna", "Jacqueline", "Sarah"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter == 'j') {
    window.byeSpeaker.speak(names[i]);
  } else {
    window.helloSpeaker.speak(names[i]);
  }
}
})(window);
