import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/" title="Página inicial">
      <Image alt="Logo Site.Set" height={32} src="/logo.svg" width={116} />
    </Link>
  )
}
