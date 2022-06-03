"use strict";
window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const box = document.querySelector(`.box[data-key="${e.keyCode}"]`);
  console.log(audio);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  box.classList.add("key__play");

  setTimeout(function () {
    box.classList.remove("key__play");
  }, 100);
});
