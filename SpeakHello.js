(function (window) {
      var helloSpeaker = {};
      helloSpeaker.speak(name) = function (speakWord, name) {
        console.log(speakWord + " " + name);
      }
  
      var speakWord = "Hello";
      
      window.helloSpeaker.speak(name) = helloSpeaker.speak(name);

})(window);


