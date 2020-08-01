const interval = setInterval(() => {
  const header = document.querySelector("._1QUKR");
  if (header) {
    clearInterval(interval);
    const button = document.createElement("button");

    function handlePlaybackRateStatus (rate) {
      const playbackRate = Number(rate);
      if(playbackRate === 1) {
        button.innerHTML = "2x";
        button.classList.add("twoTimesButton");
        button.classList.remove("oneTimeButton");
        localStorage.setItem("playbackRate", "1");
      } else if (playbackRate === 2) {
        button.innerHTML = "1x";
        button.classList.add("oneTimeButton");
        button.classList.remove("twoTimesButton");
        localStorage.setItem("playbackRate", "2");
      }
      return playbackRate;
    }

    function handleAudioPlaybackRate (rate = 1) {
      const playbackRate = Number(rate);
      document.addEventListener("click", () => {
        const audios = document.querySelectorAll("audio");
        if(audios) {
          audios.forEach(audio => {
            audio.playbackRate = playbackRate;
          })
        }
      })
    }

    if(!localStorage.getItem("playbackRate")) {
      localStorage.setItem("playbackRate", "1");
      handlePlaybackRateStatus("1");
    } else {
      const playbackRate = handlePlaybackRateStatus(localStorage.getItem("playbackRate"));
      handleAudioPlaybackRate(playbackRate);
    }

    button.addEventListener("click", () => {
      let playbackRate = Number(localStorage.getItem("playbackRate"));
      if (playbackRate === 1) {
        playbackRate++;
        playbackRate = playbackRate = handlePlaybackRateStatus(playbackRate);
        handleAudioPlaybackRate(playbackRate);
      } else if (playbackRate === 2) {
        playbackRate--;
        playbackRate = playbackRate = handlePlaybackRateStatus(playbackRate);
        handleAudioPlaybackRate(playbackRate);
      }
    });

    header.appendChild(button);
  }
}, 1000);
