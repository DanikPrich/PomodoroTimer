import { useRef, useEffect } from 'react'

function useDocumentTitle(title, prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title)

  useEffect(() => {
    document.title = title
  }, [title])
  
  useEffect(() => {
    return () => {
      if (!prevailOnUnmount) {
        // eslint-disable-next-line
        document.title = defaultTitle.current
      }
    }
  // eslint-disable-next-line
  }, [])
}

export default useDocumentTitle