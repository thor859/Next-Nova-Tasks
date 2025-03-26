const sounds = ["applause", "boo", "victory"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    pauseaudio();
    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

function pauseaudio() {
  sounds.forEach((sound) => {
    const audio = document.getElementById(sound);

    audio.pause();
    audio.currentTime = 0;
  });
}

//This JavaScript code dynamically generates a soundboard with buttons for 
// different audio clips specified in the sounds array. Each button is labeled 
// with the name of the corresponding sound and styled using the btn class. 
// When a button is clicked, the pauseaudio() function is invoked to stop and reset 
// all currently playing audio clips, ensuring that only one sound plays at a time. 
// After stopping other audio, the associated sound for the clicked button is played using the
//  .play() method. The pauseaudio() function iterates through the sounds array, retrieves each 
// audio element by its ID, pauses it, and resets its playback position to the start. 
// This structure creates an interactive and responsive audio playback system, 
// allowing users to seamlessly play one sound at a time.
