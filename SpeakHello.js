(function (window) {
      var helloSpeaker = {};
      helloSpeaker.speak = function () {
        console.log(speakWord + " " + name);
      }
  
      var speakWord = "Hello";
      
      window.helloSpeaker = helloSpeaker;     
})();


