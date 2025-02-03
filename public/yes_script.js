document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container")
  const capooGif = document.querySelector(".capoo-gif")

  container.addEventListener("mousemove", (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25
    container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
  })

  container.addEventListener("mouseenter", () => {
    container.style.transition = "none"
    if (capooGif) {
      capooGif.style.transform = "translateZ(50px)"
    }
  })

  container.addEventListener("mouseleave", () => {
    container.style.transition = "all 0.5s ease"
    container.style.transform = "rotateY(0deg) rotateX(0deg)"
    if (capooGif) {
      capooGif.style.transform = "translateZ(0px)"
    }
  })

  if (capooGif) {
    capooGif.addEventListener("click", () => {
      capooGif.style.animation = "none"
      setTimeout(() => {
        capooGif.style.animation = "bounce 2s infinite"
      }, 50)
    })
  }
})

