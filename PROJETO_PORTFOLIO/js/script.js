'use strict'

// Alterar tema do site
const arrayIcons = document.querySelectorAll(".icon-l")
const rootStyle = document.querySelector(":root")
const iconLinkedin = document.querySelector(".linkedin img")
const iconCode = document.querySelector(".code img")
const iconGithub = document.querySelector(".github img")
const imgSideBar = document.querySelector(".nav__listSideBar img")

function forDark() {
  rootStyle.classList.remove("dark-mode")
  iconLinkedin.src = "img/linkedinDark.svg"
  iconCode.src = "img/code-slashDark.svg"
  iconGithub.src = "img/githubDark.svg"
  imgSideBar.src = "img/listDark.svg"
  arrayIcons.forEach(icon => {
    icon.classList.add("filterDarkIcon")
  })
}

function forClear() {
  rootStyle.classList.add("dark-mode")
  iconLinkedin.src = "img/linkedinLight.svg"
  iconCode.src = "img/code-slashLight.svg"
  iconGithub.src = "img/githubLight.svg"
  imgSideBar.src = "img/listLight.svg"
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

// Efeitos com evento do scroll da página
const containerLanguage = document.querySelector('.linguagens')
const containerProject = document.querySelector('.projetos')

window.addEventListener('scroll', () => {
  const winPageY = window.pageYOffset
  if (winPageY > (containerLanguage.offsetTop - 500)) {
    containerLanguage.classList.add('transitionScrollEvent')
  } else {
    containerLanguage.classList.remove('transitionScrollEvent')
  }

  if (winPageY > (containerProject.offsetTop - 600)) {
    containerProject.classList.add('transitionScrollEvent')
  } else {
    containerProject.classList.remove('transitionScrollEvent')
  }

})