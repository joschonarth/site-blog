import Image from 'next/image'
import Link from 'next/link'

type Author = {
  name: string
  avatar: string
}

type PostCardProps = {
  slug: string
  title: string
  description: string
  image: string
  date: string
  author: Author
}

export const PostCard = ({
  slug,
  title,
  description,
  image,
  date,
  author,
}: PostCardProps) => {
  return (
    <Link
      className="w-full max-w-2xl overflow-hidden rounded-[12px] border-[1px] border-gray-400 bg-gray-600 transition-all duration-300 hover:border-[1px] hover:border-blue-300"
      href={`/blog/${slug}`}
    >
      <div className="overflow-hidden rounded-md p-2">
        <div className="relative">
          <div className="absolute top-0 right-0 rounded-bl-[10px] bg-gray-600 px-3 py-1 backdrop-blur-sm">
            <span className="text-body-xs text-gray-300">{date}</span>
          </div>

          <Image
            alt={title}
            className="h-40 w-full rounded-t-[8px] object-cover object-center"
            height={144}
            src={image}
            width={288}
          />
        </div>

        <div className="mt-4 space-y-4 px-2">
          <h2 className="line-clamp-3 text-gray-100 text-heading-sm">
            {title}
          </h2>

          <p className="line-clamp-3 text-body-sm text-gray-300">
            {description}
          </p>
        </div>

        <div className="flex items-center gap-3 border-gray-400 border-t py-4">
          <div className="relative h-5 w-5 overflow-hidden rounded-full border-[1px] border-blue-200 md:h-6 md:w-6">
            <Image
              alt=""
              className="rounded-md object-cover"
              fill
              src={author.avatar}
            />
          </div>
          <span className="text-body-sm text-gray-300">{author.name}</span>
        </div>
      </div>
    </Link>
  )
}
