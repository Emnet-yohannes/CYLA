// "use client";
// import { useEffect, useRef } from "react";

// export default function DotBackground() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const dotsRef = useRef<
//     Array<{
//       x: number;
//       ox: number;
//       y: number;
//       oy: number;
//       vx: number;
//       vy: number;
//     }>
//   >([]);
//   const mouseRef = useRef({ x: 0, y: 0, active: false });
//   const timeRef = useRef(0);
//   const contentHeightRef = useRef(0);

//   // Use a lower dot count for better performance, and increase spacing
//   const DOT_SPACING = 12;
//   // Increase repulsion "box" (radius is squared in code, so big difference)
//   const REPULSION_RADIUS = 100000;

//   // Reduce how often mouse is re-activated (performance improvement)
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const container = containerRef.current;
//     if (!canvas || !container) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     // Avoid resizing and reinitializing on every scroll
//     // let lastKnownScrollHeight = 0;

//     const updateCanvasSize = () => {
//       const scrollHeight = document.documentElement.scrollHeight;
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       contentHeightRef.current = scrollHeight;
//       initializeDots();
//     };

//     const initializeDots = () => {
//       dotsRef.current = [];
//       const cols = Math.ceil(window.innerWidth / DOT_SPACING);
//       const rows = Math.ceil(contentHeightRef.current / DOT_SPACING);
//       const totalDots = cols * rows;

//       for (let i = 0; i < totalDots; i++) {
//         const dot = {
//           x: (i % cols) * DOT_SPACING + DOT_SPACING * 0.5,
//           ox: (i % cols) * DOT_SPACING + DOT_SPACING * 0.5,
//           y: Math.floor(i / cols) * DOT_SPACING + DOT_SPACING * 0.5,
//           oy: Math.floor(i / cols) * DOT_SPACING + DOT_SPACING * 0.5,
//           vx: 0,
//           vy: 0,
//         };
//         dotsRef.current.push(dot);
//       }
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//       mouseRef.current.x = e.clientX;
//       mouseRef.current.y = e.clientY + window.scrollY;
//       mouseRef.current.active = true;
//     };

//     const animate = () => {
//       const dots = dotsRef.current;
//       const mouse = mouseRef.current;
//       const friction = 0.5;
//       const returnForce = 0.35;
//       const scrollY = window.scrollY;

//       // Only recompute mouse attractor if inactive for a while (175ms)
//       if (!mouse.active) {
//         timeRef.current = Date.now() * 0.01;
//         const h = timeRef.current;

//         // Demo/mouse attractor follows larger circle
//         mouse.x =
//           window.innerWidth * 0.5 +
//           Math.cos(2.15 * h) * Math.cos(1.03 * h) * window.innerWidth * 0.48;
//         mouse.y =
//           window.innerHeight * 0.5 +
//           Math.sin(2.98 * h) *
//             Math.tan(Math.sin(0.8 * h)) *
//             window.innerHeight *
//             0.48 +
//           scrollY;
//       }

//       // Animate physics and draw every frame
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       for (let i = 0; i < dots.length; i++) {
//         const dot = dots[i];
//         const dx = mouse.x - dot.x;
//         const dy = mouse.y - dot.y;
//         const distSq = dx * dx + dy * dy;

//         // Larger repulsion "box", bigger hover effect, and improved distance force
//         if (distSq < REPULSION_RADIUS && distSq > 0) {
//           const angle = Math.atan2(dy, dx);
//           // The force is scaled based on new radius; you can adjust multiplier for effect
//           const force = (-75000 / distSq) * 1.2;
//           dot.vx += force * Math.cos(angle);
//           dot.vy += force * Math.sin(angle);
//         }

//         dot.vx *= friction;
//         dot.vy *= friction;
//         dot.x += dot.vx;
//         dot.y += dot.vy;
//         dot.x += (dot.ox - dot.x) * returnForce;
//         dot.y += (dot.oy - dot.y) * returnForce;

//         // Only draw if visible (performance improvement)
//         const dotScreenY = dot.y - scrollY;
//         if (dotScreenY < -70 || dotScreenY > window.innerHeight + 70) continue;

//         ctx.fillStyle = "rgba(230, 92, 0, 0.5)";
//         ctx.beginPath();
//         ctx.arc(dot.x, dotScreenY, 0.6, 0, Math.PI * 2); // slightly bigger dot
//         ctx.fill();
//       }

//       requestAnimationFrame(animate);
//     };

//     updateCanvasSize();
//     window.addEventListener("mousemove", handleMouseMove, { passive: true });
//     window.addEventListener("resize", updateCanvasSize);
//     // window.addEventListener("scroll", () => {
//     //   const newScrollHeight = document.documentElement.scrollHeight;
//     //   // Only update dots if height changes (not on every scroll event!)
//     //   if (newScrollHeight !== lastKnownScrollHeight) {
//     //     contentHeightRef.current = newScrollHeight;
//     //     lastKnownScrollHeight = newScrollHeight;
//     //     initializeDots();
//     //   }
//     // });

//     animate();

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("resize", updateCanvasSize);
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="fixed z-0 start-0 top-0 min-h-screen h-screen w-full overflow-hidden border-8 border-white bg-black"
//     >
//       <div className="min-h-screen w-full flex items-center justify-center border-8 border-white">
//         <canvas
//           ref={canvasRef}
//           className="absolute start-0 top-0 min-h-screen h-screen w-full overflow-hidden pointer-events-none z-50 border-8 border-white"
//         />
//       </div>
//     </div>
//   );
// }


"use client"
import { useEffect, useRef } from "react"

export default function DotBackgroundDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const dots = useRef<Array<{ x: number; y: number; originalX: number; originalY: number; vx: number; vy: number }>>([])

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
      initializeDots()
    }

    // Initialize dots in a grid pattern
    const initializeDots = () => {
      dots.current = []
      const dotSpacing = 15
      const dotRadius = 0.5

      for (let x = 0; x < canvas.width; x += dotSpacing) {
        for (let y = 0; y < canvas.height; y += dotSpacing) {
          dots.current.push({
            x,
            y,
            originalX: x,
            originalY: y,
            vx: 0,
            vy: 0,
          })
        }
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const repulsionRadius = 100
      const repulsionStrength = 10
      const friction = 0.65
      const returnSpeed = 0.05

      dots.current.forEach((dot) => {
        // Calculate distance from mouse
        const dx = dot.x - mousePos.current.x
        const dy = dot.y - mousePos.current.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Apply repulsion if within radius
        if (distance < repulsionRadius && distance > 0) {
          const angle = Math.atan2(dy, dx)
          const force = (1 - distance / repulsionRadius) * repulsionStrength
          dot.vx += Math.cos(angle) * force
          dot.vy += Math.sin(angle) * force
        }

        // Apply friction and return to original position
        dot.vx *= friction
        dot.vy *= friction
        dot.x += dot.vx
        dot.y += dot.vy

        // Smoothly return to original position
        dot.x += (dot.originalX - dot.x) * returnSpeed
        dot.y += (dot.originalY - dot.y) * returnSpeed

        ctx.fillStyle = "rgba(230, 92, 0, 0.7)";
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, 0.5, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    updateCanvasSize()
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", updateCanvasSize)
    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", updateCanvasSize)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed z-0 start-0 top-0 min-h-screen h-screen w-full overflow-hidden border-8 border-white bg-black"
    >
      <div className="min-h-screen w-full flex items-center justify-center border-8 border-white">
        <canvas
          ref={canvasRef}
          className="absolute start-0 top-0 min-h-screen h-screen w-full overflow-hidden pointer-events-none z-50 border-8 border-white"
        />
      </div>
    </div>
  )
}
