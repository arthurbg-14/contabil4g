import Header from './Header'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header/>
      <main className="flex flex-col items-center justify-between p-24">
        <div className="h-[calc(100vh-5rem)] relative">
          <Image className="blur-md pt-4" alt="hero" src="/hero-home.png" fill></Image>
        </div>
      </main>
    </>
  )
}
