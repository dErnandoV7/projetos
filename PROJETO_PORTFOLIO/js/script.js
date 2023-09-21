function forDark() {
  document.querySelector(".linkedin img").src = "img/linkedinDark.svg"
  document.querySelector(".code img").src = "img/code-slashDark.svg"
  document.querySelector(".github img").src = "img/githubDark.svg"
  document.querySelector(".listSideBar img").src = "img/listDark.svg"

  document.querySelectorAll(".icon-l")[0].classList.add("filterDarkIcon")
  document.querySelectorAll(".icon-l")[1].classList.add("filterDarkIcon")
  document.querySelectorAll(".icon-l")[2].classList.add("filterDarkIcon")

}

function forClear() {

  document.querySelector(".linkedin img").src = "img/linkedinLight.svg"
  document.querySelector(".code img").src = "img/code-slashLight.svg"
  document.querySelector(".github img").src = "img/githubLight.svg"
  document.querySelector(".listSideBar img").src = "img/listLight.svg"

  document.querySelectorAll(".icon-l")[0].classList.remove("filterDarkIcon")
  document.querySelectorAll(".icon-l")[1].classList.remove("filterDarkIcon")
  document.querySelectorAll(".icon-l")[2].classList.remove("filterDarkIcon")
}


function themeMode() {
  let mode = document.querySelector(".themeModeImg")
  if (mode.classList.contains("on")) {
    mode.classList.remove("on")
    mode.src = "img/light.svg"

    document.querySelector(":root").classList.add("dark-mode")
    
    forDark()


  } else {
    mode.classList.add("on")
    mode.src = "img/dark.svg"

    document.querySelector(":root").classList.remove("dark-mode")
    
    forClear()
  }
}