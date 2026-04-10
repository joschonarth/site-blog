import { ArrowRight, Clock, Store } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const HeroSection = () => {
  return (
    <section className="relative mx-auto mt-16 flex w-full max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="grid min-h-[20rem] grid-cols-1 items-center gap-8 md:h-[36rem] md:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
          <h1 className="font-sans text-gray-100 text-heading-hg">
            Venda seus produtos como afiliado em um único lugar
          </h1>

          <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
            <div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-cyan-100" />
                <span className="text-gray-200">
                  Crie o seu site em menos de 5 minutos
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Store className="h-4 w-4 text-cyan-100" />
                <span className="text-gray-200">
                  Acompanhe e otimize seu negócio online
                </span>
              </div>
            </div>

            <div className="mt-5 flex flex-col ls:items-start items-center gap-2 text-white md:items-start">
              <Button asChild className="w-fit rounded-full">
                <Link href="/criar-loja">
                  Criar loja grátis
                  <ArrowRight />
                </Link>
              </Button>

              <p className="text-body-xs text-gray-300">
                Não precisa de cartão de crédito
              </p>
            </div>
          </div>
        </div>

        <div className="relative order-first hidden h-[20rem] items-center justify-center md:order-last md:flex md:h-full lg:flex">
          <Image
            alt="Ilustração com ícones de store, tag e sacola"
            className="h-full w-auto object-contain"
            height={400}
            src="/hero-section.svg"
            width={200}
          />
        </div>
      </div>
    </section>
  )
}
