(function (window) {
      var helloSpeaker = {};
      helloSpeaker.speak(name) = function speak(name) {
        console.log(speakWord + " " + name);
      }(window);
  
      var speakWord = "Hello";
      
      window.helloSpeaker.speak(name) = helloSpeaker.speak(name);

})(window);


