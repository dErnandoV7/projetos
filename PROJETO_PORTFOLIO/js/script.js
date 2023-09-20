function themeMode() {
  let mode = document.querySelector(".themeModeImg")
  if (mode.src == "http://localhost:7700/PROJETO_PORTFOLIO/img/light.svg") {
    mode.src = "http://localhost:7700/PROJETO_PORTFOLIO/img/dark.svg"
    document.querySelector("header").style.background = "#160828"
    document.querySelector("main").style.background = "#160828"
    document.querySelector("footer").style.background = "#160828"
    document.querySelector("p").style.color = "#ddd"
    document.querySelector(".description h1").style.color = "#ddd"
    document.querySelector(".description h2").style.color = "#ddd"
    document.querySelector(".projetos h2").style.color = "#ddd"
    document.querySelector(".linkedin img").src = "http://localhost:7700/PROJETO_PORTFOLIO/img/linkedinDark.svg"
    document.querySelector(".code img").src = "http://localhost:7700/PROJETO_PORTFOLIO/img/code-slashDark.svg"
    document.querySelector(".github img").src = "http://localhost:7700/PROJETO_PORTFOLIO/img/githubDark.svg"
    document.querySelector(".listSideBar img").src = "http://localhost:7700/PROJETO_PORTFOLIO/img/listDark.svg"
  } else {
    mode.src = "http://localhost:7700/PROJETO_PORTFOLIO/img/light.svg"
    document.querySelector("header").style.background = "#fff"
    document.querySelector("main").style.background = "#fff"
    document.querySelector("footer").style.background = "#fff"
    document.querySelector("p").style.color = "#000"
    document.querySelector(".description h1").style.color = "#000"
    document.querySelector(".description h2").style.color = "#000"
    document.querySelector(".projetos h2").style.color = "#000"
    document.querySelector(".linkedin img").src = "http://localhost:7700/PROJETO_PORTFOLIO/img/linkedinLight.svg"
    document.querySelector(".code img").src = "http://localhost:7700/PROJETO_PORTFOLIO/img/code-slashLight.svg"
    document.querySelector(".github img").src = "http://localhost:7700/PROJETO_PORTFOLIO/img/githubLight.svg"
    document.querySelector(".listSideBar img").src = "http://localhost:7700/PROJETO_PORTFOLIO/img/listLight.svg"

  }
}