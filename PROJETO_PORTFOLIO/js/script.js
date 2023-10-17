'use strict'

function forDark() {
  document.querySelector(":root").classList.remove("dark-mode")
  document.querySelector(".linkedin img").src = "img/linkedinDark.svg"
  document.querySelector(".code img").src = "img/code-slashDark.svg"
  document.querySelector(".github img").src = "img/githubDark.svg"
  document.querySelector(".listSideBar img").src = "img/listDark.svg"
  const arrayIcons = document.querySelectorAll(".icon-l")
  arrayIcons.forEach(icon => {
    icon.classList.add("filterDarkIcon")
  })
}

function forClear() {
  document.querySelector(":root").classList.add("dark-mode")
  document.querySelector(".linkedin img").src = "img/linkedinLight.svg"
  document.querySelector(".code img").src = "img/code-slashLight.svg"
  document.querySelector(".github img").src = "img/githubLight.svg"
  document.querySelector(".listSideBar img").src = "img/listLight.svg"
  const arrayIcons = document.querySelectorAll(".icon-l")
  arrayIcons.forEach(icon => {
    icon.classList.remove("filterDarkIcon")
  })
}

function themeMode() {
  let mode = document.querySelector(".themeModeImg")
  if (mode.classList.contains("on")) {
    mode.classList.remove("on")
    mode.src = "img/dark.svg"
    forClear()
  } else {
    mode.classList.add("on")
    mode.src = "img/light.svg"
    forDark()
  }
}
