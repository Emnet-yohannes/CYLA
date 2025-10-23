"use client"

import { useState, useRef, useEffect } from "react"

interface TextScrambleProps {
  text: string
  className?: string
  scrambleDuration?: number
  revealDuration?: number
  hoveringColor?:string
}

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"

export function TextScramble({
  text,
  className = "",
  scrambleDuration = 0.5,
  revealDuration = 0.8,
  hoveringColor = "black"
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isHovering, setIsHovering] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const getRandomChar = () => CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]

  const scrambleText = () => {
    let iteration = 0
    const maxIterations = Math.ceil(scrambleDuration * 60) // 60fps

    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) return char
            return getRandomChar()
          })
          .join("")
      )

      iteration += 1 / 3

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setDisplayText(text)
      }
    }, 30)

    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setDisplayText(text)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }, (scrambleDuration + revealDuration) * 1000)
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
    scrambleText()
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setDisplayText(text)
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }

  // Always update displayText to match current text (for real-time updates)
  useEffect(() => {
    setDisplayText(text)
  }, [text])

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`inline-block cursor-pointer transition-colors hover:text-[#000] ${className}`}
      style={{
        color: isHovering ? hoveringColor : "#FF7A00",
      }}
    >
      {displayText}
    </span>
  )
}
