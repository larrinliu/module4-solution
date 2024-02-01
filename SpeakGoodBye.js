(function () {
  
  var byeSpeaker = {};
  byeSpeaker.speak = function speak(name) {
    console.log(speakWord + " " + name);
  }
  window.bySpeaker.speak = byeSpeaker.speak
  
  var speakWord = "Good Bye";
  
  window.byeSpeaker = byeSpeaker;

})();


