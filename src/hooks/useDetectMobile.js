import { useState, useEffect } from 'react'

function useDetectMobile () {
  if (typeof window !== 'undefined') {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [])

    let mobile = false
    if (width < 640) mobile = true
    return mobile
  }
}

export default useDetectMobile
