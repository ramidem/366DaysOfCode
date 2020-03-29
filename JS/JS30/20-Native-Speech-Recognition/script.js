window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = "en-US";

// create a paragraph
let p = document.createElement("p");
const words = document.querySelector(".words");
words.appendChild(p);

// listen one time
recognition.addEventListener("result", e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join("");

  // const poopScript = transcript.replace(/poop|poo|shit|dump/gi, "💩");
  p.textContent = transcript;

  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }
  // console.log(transcript);
});

// then run again
recognition.addEventListener("end", recognition.start);

recognition.start();
