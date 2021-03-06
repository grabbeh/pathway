import { useState, useEffect } from 'react'

function useDetectWidth () {
  const [width, setWidth] = useState(null)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth)
      const handleResize = () => setWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])
  let isMobile = false
  let isDesktop = false
  if (width < 640) isMobile = true
  if (width > 1024) isDesktop = true
  return { isMobile, isDesktop }
}

export default useDetectWidth
