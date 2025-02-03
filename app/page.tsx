"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const [noButtonStyle, setNoButtonStyle] = useState({})
  const [noButtonText, setNoButtonText] = useState("I'm Shy...")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const yesButton = document.getElementById("yesButton")
    const capooGif = document.querySelector(".capoo-gif")

    if (yesButton) {
      yesButton.addEventListener("mouseover", () => {
        yesButton.style.transform = "scale(1.1)"
      })
      yesButton.addEventListener("mouseout", () => {
        yesButton.style.transform = "scale(1)"
      })
    }

    if (capooGif) {
      capooGif.addEventListener("click", () => {
        capooGif.style.transform = "scale(1.2) rotate(360deg)"
        setTimeout(() => {
          capooGif.style.transform = "scale(1) rotate(0deg)"
        }, 500)
      })
    }
  }, [])

  const moveButton = () => {
    if (isMobile) {
      // Shake animation for mobile
      setNoButtonStyle({ animation: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both" })
      setTimeout(() => setNoButtonStyle({}), 820)
    } else {
      const maxX = typeof window !== "undefined" ? window.innerWidth - 100 : 0
      const maxY = typeof window !== "undefined" ? window.innerHeight - 40 : 0

      const newX = Math.random() * maxX
      const newY = Math.random() * maxY

      setNoButtonStyle({ position: "fixed", left: `${newX}px`, top: `${newY}px` })
    }
    setNoButtonText(
      ["Really?", "Are you sure?", "Think again!", "Last chance!", "Pretty please?"][Math.floor(Math.random() * 5)],
    )
  }

  return (
    <div className="container">
      <div className="heart-container">
        <div className="heart"></div>
      </div>
      <h1 className="header_text">
        Hey Sweetie,
        <br />
        Wanna Go On An Adventure Hanoi With Me tonight?
      </h1>
      <div className="gif_container">
        <Image
          src="https://media.tenor.com/efbi1EpFlVUAAAAi/bugcat-capoo.gif"
          alt="Cute Capoo GIF"
          width={200}
          height={200}
          className="capoo-gif"
        />
      </div>
      <div className={`buttons ${isMobile ? "mobile" : ""}`}>
        <Link href="/yes" className="btn" id="yesButton">
          Absolutely!
        </Link>
        <button className="btn" id="noButton" style={noButtonStyle} onMouseOver={moveButton} onClick={moveButton}>
          {noButtonText}
        </button>
      </div>
      <div className="flowers">
        <div className="flower flower1"></div>
        <div className="flower flower2"></div>
        <div className="flower flower3"></div>
      </div>
    </div>
  )
}

