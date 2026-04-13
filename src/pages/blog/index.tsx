export default function BlogPage() {
  return (
    <div className="flex h-full flex-grow flex-col py-24">
      <header className="">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between space-y-6 px-4 sm:px-6 md:flex-row md:items-end lg:items-end lg:px-8">
          <div className="flex flex-col gap-4 md:px-0">
            <span className="w-fit rounded-md bg-cyan-300 px-4 py-2 text-center text-body-tag text-cyan-100 md:text-left">
              BLOG
            </span>

            <h1 className="max-w-2xl text-balance text-start text-gray-100 text-heading-lg md:text-left md:text-heading-xl">
              Dicas e estratégias para impulsionar seu negócio
            </h1>
          </div>
        </div>
      </header>
    </div>
  )
}
