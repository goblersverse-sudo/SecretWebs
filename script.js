const NAME="Eisya";
const GREETING="Happy Birthday! I hope your day is full of joy.";
const LETTER=`
This is a secret letter from the creator.

Hello Eisya, Happy birthday for you, hope your day is full of joy, ehem..., I want to say something to you, if you don't mind that of course, if you feel this latter is cringe or weird, you can close it and leave it, it's just a text,
\n\nEisya, you maybe already know I can't talk to a girl/woman, it's because I'm a fucking loser maybe idk lol, eventhought I can't understand about my feelings,
I don't know why it's happen to me. \n\nAt first we met on Telegram, I know you are such a kind person, you want chat with me, you want to calling with me,etc. Maybe I'am are a just a friend to you, I know that,
you know, when I want to chat with you, I always thinking, maybe I bothering you and maybe you feel cringe when I typing like this lol, I always thinking that, that's why I rarely chat with you, and you already know I has confess my feeling to you, but I don't want to datting (maybe). If you don't like me or you consider me as a friend, well, I don't mind that, it's your choice, I don't judge that,
well, that's all word I want to say to you maybe, I hope this letter doesn't bring you down. Stay positive! It's just a piece of writing! Happy Birthday Eisyakuu!`;

const SONG_URL="./music/music00.mp3";
const SONG_URL2 = "./music/music01.mp3";

const intro=document.getElementById("intro");
const startBtn=document.getElementById("startBtn");
const stage=document.getElementById("stage");
const personName=document.getElementById("personName");
const greeting=document.getElementById("greeting");
const letterContent=document.getElementById("letterContent");
const track=document.getElementById("track");
const envelopeBtn=document.getElementById("envelopeBtn");
const letterModal=document.getElementById("letterModal");
const closeLetter=document.getElementById("closeLetter");

personName.textContent=NAME;
greeting.textContent=GREETING;
letterContent.textContent=LETTER;
if(SONG_URL) track.src=SONG_URL;

startBtn.addEventListener("click",()=>{
  intro.classList.add("hidden");
  setTimeout(()=>{
    stage.classList.remove("hidden");
    if(track.src) track.play().catch(()=>{});
  },800);
});

envelopeBtn.addEventListener("click",()=>{
  letterModal.classList.add("show");
});

closeLetter.addEventListener("click",()=>{
  letterModal.classList.remove("show");
  setTimeout(() => {
    if (SONG_URL2) track.src=SONG_URL2;
    if (track.src) track.play().catch(()=>{});
  }, 500)
});

letterModal.addEventListener("click",e=>{
  if(e.target===letterModal) closeLetter.click();
});
