'use client'

import Giscus from './\bGitcus'

export default function Comments({ slug }: { slug: string }) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
      }}
    >
      <Giscus />
    </div>
  )
}
