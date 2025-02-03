"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function Yes() {
  const containerRef = useRef<HTMLDivElement>(null)
  const capooGifRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const capooGif = capooGifRef.current

    if (container) {
      const handleMouseMove = (e: MouseEvent) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25
        container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
      }

      const handleMouseEnter = () => {
        container.style.transition = "none"
        if (capooGif) {
          capooGif.style.transform = "translateZ(50px)"
        }
      }

      const handleMouseLeave = () => {
        container.style.transition = "all 0.5s ease"
        container.style.transform = "rotateY(0deg) rotateX(0deg)"
        if (capooGif) {
          capooGif.style.transform = "translateZ(0px)"
        }
      }

      container.addEventListener("mousemove", handleMouseMove)
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        container.removeEventListener("mousemove", handleMouseMove)
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  useEffect(() => {
    const capooGif = capooGifRef.current

    if (capooGif) {
      const handleClick = () => {
        capooGif.style.animation = "none"
        setTimeout(() => {
          capooGif.style.animation = "bounce 2s infinite"
        }, 50)
      }

      capooGif.addEventListener("click", handleClick)

      return () => {
        capooGif.removeEventListener("click", handleClick)
      }
    }
  }, [])

  return (
    <div className="container yes-page" ref={containerRef}>
      <h1 className="header_text">Yay! Let&apos;s Make Some Memories!</h1>
      <div className="gif_container">
        <Image
          src="https://media.tenor.com/YTw87WdiaasAAAAi/tkthao219-capoo.gif"
          alt="Happy Capoo GIF"
          width={200}
          height={200}
          className="capoo-gif"
          ref={capooGifRef}
        />
      </div>
      <p className="message">
        I&apos;m so excited to spend time with you! Get ready for an amazing adventure filled with laughter, love, and
        unforgettable moments tonight. ❤️
      </p>
      <div className="heart-container">
        <div className="heart"></div>
      </div>
    </div>
  )
}

