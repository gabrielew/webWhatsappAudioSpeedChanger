const interval = setInterval(() => {
  const header = document.querySelector("._1QUKR");
  if (header) {
    clearInterval(interval);

    let playbackRate = 1;

    const button = document.createElement("button");
    button.innerHTML = "2x";
    button.classList.add("twoTimesButton");

    button.addEventListener("click", () => {
      const audios = document.querySelectorAll("audio");
      if (playbackRate === 1) {
        button.innerHTML = "1x";
        playbackRate++;
        button.classList.remove("twoTimesButton");
        button.classList.add("oneTimeButton");
      } else if (playbackRate === 2) {
        button.innerHTML = "2x";
        playbackRate--;
        button.classList.remove("oneTimeButton");
        button.classList.add("twoTimesButton");
      }
      audios.forEach((audio) => {
        audio.playbackRate = playbackRate;
      });
    });

    header.appendChild(button);
  }
}, 1000);
