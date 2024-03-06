
//-----------------------------------------------------
text1 = "<p>Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. It's also known as information technology security or electronic information security. The term applies in a variety of contexts, from business to mobile computing, and can be divided into a few common categories.<p>"
const paper = '#text'
//------------------------------------------------------



function write(text1,paper) {
    setTimeout(

      function() {
        var str = text1,
          i = 0,
          htmltag,
          text;

        (function textType() {
          text = str.slice(0, ++i);
          if (text === str) return;

          $(paper).html(text);

          var char = text.slice(-1);
          if (char === '<') htmltag = true;
          if (char === '>') htmltag = false;

          if (htmltag) return textType();
          setTimeout(textType, 60);
        }());
      }, 400);
  };

// Function to handle the intersection changes
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Call the write function when the text slide is in the viewport
      write(text1, paper);

      // Disconnect the observer to prevent multiple calls
      observer.disconnect();
    }
  });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

// Observe the element with the ID 'text'
observer.observe(document.getElementById('text'));



let fullscreen;
let scrn = document.getElementById("fscreen");
scrn.addEventListener("click", function() {
  if (!fullscreen) {
    fullscreen = true;
    document.documentElement.requestFullscreen();
    scrn.style.textDecoration = "line-through 2px red";
  } else {
    fullscreen = false;
    document.exitFullscreen();
    scrn.style.textDecoration = "none";
  }
});
