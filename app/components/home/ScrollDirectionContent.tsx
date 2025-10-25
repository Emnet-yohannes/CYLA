"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

interface ScrollDirectionContentProps {
  children: React.ReactNode
  className?: string
}

export function ScrollDirectionContent({ children, className = "" }: ScrollDirectionContentProps) {
  const [offset, setOffset] = useState(0)
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const lastScrollYRef = useRef(0)
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDelta = currentScrollY - lastScrollYRef.current

      // Determine scroll direction
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

  // Animate the offset based on scroll direction
  useEffect(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }

    const targetOffset = isScrollingDown ? 100 : -100
    let currentOffset = offset

    const animate = () => {
      currentOffset += (targetOffset - currentOffset) * 0.1

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
  }, [isScrollingDown, offset])

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
