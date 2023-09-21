function themeMode() {
  let mode = document.querySelector(".themeModeImg")
  if (mode.classList.contains("on")) {
    mode.classList.remove("on")
    mode.src = "img/light.svg"
    document.querySelector("header").style.background = "#160828"
    document.querySelector("main").style.background = "#160828"
    document.querySelector("footer").style.background = "#160828"
    document.querySelector("p").style.color = "#ddd"
    document.querySelector(".description h1").style.color = "#ddd"
    document.querySelector(".description h2").style.color = "#ddd"
    document.querySelector(".projetos h2").style.color = "#ddd"
    document.querySelector(".linkedin img").src = "img/linkedinDark.svg"
    document.querySelector(".code img").src = "img/code-slashDark.svg"
    document.querySelector(".github img").src = "img/githubDark.svg"
    document.querySelector(".listSideBar img").src = "img/listDark.svg"
    document.querySelectorAll(".icon-l")[0].classList.add("filterDarkIcon")
    document.querySelectorAll(".icon-l")[1].classList.add("filterDarkIcon")
    document.querySelectorAll(".icon-l")[2].classList.add("filterDarkIcon")
  } else {
    mode.classList.add("on")
    mode.src = "img/dark.svg"
    document.querySelector("header").style.background = "#fff"
    document.querySelector("main").style.background = "#fff"
    document.querySelector("footer").style.background = "#fff"
    document.querySelector("p").style.color = "#000"
    document.querySelector(".description h1").style.color = "#000"
    document.querySelector(".description h2").style.color = "#000"
    document.querySelector(".projetos h2").style.color = "#000"
    document.querySelector(".linkedin img").src = "img/linkedinLight.svg"
    document.querySelector(".code img").src = "img/code-slashLight.svg"
    document.querySelector(".github img").src = "img/githubLight.svg"
    document.querySelector(".listSideBar img").src = "img/listLight.svg"
    document.querySelectorAll(".icon-l")[0].classList.remove("filterDarkIcon")
    document.querySelectorAll(".icon-l")[1].classList.remove("filterDarkIcon")
    document.querySelectorAll(".icon-l")[2].classList.remove("filterDarkIcon")
  }
}