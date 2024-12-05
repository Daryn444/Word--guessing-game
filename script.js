// Переменные
const words = [
  { word: "apple", correct: "яблоко", options: ["яблоко", "банан", "груша", "апельсин"] },
  { word: "dog", correct: "собака", options: ["кошка", "птица", "рыба", "собака"] },
  { word: "house", correct: "дом", options: ["дом", "дерево", "река", "машина"] },
  { word: "book", correct: "книга", options: ["ручка", "тетрадь", "стол", "книга"] },
];
let score = 0;
let timer = 60;
let currentWordIndex = 0;

// Элементы
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const startButton = document.getElementById("start-button");
const wordElement = document.getElementById("word");
const answerButtons = document.querySelectorAll(".answer-btn");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");

// Функция начала игры
function startGame() {
  startScreen.style.display = "none";
  gameScreen.style.display = "block";
  score = 0;
  timer = 60;
  currentWordIndex = 0;
  scoreElement.textContent = score;
  timerElement.textContent = timer;
  nextWord();
  startTimer();
}

// Функция выбора следующего слова
function nextWord() {
  if (currentWordIndex >= words.length) currentWordIndex = 0;
  const currentWord = words[currentWordIndex];
  wordElement.textContent = currentWord.word;

  // Перемешиваем ответы
  const shuffledOptions = currentWord.options.sort(() => Math.random() - 0.5);
  answerButtons.forEach((button, index) => {
    button.textContent = shuffledOptions[index];
    button.className = "answer-btn";
    button.onclick = () => checkAnswer(button, currentWord.correct);
  });
  currentWordIndex++;
}

// Проверка ответа
function checkAnswer(button, correctAnswer) {
  if (button.textContent === correctAnswer) {
    button.classList.add("correct");
    score++;
    scoreElement.textContent = score;
  } else {
    button.classList.add("wrong");
    answerButtons.forEach((btn) => {
      if (btn.textContent === correctAnswer) btn.classList.add("correct");
    });
  }
  setTimeout(nextWord, 5000);
}

// Таймер
function startTimer() {
  const interval = setInterval(() => {
    timer--;
    timerElement.textContent = timer;
    if (timer <= 0) {
      clearInterval(interval);
      endGame();
    }
  }, 1000);
}

// Завершение игры
function endGame() {
  alert(`Игра окончена! Ваш результат: ${score} очков`);
  startScreen.style.display = "block";
  gameScreen.style.display = "none";
}

// Событие на кнопку "Играть"
startButton.addEventListener("click", startGame);
