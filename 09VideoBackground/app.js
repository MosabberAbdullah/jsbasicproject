const videoContainer = document.querySelector(".video-container");
const btnContainer = document.querySelector(".button-container");
const switchBtn = document.querySelector(".switch-btn");

btnContainer.addEventListener("click", function () {
  if (!btnContainer.classList.contains("slide")) {
    btnContainer.classList.add("slide");
    videoContainer.pause();
  } else {
    btnContainer.classList.remove("slide");
    videoContainer.play();
  }
});

// pre loader section
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
