'use client'

import dynamic from 'next/dynamic'
const DynamicGiscus = dynamic(() => import('@giscus/react'))

export default function Comments() {
  return (
    <DynamicGiscus
      repo="WE-ARE-RACCOONS/RACCOONS"
      repoId="R_kgDONOeDQg"
      mapping="pathname"
      lang="ko"
      category="General"
    />
  )
}
