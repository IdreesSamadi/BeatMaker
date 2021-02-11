class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.playBtnK = document.querySelector(".playK");
    this.playBtnS = document.querySelector(".playS");
    this.playBtnH = document.querySelector(".playH");
    this.playBtnC = document.querySelector(".playC");
    this.currentKick = "./sounds/kick-classic.wav";
    this.currentSnare = "./sounds/snare-acoustic01.wav";
    this.currentHihat = "./sounds/hihat-acoustic01.wav";
    this.currentClap = "./sounds/clap-808.wav";
    this.kickAudio = document.querySelector(".kick-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");
    this.clapAudio = document.querySelector(".clap-sound");
    this.index = 0;
    this.index2 = 0;
    this.indexH = 0;
    this.indexS = 0;
    // this.bpm = 150;
    this.kBpm = 150
    this.sBpm = 150
    this.hBpm = 150
    this.cBpm = 150
    this.isPlayingK = null;
    this.isPlayingS = null;
    this.isPlayingH = null;
    this.isPlayingC = null;
    this.selects = document.querySelectorAll("select");
    this.muteBtns = document.querySelectorAll(".mute");
    this.tempoSliders = document.querySelectorAll(".tempo-slider");
    this.tempoSliderKick = document.querySelector(".tempo-slider-kick");
    this.tempoSliderSnare = document.querySelector(".tempo-slider-snare");
    this.tempoSliderhihat = document.querySelector(".tempo-slider-hihat");
    this.tempoSliderClap = document.querySelector(".tempo-slider-clap");
  }
  activePad() {
    this.classList.toggle("active");
  }
  startK() {
    const interval = (60 / this.kBpm) * 1000;
    if (this.isPlayingK) {
      clearInterval(this.isPlayingK);
      this.isPlayingK = null;
    } else {
        this.isPlayingK = setInterval(() => {
          let step = this.index2 % 8;
          const activeBars = document.querySelectorAll(`.kb${step}`);
          activeBars.forEach(bar => {
            bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
            if (bar.classList.contains("active")) {
                this.kickAudio.currentTime = 0;
                this.kickAudio.play();
            }
          });
          this.index2++;
      }, interval);
    }
  }
  startS() {
    const interval = (60 / this.sBpm) * 1000;
    if (this.isPlayingS) {
      clearInterval(this.isPlayingS);
      this.isPlayingS = null;
    } else {
        this.isPlayingS = setInterval(() => {
          let step = this.indexS % 8;
          const activeBars = document.querySelectorAll(`.sb${step}`);
          activeBars.forEach(bar => {
            bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
            if (bar.classList.contains("active")) {
                this.snareAudio.currentTime = 0;
                this.snareAudio.play();
            }
          });
          this.indexS++;
      }, interval);
    }
  }
  startH() {
    const interval = (60 / this.hBpm) * 1000;
    if (this.isPlayingH) {
      clearInterval(this.isPlayingH);
      this.isPlayingH = null;
    } else {
        this.isPlayingH = setInterval(() => {
          let step = this.indexH % 8;
          const activeBars = document.querySelectorAll(`.hb${step}`);
          activeBars.forEach(bar => {
            bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
            if (bar.classList.contains("active")) {
                this.hihatAudio.currentTime = 0;
                this.hihatAudio.play();
            }
          });
          this.indexH++;
      }, interval);
    }
  }
  startC() {
    const interval = (60 / this.cBpm) * 1000;
    if (this.isPlayingC) {
      clearInterval(this.isPlayingC);
      this.isPlayingC = null;
    } else {
        this.isPlayingC = setInterval(() => {
          let step = this.index % 8;
          const activeBars = document.querySelectorAll(`.cb${step}`);
          activeBars.forEach(bar => {
            bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
            if (bar.classList.contains("active")) {
                this.clapAudio.currentTime = 0;
                this.clapAudio.play();
            }
          });
          this.index++;
      }, interval);
    }
  }
  updateBtn() {
    if (!this.isPlaying) {
      // this.playBtn.innerText = "Stop";
      this.playBtnK.classList.add("active");
      this.playBtnS.classList.add("active");
      this.playBtnH.classList.add("active");
      this.playBtnC.classList.add("active");
    } else {
      // this.playBtn.innerText = "Play";
      this.playBtnK.classList.remove("active");
      this.playBtnS.classList.remove("active");
      this.playBtnH.classList.remove("active");
      this.playBtnC.classList.remove("active");
    }
  }
  changeSound(e) {
    const selectionName = e.target.name;
    const selectionValue = e.target.value;
    switch (selectionName) {
      case "kick-select":
        this.kickAudio.src = selectionValue;
        break;
      case "snare-select":
        this.snareAudio.src = selectionValue;
        break;
      case "hihat-select":
        this.hihatAudio.src = selectionValue;
        break;
      case "clap-select":
        this.clapAudio.src = selectionValue;
        break;
    }
  }
  mute(e) {
    const muteIndex = e.target.getAttribute("data-track");
    e.target.classList.toggle("active");
    if (e.target.classList.contains("active")) {
      switch (muteIndex) {
        case "0":
          this.kickAudio.volume = 0;
          break;
        case "1":
          this.snareAudio.volume = 0;
          break;
        case "2":
          this.hihatAudio.volume = 0;
          break;
        case "3":
          this.clapAudio.volume = 0;
          break;
      }
    } else {
      switch (muteIndex) {
        case "0":
          this.kickAudio.volume = 1;
          break;
        case "1":
          this.snareAudio.volume = 1;
          break;
        case "2":
          this.hihatAudio.volume = 1;
          break;
        case "3":
          this.clapAudio.volume = 1;
        break;
      }
    }
  }
  changeTempo(e) {    
    const tempoTextKick = document.querySelectorAll(".tempo-nr-kick"); 
    const tempoTextSnare = document.querySelectorAll(".tempo-nr-snare"); 
    const tempoTextHihat = document.querySelectorAll(".tempo-nr-hihat"); 
    const tempoTextClap = document.querySelectorAll(".tempo-nr-clap"); 
      if(e.target.classList.contains('tempo-slider-kick')) {
        console.log(tempoTextKick[0].innerText);
        tempoTextKick[0].innerText = e.target.value;
      }
      if(e.target.classList.contains('tempo-slider-snare')) {
        tempoTextSnare[0].innerText = e.target.value;
      }
      if(e.target.classList.contains('tempo-slider-hihat')) {
        tempoTextHihat[0].innerText = e.target.value;
      }
      if(e.target.classList.contains('tempo-slider-clap')) {
        tempoTextClap[0].innerText = e.target.value;
      }
  }
  updateTempo(e) {
    if(e.target.classList.contains('tempo-slider-kick') &&
    this.playBtnK.classList.contains("active")) {
      clearInterval(this.isPlayingK);
      this.isPlayingK = null;
      this.kBpm = e.target.value;
      this.startK();
    }
    if(e.target.classList.contains('tempo-slider-snare') && this.playBtnS.classList.contains("active")) {
      clearInterval(this.isPlayingS);
      this.isPlayingS = null;
      this.sBpm = e.target.value;
      this.startS(e.target.value, e.target.classList);
    }
    if(e.target.classList.contains('tempo-slider-hihat') && this.playBtnH.classList.contains("active")) {
      clearInterval(this.isPlayingH);
      this.isPlayingH = null;
      this.hBpm = e.target.value;
      this.startH(e.target.value, e.target.classList);
    }
    if(e.target.classList.contains('tempo-slider-clap') && this.playBtnC.classList.contains("active")) {
      clearInterval(this.isPlayingC);
      this.isPlayingC = null;
      this.cBpm = e.target.value;
      this.startC();
    }
  }
}

const drumKit = new DrumKit();

//Event Listeners

drumKit.pads.forEach(pad => {
  pad.addEventListener("click", drumKit.activePad);
  pad.addEventListener("animationend", function() {
    this.style.animation = "";
  });
});

drumKit.playBtnK.addEventListener("click", function() {
  if (!drumKit.isPlayingK) {
    drumKit.playBtnK.classList.add("active");
    drumKit.playBtnK.innerHTML = '<i class="far fa-stop-circle"></i>';
  } else {
    drumKit.playBtnK.classList.remove("active");
    drumKit.playBtnK.innerHTML = '<i class="fas fa-play"></i>';
  }  
  drumKit.startK();
});

drumKit.playBtnS.addEventListener("click", function() {
  if (!drumKit.isPlayingS) {
    drumKit.playBtnS.innerHTML = '<i class="far fa-stop-circle"></i>';
    drumKit.playBtnS.classList.add("active");
  } else {
    drumKit.playBtnS.classList.remove("active");
    drumKit.playBtnS.innerHTML = '<i class="fas fa-play"></i>';
  }
  drumKit.startS();
});

drumKit.playBtnH.addEventListener("click", function() {
  if (!drumKit.isPlayingH) {
    drumKit.playBtnH.innerHTML = '<i class="far fa-stop-circle"></i>';
    drumKit.playBtnH.classList.add("active");
  } else {
    drumKit.playBtnH.innerHTML = '<i class="fas fa-play"></i>';
    drumKit.playBtnH.classList.remove("active");
  }
  drumKit.startH();
});

drumKit.playBtnC.addEventListener("click", function() {
  if (!drumKit.isPlayingC) {
    drumKit.playBtnC.innerHTML = '<i class="far fa-stop-circle"></i>';
    drumKit.playBtnC.classList.add("active");
  } else {
    drumKit.playBtnC.innerHTML = '<i class="fas fa-play"></i>';
    drumKit.playBtnC.classList.remove("active");
  }
  drumKit.startC();
});

drumKit.selects.forEach(select => {
  select.addEventListener("change", function(e) {
    drumKit.changeSound(e);
  });
});
drumKit.muteBtns.forEach(btn => {
  btn.addEventListener("click", function(e) {
    drumKit.mute(e);
  });
});

drumKit.tempoSliders.forEach(tempoSlider => {
  tempoSlider.addEventListener("input", (e) => {
    drumKit.changeTempo(e);
  })
})
drumKit.tempoSliders.forEach(tempoSlider => {
  tempoSlider.addEventListener("change", (e) => {
    drumKit.updateTempo(e);
  })
})