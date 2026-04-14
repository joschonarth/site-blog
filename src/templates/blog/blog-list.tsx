import { useRouter } from 'next/router'
import { Search } from '@/components/search'
import { PostCard } from './components/post-card'

export function BlogList() {
  const router = useRouter()
  const query = router.query.q as string

  const pageTitle = query
    ? `Resultados de busca para "${query}"`
    : 'Dicas e estratégias para impulsionar seu negócio'

  return (
    <div className="flex h-full flex-grow flex-col py-24">
      <header>
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between space-y-6 px-4 sm:px-6 md:flex-row md:items-end lg:items-end lg:px-8">
          <div className="flex flex-col gap-4 md:px-0">
            <span className="w-fit rounded-md bg-cyan-300 px-4 py-2 text-center text-body-tag text-cyan-100 md:text-left">
              BLOG
            </span>

            <h1 className="max-w-2xl text-balance text-start text-gray-100 text-heading-lg md:text-left md:text-heading-xl">
              {pageTitle}
            </h1>
          </div>

          <Search />
        </div>
      </header>

      <PostCard
        author={{
          avatar: '/customer-01.png',
          name: 'Aspen Dokidis',
        }}
        date="20/12/2024"
        description="Se você está buscando uma maneira simples e eficaz de vender seus produtos online..."
        image="/assets/primeiro-post.png"
        slug="transformando"
        title="Transformando seu negócio em uma loja virtual"
      />
    </div>
  )
}
