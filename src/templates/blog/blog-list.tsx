import { allPosts } from 'contentlayer/generated'
import { Inbox } from 'lucide-react'
import { useRouter } from 'next/router'
import { Search } from '@/components/search'
import { PostCard } from './components/post-card'
import { PostGridCard } from './components/post-grid-card'

export function BlogList() {
  const router = useRouter()
  const query = router.query.q as string

  const pageTitle = query
    ? `Resultados de busca para "${query}"`
    : 'Dicas e estratégias para impulsionar seu negócio'

  const posts = query
    ? allPosts.filter((post) =>
        post.title.toLowerCase()?.includes(query.toLowerCase())
      )
    : allPosts

  const hasPosts = posts.length > 0

  return (
    <div className="flex h-full flex-grow flex-col py-24">
      <header className="pb-14">
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

      {hasPosts && (
        <PostGridCard>
          {posts.map((post) => (
            <PostCard
              author={{
                avatar: post.author.avatar,
                name: post.author.name,
              }}
              date={new Date(post.date).toLocaleDateString('pt-BR')}
              description={post.description}
              image={post.image}
              key={post._id}
              slug={post.slug}
              title={post.title}
            />
          ))}
        </PostGridCard>
      )}

      {!hasPosts && (
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-8 rounded-lg border-2 border-gray-300 border-dashed p-8 md:p-12">
            <Inbox className="h-12 w-12 text-cyan-100" />

            <p className="text-center text-gray-100">Nenhum post encontrado.</p>
          </div>
        </div>
      )}
    </div>
  )
}
