import { useState, useEffect } from 'react'

function useDetectMobile () {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
    }
    if (typeof window !== 'undefined') {
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])
  let mobile = false
  if (width < 640) mobile = true
  return mobile
}

export default useDetectMobile
