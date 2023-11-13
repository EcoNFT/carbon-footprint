'use client'

import { ConnectKitButton } from 'connectkit'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl">Welcome to EcoNFT</h1>
      <ConnectKitButton />
    </section>
  )
}
