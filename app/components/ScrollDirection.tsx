"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"

interface ScrollDirectionContentProps {
  children: React.ReactNode
  className?: string
  reverse?: boolean // new prop to reverse animation
}

export function ScrollDirectionContent({
  children,
  className = "",
  reverse = false,
}: ScrollDirectionContentProps) {
  const [offset, setOffset] = useState(0)
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const lastScrollYRef = useRef(0)
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDelta = currentScrollY - lastScrollYRef.current

      if (scrollDelta > 0) {
        setIsScrollingDown(true)
      } else if (scrollDelta < 0) {
        setIsScrollingDown(false)
      }

      lastScrollYRef.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }

    // Set targetOffset depending on scroll direction and reverse prop
    const normalOffset = isScrollingDown ? 100 : -10
    const targetOffset = reverse ? -normalOffset : normalOffset
    let currentOffset = offset

    const animate = () => {
      currentOffset += (targetOffset - currentOffset) * 0.5

      if (Math.abs(targetOffset - currentOffset) > 0.5) {
        setOffset(currentOffset)
        animationFrameRef.current = requestAnimationFrame(animate)
      } else {
        setOffset(targetOffset)
      }
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isScrollingDown, offset, reverse])

  return (
    <div
      className={`transition-transform duration-300 ${className}`}
      style={{
        transform: `translateX(${offset}px)`,
      }}
    >
      {children}
    </div>
  )
}
