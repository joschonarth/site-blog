import { ArrowRight, Store } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const CallToActionSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-cyan-950/20 to-gray-700 py-24">
      <div className="absolute inset-0 bg-[url('/background-footer.svg')] bg-center bg-cover bg-no-repeat opacity-90" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="w-fit rounded-full bg-cyan-300 p-4">
            <Store className="text-cyan-100" />
          </div>

          <h2
            className={'text-balance font-sans text-gray-100 text-heading-xl'}
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
