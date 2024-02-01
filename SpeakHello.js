(function (window) {
      var helloSpeaker = {};
      helloSpeaker.speak = function (name) {
        var speakWord = "Hello";
        console.log(speakWord + " " + name);
      }
  
      window.helloSpeaker.speak(name) = helloSpeaker.speak(name);

})(window);


