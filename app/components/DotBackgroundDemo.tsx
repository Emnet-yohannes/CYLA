"use client"
import { useEffect, useRef } from "react"
import Home from "./Home"

export default function DotBackgroundDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dotsRef = useRef<Array<{ x: number; ox: number; y: number; oy: number; vx: number; vy: number }>>([])
  const mouseRef = useRef({ x: 0, y: 0, active: false })
  const lastFrameRef = useRef(0)
  const contentHeightRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    const updateCanvasSize = () => {
      const scrollHeight = document.documentElement.scrollHeight
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      contentHeightRef.current = scrollHeight
      initializeDots()
    }

    const initializeDots = () => {
      dotsRef.current = []
      const dotSpacing = window.innerWidth > 1600 ? 15 : window.innerWidth > 1024 ? 12 : 10
      const cols = Math.ceil(window.innerWidth / dotSpacing)
      const rows = Math.ceil(contentHeightRef.current / dotSpacing)
      const totalDots = cols * rows

      for (let i = 0; i < totalDots; i++) {
        const x = (i % cols) * dotSpacing + dotSpacing / 2
        const y = Math.floor(i / cols) * dotSpacing + dotSpacing / 2
        dotsRef.current.push({ x, ox: x, y, oy: y, vx: 0, vy: 0 })
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY + window.scrollY, active: true }
    }

    const animate = (now: number) => {
      // Throttle frame rate (~60fps)
      if (now - lastFrameRef.current < 16) {
        requestAnimationFrame(animate)
        return
      }
      lastFrameRef.current = now

      const dots = dotsRef.current
      const mouse = mouseRef.current
      const repulsionRadius = 25000 // Reduced for lighter math
      const friction = 0.75
      const returnForce = 0.15
      const scrollY = window.scrollY

      ctx.fillStyle = "#000"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "rgba(230, 92, 0, 1)"

      const mX = mouse.x
      const mY = mouse.y

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i]
        const dx = mX - dot.x
        const dy = mY - dot.y
        const distSq = dx * dx + dy * dy

        // Repulsion zone (smaller range = faster)
        if (distSq < repulsionRadius && distSq > 0) {
          const force = (-1200 / distSq) * 0.9
          const angle = Math.atan2(dy, dx)
          dot.vx += force * Math.cos(angle)
          dot.vy += force * Math.sin(angle)
        }

        dot.vx *= friction
        dot.vy *= friction
        dot.x += dot.vx + (dot.ox - dot.x) * returnForce
        dot.y += dot.vy + (dot.oy - dot.y) * returnForce

        const dotScreenY = dot.y - scrollY
        if (dotScreenY > -5 && dotScreenY < window.innerHeight + 5) {
          ctx.beginPath()
          ctx.arc(dot.x, dotScreenY, 0.6, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      requestAnimationFrame(animate)
    }

    updateCanvasSize()
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", updateCanvasSize)
    window.addEventListener("scroll", () => {
      contentHeightRef.current = document.documentElement.scrollHeight
    })
    requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", updateCanvasSize)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative w-full bg-black overflow-x-hidden">
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col justify-center px-4">
          <Home />
        </div>
      </div>
    </div>
  )
}
