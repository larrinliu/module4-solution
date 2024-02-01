(function (window) {
      var helloSpeaker = {};
      helloSpeaker.speak = function (window) {
        console.log(speakWord + " " + name);
      }
  
      var speakWord = "Hello";
      
      window.helloSpeaker = helloSpeaker;     
})();


