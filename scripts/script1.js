const btn = document.getElementById('talkBtn');
const box = document.getElementById('dialogBox');
const textElement = document.getElementById('dialogText');
const character = document.getElementById('character');

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

const voiceSound = new Audio('audio/sans.mp3'); 


let typingTimer; 

btn.onclick = function() {
 
  clearTimeout(typingTimer); 

  character.classList.remove('char-hidden');
  character.classList.add('char-visible');
  
  box.style.display = 'block';
  textElement.innerHTML = ""; // Очищуємо поле
  
  const randomIndex = Math.floor(Math.random() * phrases.length);
  const selectedPhrase = phrases[randomIndex];
  
  let i = 0;

  function typeWriter() {
    if (i < selectedPhrase.length) {
      textElement.innerHTML += selectedPhrase.charAt(i);
      
      voiceSound.currentTime = 0; 
      voiceSound.play().catch(e => console.log("Sound skip")); 

      i++;
 
      typingTimer = setTimeout(typeWriter, 50);
    }
  }
  
  typeWriter();
};
