export const ModuleSkeleton = () =>
  [1, 2].map((index) => (
    <div key={index} className="group">
      <div className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="size-10 rounded-full bg-zinc-950 animate-pulse" />

        <div className="flex flex-col gap-1 text-left">
          <div className="h-4 w-32 bg-zinc-700 rounded animate-pulse" />
          <div className="h-3 w-16 bg-zinc-700 rounded animate-pulse" />
        </div>

        <div className="size-5 ml-auto bg-zinc-700 rounded animate-pulse" />
      </div>

      <nav className="relative flex flex-col gap-4 p-6">
        {[1, 2, 3].map((index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="size-4 bg-zinc-700 rounded animate-pulse" />
            <div className="h-4 w-48 bg-zinc-700 rounded animate-pulse" />
            <div className="h-3 w-12 bg-zinc-700 rounded animate-pulse ml-auto" />
          </div>
        ))}
      </nav>
    </div>
  ))
