import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="border-white/10 border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between gap-8 py-8 md:flex-row">
          <Link href="/">
            <Image
              alt="Logo Site.Set"
              height={32}
              src="/logo.svg"
              width={116}
            />
          </Link>

          <nav className="itens-center flex flex-col gap-4 text-muted-foreground text-sm md:flex-row">
            <Link className="hover:text-primary" href="/termos-de-uso">
              Termos de uso
            </Link>
            <Link
              className="hover:text-primary"
              href="/politica-de-privacidade"
            >
              Política de privacidade
            </Link>
            <Link className="hover:text-primary" href="/feedback">
              Feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
