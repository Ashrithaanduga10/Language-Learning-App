const lessons = [
  { word: "Hola", translation: "Hello" },
  { word: "Gracias", translation: "Thank You" },
  { word: "Adiós", translation: "Goodbye" },
  { word: "Por Favor", translation: "Please" }
];

let currentLesson = 0;

function displayLesson() {
  document.getElementById("word").innerText = lessons[currentLesson].word;
  document.getElementById("translation").innerText =
    "Translation: " + lessons[currentLesson].translation;
}

function nextLesson() {
  currentLesson = (currentLesson + 1) % lessons.length;
  displayLesson();
}

function previousLesson() {
  currentLesson = (currentLesson - 1 + lessons.length) % lessons.length;
  displayLesson();
}

function playPronunciation() {
  let speech = new SpeechSynthesisUtterance(lessons[currentLesson].word);
  speech.lang = "es-ES";
  speechSynthesis.speak(speech);
}

function checkAnswer() {
  let answer = document.getElementById("quizAnswer").value.toLowerCase();

  if(answer === "thank you") {
    document.getElementById("result").innerText = "✅ Correct Answer!";
  } else {
    document.getElementById("result").innerText = "❌ Wrong Answer!";
  }
}

displayLesson();
