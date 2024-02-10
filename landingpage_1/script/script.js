window.addEventListener("load", () => {
  // Seleção de elementos
  const pausePlayBtn = document.querySelector(".play-pause");
  const video = document.querySelector("video");
  const barTimerVideo = document.querySelector(".barTimerVideo");
  const optionsVideo = document.querySelector(".options-video");
  const play = document.querySelector(".play");
  const reset = document.querySelector(".reset");

  // Definir o tempo do video de acordo com a última vez que foi visto
  video.currentTime = localStorage.getItem("timer");

  // Verificando se o video ja foi visto anteriormente
  // Deixando visivel o elemento optionsVideo caso a condição seja verdadeira
  if (
    video.currentTime > 0 &&
    video.currentTime < video.duration &&
    !pausePlayBtn.classList.contains("hide")
  ) {
    optionsVideo.classList.remove("hide");
    pausePlayBtn.classList.add("hide");
  }

  // Click para dar play de onde parou na última vez que assistiu
  play.addEventListener("click", () => {
    optionsVideo.classList.add("hide");
    video.play();
  });

  // Click para reiniciar o video e dar play no mesmo
  reset.addEventListener("click", () => {
    optionsVideo.classList.add("hide");
    video.currentTime = 0;
    video.play();
  });

  // Disparar o evento de click no elemento video quando o elemento de pausePlay for clicado
  pausePlayBtn.addEventListener("click", () => video.click());

  // Evento de click para pausar ou dar play no video
  video.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      pausePlayBtn.classList.toggle("hide");
      return;
    }
    video.pause();
    pausePlayBtn.classList.toggle("hide");
  });

  // Controlar a largura da barra que indica o processo do video
  const barPercentage = setInterval(() => {
    if (video.currentTime === video.duration) {
      video.currentTime = 0;
      pausePlayBtn.classList.remove("hide");
    }

    const percentage = (video.currentTime * 100) / video.duration;
    barTimerVideo.style.width = `${percentage}%`;

    localStorage.setItem("timer", video.currentTime);
  }, 10);
});
