'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

export default function Giscus() {
  const ref = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()
  const theme = resolvedTheme === 'dark' ? 'dark' : 'light'

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return

    const scriptElem = document.createElement('script')
    scriptElem.src = 'https://giscus.app/client.js'
    scriptElem.async = true
    scriptElem.crossOrigin = 'anonymous'

    scriptElem.setAttribute('data-repo', 'WE-ARE-RACCOONS/RACCOONS')
    scriptElem.setAttribute('data-repo-id', 'R_kgDONOeDQg')
    scriptElem.setAttribute('data-mapping', 'pathname')
    scriptElem.setAttribute('data-strict', '0')
    scriptElem.setAttribute('data-reactions-enabled', '1')
    scriptElem.setAttribute('data-emit-metadata', '0')
    scriptElem.setAttribute('data-input-position', 'bottom')
    scriptElem.setAttribute('data-theme', theme)
    scriptElem.setAttribute('data-lang', 'ko')
    scriptElem.setAttribute('data-category-id', 'DIC_kwDONOeDQs4Ck9xb')
    scriptElem.setAttribute('data-category', 'General')
    ref.current.style.width = '100%'

    ref.current.appendChild(scriptElem)
  }, [theme])

  return (
    <section
      ref={ref}
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
      }}
    />
  )
}
