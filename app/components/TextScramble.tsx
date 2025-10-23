"use client"

import React, {
  useState,
  useRef,
  useEffect,
  cloneElement,
  isValidElement,
} from "react"

interface TextScrambleProps {
  children: React.ReactNode
  className?: string
  scrambleDuration?: number
  revealDuration?: number
  hoveringColor?: string
}

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"

export function TextScramble({
  children,
  className = "",
  scrambleDuration = 0.5,
  revealDuration = 0.8,
  hoveringColor = "black",
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState("")
  const [originalText, setOriginalText] = useState("")
  const [isHovering, setIsHovering] = useState(false)
  const [textWidth, setTextWidth] = useState<number | null>(null)
  const measureRef = useRef<HTMLSpanElement | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const getRandomChar = () => CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]

  const extractText = (node: React.ReactNode): string => {
    if (typeof node === "string") return node
    if (Array.isArray(node)) return node.map(extractText).join("")
    if (isValidElement(node))
      return extractText(
        (node as React.ReactElement<{ children?: React.ReactNode }>).props.children
      )
    return ""
  }

  const scrambleText = (text: string) => {
    let iteration = 0
    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      const scrambled = text
        .split("")
        .map((char, index) =>
          index < iteration ? char : getRandomChar()
        )
        .join("")

      setDisplayText(scrambled.slice(0, text.length)) // ✅ always same length
      iteration += 1 / 3

      if (iteration >= text.length) {
        clearInterval(intervalRef.current!)
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
    scrambleText(originalText)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setDisplayText(originalText)
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }

  useEffect(() => {
    const text = extractText(children)
    setOriginalText(text)
    setDisplayText(text)
  }, [children])

  useEffect(() => {
    // measure text width (once) to keep scrambling same width
    if (measureRef.current) {
      setTextWidth(measureRef.current.offsetWidth)
    }
  }, [originalText])

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const replaceTextNodes = (node: React.ReactNode): React.ReactNode => {
    if (typeof node === "string") {
      return (
        <span
          className={`transition-colors duration-300 inline-block font-nb-architekt ${className}`}
          style={{
            color: isHovering ? hoveringColor : "#FF7A00",
            width: textWidth ? `${textWidth}px` : "auto", // ✅ ensures equal character width
            whiteSpace: "pre", // ✅ preserves spacing
            display: "inline-block",
            textAlign: "left",
          }}
        >
          {displayText}
        </span>
      )
    }
    if (Array.isArray(node)) return node.map(replaceTextNodes)
    if (isValidElement(node))
      return cloneElement(node, {
        ...(node.props as any),
        children: replaceTextNodes((node.props as any).children),
      })
    return node
  }

  const wrapped = replaceTextNodes(children)

  return (
    <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {wrapped}

      {/* hidden span for measuring text width */}
      <span
        ref={measureRef}
        className="invisible absolute whitespace-pre font-nb-architekt"
        // style={{ fontFamily: "monospace", pointerEvents: "none" }}
      >
        {originalText}
      </span>
    </span>
  )
}
