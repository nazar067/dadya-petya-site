function togglePlay(audioName) {
  const audioElements = Array.from(document.querySelectorAll('audio'));
  const targetAudio = audioElements.find(a => a.id === audioName);
  if (!targetAudio) return;

  audioElements.forEach(audio => {
    if (audio !== targetAudio) {
      audio.pause();
      audio.currentTime = 0;
    }
  });

  const button = document.querySelector(`button[data-audio="${audioName}"]`) ||
                 document.querySelector(`button[onclick*="${audioName}"]`);

  if (targetAudio.paused) {
    targetAudio.play();
    if (button) button.textContent = '⏸';
  } else {
    targetAudio.pause();
    if (button) button.textContent = '▶';
  }
}

document.addEventListener('DOMContentLoaded', () => {
    const audioElements = Array.from(document.querySelectorAll('audio'));
    const button = document.querySelector(".player-button");
    const scrollArrow = document.querySelector('.scroll-down');
    const showAudioBtn = document.getElementById("show-audio");
    const showPhotosBtn = document.getElementById("show-photos");
    const audioSection = document.getElementById("audio-section");
    const carouselSection = document.getElementById("carousel-section");
    
    showAudioBtn.addEventListener("click", () => {
        audioSection.style.display = "block";
        carouselSection.style.display = "none";
        showAudioBtn.classList.add("active");
        showPhotosBtn.classList.remove("active");
      });
    
      showPhotosBtn.addEventListener("click", () => {
        audioSection.style.display = "none";
        carouselSection.style.display = "block";
        showPhotosBtn.classList.add("active");
        showAudioBtn.classList.remove("active");
    });
  
    audio.addEventListener('ended', () => {
      button.textContent = '▶';
    });
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        scrollArrow.style.opacity = '0';
        scrollArrow.style.pointerEvents = 'none';
        scrollArrow.style.animation = 'none';
      } else {
        scrollArrow.style.opacity = '1';
        scrollArrow.style.pointerEvents = 'auto';
        scrollArrow.style.animation = 'blink 1.2s infinite';
      }
    });
  
    button.addEventListener('click', togglePlay);
  });
  