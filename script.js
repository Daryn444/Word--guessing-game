// Переменные
const words = [
  { word: "apple", correct: "яблоко", options: ["яблоко", "банан", "груша", "апельсин"] },
  { word: "dog", correct: "собака", options: ["кошка", "птица", "рыба", "собака"] },
  { word: "house", correct: "дом", options: ["дом", "дерево", "река", "машина"] },
  { word: "book", correct: "книга", options: ["ручка", "тетрадь", "стол", "книга"] },
  { word: "cat", correct: "кошка", options: ["собака", "кошка", "птица", "змея"] },
  { word: "car", correct: "машина", options: ["мотоцикл", "самолет", "поезд", "машина"] },
  { word: "water", correct: "вода", options: ["молоко", "чай", "сок", "вода"] },
  { word: "bread", correct: "хлеб", options: ["мясо", "сыр", "хлеб", "овощи"] },
  { word: "milk", correct: "молоко", options: ["сок", "молоко", "вода", "чай"] },
  { word: "sun", correct: "солнце", options: ["луна", "звезда", "солнце", "облако"] },
  { word: "moon", correct: "луна", options: ["луна", "звезда", "небо", "планета"] },
  { word: "star", correct: "звезда", options: ["луна", "звезда", "планета", "комета"] },
  { word: "river", correct: "река", options: ["озеро", "река", "море", "океан"] },
  { word: "mountain", correct: "гора", options: ["долина", "холм", "гора", "плато"] },
  { word: "tree", correct: "дерево", options: ["трава", "цветок", "дерево", "куст"] },
  { word: "flower", correct: "цветок", options: ["листья", "ветки", "цветок", "трава"] },
  { word: "chair", correct: "стул", options: ["диван", "стол", "стул", "кровать"] },
  { word: "table", correct: "стол", options: ["кресло", "шкаф", "стол", "диван"] },
  { word: "door", correct: "дверь", options: ["окно", "дверь", "стена", "крыша"] },
  { word: "window", correct: "окно", options: ["стена", "окно", "потолок", "пол"] },
  { word: "computer", correct: "компьютер", options: ["ноутбук", "телефон", "компьютер", "планшет"] },
  { word: "phone", correct: "телефон", options: ["планшет", "телефон", "компьютер", "часы"] },
  { word: "pen", correct: "ручка", options: ["карандаш", "ручка", "ластик", "линейка"] },
  { word: "pencil", correct: "карандаш", options: ["линейка", "ластик", "карандаш", "ручка"] },
  { word: "eraser", correct: "ластик", options: ["линейка", "ластик", "карандаш", "ручка"] },
  { word: "notebook", correct: "тетрадь", options: ["тетрадь", "учебник", "журнал", "книга"] },
  { word: "bag", correct: "сумка", options: ["рюкзак", "чемодан", "коробка", "сумка"] },
  { word: "hat", correct: "шляпа", options: ["шляпа", "платок", "перчатки", "шарф"] },
  { word: "shoes", correct: "обувь", options: ["ботинки", "тапочки", "обувь", "сандалии"] },
  { word: "shirt", correct: "рубашка", options: ["куртка", "футболка", "рубашка", "пальто"] },
  { word: "pants", correct: "штаны", options: ["штаны", "шорты", "юбка", "платье"] },
  { word: "jacket", correct: "куртка", options: ["рубашка", "куртка", "пальто", "жилет"] },
  { word: "fish", correct: "рыба", options: ["мясо", "рыба", "птица", "овощи"] },
  { word: "chicken", correct: "курица", options: ["говядина", "свинина", "курица", "рыба"] },
  { word: "beef", correct: "говядина", options: ["курица", "говядина", "свинина", "рыба"] },
  { word: "salt", correct: "соль", options: ["сахар", "соль", "перец", "уксус"] },
  { word: "sugar", correct: "сахар", options: ["соль", "сахар", "мука", "мед"] },
  { word: "honey", correct: "мед", options: ["сахар", "соль", "мед", "вода"] },
  { word: "milk", correct: "молоко", options: ["чай", "сок", "вода", "молоко"] },
  { word: "juice", correct: "сок", options: ["чай", "сок", "вино", "вода"] },
  { word: "coffee", correct: "кофе", options: ["чай", "кофе", "сок", "молоко"] },
  { word: "tea", correct: "чай", options: ["вино", "чай", "кофе", "сок"] },
  { word: "cake", correct: "торт", options: ["торт", "пирог", "булка", "хлеб"] },
  { word: "bread", correct: "хлеб", options: ["хлеб", "булка", "пирог", "торт"] },
  { word: "butter", correct: "масло", options: ["сыр", "масло", "молоко", "сливки"] },
  { word: "cheese", correct: "сыр", options: ["масло", "сыр", "молоко", "йогурт"] },
  { word: "egg", correct: "яйцо", options: ["яйцо", "мясо", "рыба", "курица"] },
  { word: "potato", correct: "картофель", options: ["картофель", "морковь", "свекла", "лук"] },
  { word: "carrot", correct: "морковь", options: ["морковь", "картофель", "свекла", "лук"] },
  { word: "onion", correct: "лук", options: ["морковь", "лук", "картофель", "свекла"] },
  { word: "tomato", correct: "помидор", options: ["огурец", "помидор", "перец", "баклажан"] },
  { word: "cucumber", correct: "огурец", options: ["огурец", "помидор", "перец", "баклажан"] },
  { word: "pepper", correct: "перец", options: ["баклажан", "перец", "помидор", "огурец"] }
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
  setTimeout(nextWord, 1000);
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
