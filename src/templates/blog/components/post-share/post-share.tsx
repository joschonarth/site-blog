'use client'

import { Button } from '@/components/ui/button'
import { useShare } from '@/hooks'

type PostShareProps = {
  url: string
  title: string
  description: string
}

export const PostShare = ({ url, title, description }: PostShareProps) => {
  const { shareButtons } = useShare({
    url,
    title,
    text: description,
  })

  return (
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
  )
}
