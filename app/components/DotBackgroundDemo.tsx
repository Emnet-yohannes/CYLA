"use client"
import { useEffect, useRef } from "react"
import Home from "./Home"

export default function DotBackgroundDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dotsRef = useRef<Array<{ x: number; ox: number; y: number; oy: number; vx: number; vy: number }>>([])
  const mouseRef = useRef({ x: 0, y: 0, active: false })
  const timeRef = useRef(0)
  const animationToggleRef = useRef(true)
  const contentHeightRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
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
      const dotSpacing = 10
      const cols = Math.ceil(window.innerWidth / dotSpacing)
      const rows = Math.ceil(contentHeightRef.current / dotSpacing)
      const totalDots = cols * rows

      for (let i = 0; i < totalDots; i++) {
        const dot = {
          x: (i % cols) * dotSpacing + 5,
          ox: (i % cols) * dotSpacing + 5,
          y: Math.floor(i / cols) * dotSpacing + 5,
          oy: Math.floor(i / cols) * dotSpacing + 5,
          vx: 0,
          vy: 0,
        }
        dotsRef.current.push(dot)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY + window.scrollY
      mouseRef.current.active = true
    }

    const animate = () => {
      const dots = dotsRef.current
      const mouse = mouseRef.current
      const repulsionRadius = 100000
      const friction = 0.5
      const returnForce = 0.2
      const scrollY = window.scrollY

      animationToggleRef.current = !animationToggleRef.current

      if (animationToggleRef.current) {
        if (!mouse.active) {
          timeRef.current = Date.now() * 0.001
          const h = timeRef.current
          mouse.x = window.innerWidth * 0.5 + Math.cos(2.1 * h) * Math.cos(0.9 * h) * window.innerWidth * 0.45
          mouse.y =
            window.innerHeight * 0.5 +
            Math.sin(3.2 * h) * Math.tan(Math.sin(0.8 * h)) * window.innerHeight * 0.45 +
            scrollY
        }

        for (let i = 0; i < dots.length; i++) {
          const dot = dots[i]
          const dx = mouse.x - dot.x
          const dy = mouse.y - dot.y
          const distSq = dx * dx + dy * dy

          if (distSq < repulsionRadius && distSq > 0) {
            const angle = Math.atan2(dy, dx)
            const force = (-40000 / distSq) * 0.1
            dot.vx += force * Math.cos(angle)
            dot.vy += force * Math.sin(angle)
          }

          dot.vx *= friction
          dot.vy *= friction
          dot.x += dot.vx
          dot.y += dot.vy
          dot.x += (dot.ox - dot.x) * returnForce
          dot.y += (dot.oy - dot.y) * returnForce
        }
      } else {
        ctx.fillStyle = "rgb(0, 0, 0)"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        for (let i = 0; i < dots.length; i++) {
          const dot = dots[i]
          const dotScreenY = dot.y - scrollY

          if (dotScreenY < -50 || dotScreenY > window.innerHeight + 50) continue

          ctx.fillStyle = "rgba(230, 92, 0, 1)"
          ctx.beginPath()
          ctx.arc(dot.x, dotScreenY, 0.3, 0, Math.PI * 2)
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
    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", updateCanvasSize)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative w-full bg-black">
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

      {/* Foreground content that scrolls over the background */}
      <div className="relative z-10">
        <header className="min-h-screen flex flex-col items-center justify-center px-4">
          {/* <h1 className="text-6xl font-bold text-white mb-4 text-center">Welcome</h1>
          <p className="text-xl text-gray-300 max-w-2xl text-center">
            Scroll down to explore the interactive dot background that responds to your mouse movement
          </p> */}
          <Home />
        </header>

       
      </div>
    </div>
  )
}
