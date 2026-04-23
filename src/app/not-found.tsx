import { FileQuestion, Search } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        <FileQuestion className="mx-auto mb-6 text-gray-100" size={64} />
      </div>

      <div className="relative mb-3 inline-block font-sans">
        <span className="inline-block -translate-x-1 -translate-y-2 -rotate-12 transform font-bold text-8xl text-white">
          4
        </span>
        <span className="inline-block font-bold text-8xl text-white">0</span>
        <span className="inline-block font-bold text-8xl text-white">4</span>
      </div>

      <p className="mb-8 text-gray-100">Página não encontrada</p>

      <div className="mt-6 flex justify-center gap-4">
        <Button asChild variant="primary">
          <Link href="/">Home</Link>
        </Button>

        <Button asChild variant="secondary">
          <Link href="/blog?q=">
            <Search size={16} />
            Pesquisar posts
          </Link>
        </Button>
      </div>
    </div>
  )
}
