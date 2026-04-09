import { ArrowRight, Store } from 'lucide-react'
import { PT_Sans_Caption } from 'next/font/google'
import Link from 'next/link'
import { Button } from '../ui/button'

const ptSansCaption = PT_Sans_Caption({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const CallToActionSection = () => {
  return (
    <section className="bg-gradient-to-b from-cyan-950/20 to-gray-700 py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="w-fit rounded-full bg-cyan-300 p-4">
            <Store className="text-cyan-100" />
          </div>

          <h2
            className={`${ptSansCaption.className} text-balance text-gray-100 text-heading-xl`}
          >
            Crie uma loja online e inicie suas vendas ainda hoje
          </h2>

          <Button asChild className="mt-6" variant="primary">
            <Link href="/criar-loja">
              Criar loja grátis
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
