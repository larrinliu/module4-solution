(function (window) {
      var helloSpeaker = {};
      helloSpeaker.speak = function (window) {
        console.log(speakWord + " " + name);
      }(window)
  
      var speakWord = "Hello";
      
      window.helloSpeaker = helloSpeaker;     
})(window);


