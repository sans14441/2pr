const btn = document.getElementById('talkBtn');
const box = document.getElementById('dialogBox');
const textElement = document.getElementById('dialogText');
const character = document.getElementById('character'); 

// Фрази
const phrases = [
"Почему скелеты не пьют воду? Потому-что вода это жидКость!",
" Как называется татуировка на костях? КОСТО-мизация!",
"Почему тот скелет такой медленный? Потому что на нём панцирь ЧЕРЕПашки!",
"Почему скелеты могут открыть любую дверь? У них же есть КЛЮЧица!",
"Что может совершить злой скелет? паКОСТЬ!",
"Чем покрывает скелет крышу дома? ЧЕРЕПицей!",
" Как зовут скелета с ломом? КОСТО - ЛОМ!",
"какое любимое имя скелета КОСТЬя!",
"Как называется костюм скелета? КОСТЬюм!",
"Из чего стреляет скелет? Из ЧЕРЕПпушки!",
];

// Звук
const voiceSound = new Audio('audio/sans.mp3');
voiceSound.oncanplaythrough = function() {
    console.log("Звук завантажився і готовий до гри!");
};

voiceSound.onerror = function() {
    console.error("Помилка: Браузер не зміг знайти або завантажити звук.");
};

btn.onclick = function() {
  character.classList.remove('char-hidden');
  character.classList.add('char-visible');
  
  // Далі все як раніше
  box.style.display = 'block';
  textElement.innerHTML = "";
  
  const randomIndex = Math.floor(Math.random() * phrases.length);
  const selectedPhrase = phrases[randomIndex];
  
  let i = 0;
  function typeWriter() {
    if (i < selectedPhrase.length) {
      textElement.innerHTML += selectedPhrase.charAt(i);
      
    voiceSound.currentTime = 0; 
voiceSound.play().catch(function(error) {
  console.log("Звук заблоковано браузером або файл не знайдено:", error);
});

      i++;
      setTimeout(typeWriter, 50);
    }
  }
  
  typeWriter();
};
