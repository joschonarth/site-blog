'use client'

import type { Post } from 'contentlayer/generated'
import Image from 'next/image'
import Link from 'next/link'
import { Avatar } from '@/components/avatar'
import { Markdown } from '@/components/markdown'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { useShare } from '@/hooks'

export type PostPageProps = {
  post: Post
}

export const PostPage = ({ post }: PostPageProps) => {
  const postUrl = `https://site.set/blog/${post.slug}`

  const { shareButtons } = useShare({
    url: postUrl,
    title: post?.title,
    text: post?.description,
  })

  if (!post) {
    return null
  }

  const publishedDate = new Date(post?.date).toLocaleDateString('pt-BR')

  return (
    <main className="py-20 text-gray-100">
      <div className="container space-y-8 px-4 md:px-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild className="text-action-sm">
                <Link href="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span className="text-action-sm text-blue-200">
                {post?.title}
              </span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px] lg:gap-12">
          <article className="overflow-hidden rounded-lg border-[1px] border-gray-400 bg-gray-600">
            <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
              <Image
                alt={post?.title ?? ''}
                className="object-cover"
                fill
                src={post?.image ?? ''}
              />
            </figure>

            <header className="mt-8 p-4 pb-0 md:mt-12 md:p-6 lg:p-12">
              <h1 className="mb-8 text-balance text-heading-lg md:text-heading-xl lg:text-heading-xl">
                {post?.title}
              </h1>

              <Avatar.Container>
                <Avatar.Image
                  alt={post?.title}
                  size="sm"
                  src={post.author.avatar.trim()}
                />
                <Avatar.Content>
                  <Avatar.Title>{post?.author.name}</Avatar.Title>
                  <Avatar.Description>
                    Publicado em {''}
                    <time dateTime={post.date}>{publishedDate}</time>
                  </Avatar.Description>
                </Avatar.Content>
              </Avatar.Container>
            </header>

            <div className="prose prose-invert mt-12 max-w-none px-4 md:px-6 lg:px-12">
              <Markdown content={post.body.raw} />
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-lg bg-gray-700">
              <h2 className="mb-4 hidden text-gray-100 text-heading-xs md:block">
                Compartilhar
              </h2>

              <div className="flex justify-between gap-2 md:flex-col">
                {shareButtons.map((provider) => (
                  <Button
                    className="w-fit justify-start gap-2 md:w-full"
                    key={provider.provider}
                    onClick={() => provider.action()}
                    variant="outline"
                  >
                    {provider.icon}
                    <span className="hidden md:block">{provider.name}</span>
                  </Button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
