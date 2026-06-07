import { useEffect, useRef } from 'react'

export function useEscapeKey(fnCallback) {
  const cRef = useRef(fnCallback)
  cRef.current = fnCallback

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') cRef.current()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])
}
