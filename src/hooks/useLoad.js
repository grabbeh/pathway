import { useState, useEffect } from 'react'

function useLoad () {
  const [load, setLoad] = useState(null)
  useEffect(() => {
    setLoad(true)
  }, [])
  return load
}

export default useLoad
