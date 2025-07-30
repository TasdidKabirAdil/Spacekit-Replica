import { useEffect, useRef, useState } from 'react'

export const useInViewOnce = (options = {}) => {
  const ref = useRef()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // trigger only once
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px',
        ...options
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return [ref, isVisible]
}
