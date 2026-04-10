import Link from 'next/link'
import { Logo } from '@/components/logo'

export const Footer = () => {
  return (
    <footer className="bg-gray-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between gap-8 py-8 md:flex-row">
          <Logo />

          <nav className="itens-center flex flex-col gap-4 text-blue-100 text-sm md:flex-row">
            <Link className="hover:text-blue-200" href="/termos-de-uso">
              Termos de uso
            </Link>
            <Link
              className="hover:text-primary"
              href="/politica-de-privacidade"
            >
              Política de privacidade
            </Link>
            <Link className="hover:text-blue-200" href="/feedback">
              Feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
