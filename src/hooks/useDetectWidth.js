import { useState, useEffect } from 'react'

function useDetectWidth () {
  const [width, setWidth] = useState()
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  })
  let isMobile = false
  let isWideDesktop = false
  if (width < 640) isMobile = true
  if (width > 1024) isWideDesktop = true
  return { isMobile, isWideDesktop }
}

export default useDetectWidth
