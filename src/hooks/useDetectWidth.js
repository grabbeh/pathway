import { useState, useEffect } from 'react'

function useDetectWidth () {
  if (typeof window !== 'undefined') {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [])
    let isMobile = false
    let isWideDesktop = false
    if (width < 640) isMobile = true
    if (width > 1400) isWideDesktop = true
    return { isMobile, isWideDesktop }
  }
  else {
    return {
      isMobile: false,
      isWideDesktop: false
    }
  }
}

export default useDetectWidth
