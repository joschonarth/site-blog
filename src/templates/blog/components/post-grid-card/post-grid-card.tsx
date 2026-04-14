type PostGridCardProps = {
  children: React.ReactNode
}

export const PostGridCard = ({ children }: PostGridCardProps) => {
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
      {children}
    </div>
  )
}
