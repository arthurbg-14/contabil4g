import Image from 'next/image'
import Button from './Button'

export default function Home() {
  return (
    <>
      <div className="flex items-center w-full h-[calc(100vh-7rem)] relative">
        <Image className="blur-md" alt="hero" src="/hero-home.png" fill/>
        <div className="flex flex-col bg-white w-[32rem] h-fit absolute right-[10%] p-4 shadow-lg font-semibold">
          <h1 className="font-extrabold text-3xl mb-4">CONTABILIDADE PROFISSIONAL & DE CONFIANÇA</h1>
          <span className="mb-12">Simplificando suas finanças para o crescimento do seu negócio. Conte com a 4G Contabilidade para soluções contábeis.</span>
          <Button>JUNTE-SE</Button>
        </div>
      </div>
    </>
  )
}
