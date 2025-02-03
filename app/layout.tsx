import "./globals.css"
import type React from "react"

export const metadata = {
  title: "A Special Invitation Just for You",
  description: "Will you go on an adventure with me?",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <div className="fireworks">
          <div className="firework"></div>
          <div className="firework"></div>
          <div className="firework"></div>
        </div>
      </body>
    </html>
  )
}

