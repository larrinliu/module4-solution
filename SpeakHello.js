(function (window) {
      var helloSpeaker = {};
      helloSpeaker.speak(window) = function speak(name) {
        console.log(speakWord + " " + name);
      }(window);
  
      var speakWord = "Hello";
      
      window.helloSpeaker.speak = helloSpeaker.speak;
      window.helloSpeaker = helloSpeaker;     
})(window);


