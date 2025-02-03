document.addEventListener("DOMContentLoaded", () => {
  const yesButton = document.getElementById("yesButton")
  yesButton.addEventListener("mouseover", () => {
    yesButton.style.transform = "scale(1.1)"
  })
  yesButton.addEventListener("mouseout", () => {
    yesButton.style.transform = "scale(1)"
  })

  const capooGif = document.querySelector(".capoo-gif")
  capooGif.addEventListener("click", () => {
    capooGif.style.transform = "scale(1.2) rotate(360deg)"
    setTimeout(() => {
      capooGif.style.transform = "scale(1) rotate(0deg)"
    }, 500)
  })
})

