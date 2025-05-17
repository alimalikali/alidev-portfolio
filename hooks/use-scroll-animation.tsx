"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

type ScrollDirection = "up" | "down" | null

export function useScrollAnimation(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: threshold })
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null)
  const [prevScrollY, setPrevScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > prevScrollY) {
        setScrollDirection("down")
      } else if (currentScrollY < prevScrollY) {
        setScrollDirection("up")
      }

      setPrevScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [prevScrollY])

  return { ref, isInView, scrollDirection }
}
