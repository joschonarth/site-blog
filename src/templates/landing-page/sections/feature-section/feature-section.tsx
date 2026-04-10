import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const FeatureSection = () => {
  return (
    <section className="bg-gray-700 pt-8 pb-8 md:py-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-lg bg-gray-500 p-6 md:p-12">
            <span className="w-fit rounded-sm bg-blue-400 px-2 py-1 text-blue-200 text-body-tag uppercase">
              Simples
            </span>
            <h2 className="font-sans text-gray-100 text-heading-lg">
              Crie um catálogo de produtos online em poucos minutos
            </h2>
          </div>

          <div className="flex flex-col gap-4 rounded-lg bg-gray-500 p-6 md:p-12">
            <span className="w-fit rounded-sm bg-blue-400 px-2 py-1 text-blue-200 text-body-tag uppercase">
              Prático
            </span>
            <h2 className="font-sans text-gray-100 text-heading-lg">
              Venda para seu público através de uma plataforma única
            </h2>
          </div>

          <div className="col-span-full flex flex-col gap-2">
            <div className="grid grid-cols-1 gap-12 rounded-lg bg-gray-500 p-6 md:grid-cols-2 md:gap-4 md:p-12">
              <div className="flex flex-col gap-4">
                <span className="w-fit rounded-sm bg-blue-400 px-2 py-1 text-blue-200 text-body-tag uppercase">
                  Personalizável
                </span>

                <h2 className="font-sans text-gray-100 text-heading-lg">
                  Tenha uma loja online personalizada com a cara da sua marca
                </h2>

                <Button
                  asChild
                  className="mt-4 hidden w-fit rounded-full md:mt-auto md:flex"
                >
                  <Link href="/criar-loja">
                    Criar loja grátis
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
              <div className="flex w-full flex-col items-center justify-center">
                <div className="w-full max-w-md overflow-hidden">
                  <Image
                    alt="Features"
                    className="w-full object-contain"
                    height={330}
                    src="/feature-section.svg"
                    width={440}
                  />
                </div>
                <Button
                  asChild
                  className="mt-4 w-full gap-2 rounded-full md:mt-auto md:hidden"
                >
                  <Link href="/criar-loja">
                    Criar loja grátis
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
