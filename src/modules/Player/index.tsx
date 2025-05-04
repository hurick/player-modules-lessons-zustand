import { useEffect } from 'react'

import { Button } from '@/Components/Button'
import { usePlayerStore } from '@/stores/Player'

import { Header, Module, YouTubePlayer } from './components'
import { ModuleSkeleton } from './components/Module/skeleton'

export const Player = () => {
  const course = usePlayerStore(({ course }) => course)
  const isLoading = usePlayerStore(({ isLoading }) => isLoading)
  const fetchCourses = usePlayerStore(({ fetchCourses }) => fetchCourses)

  const courseModules = course?.modules ?? []

  useEffect(() => {
    fetchCourses()
  }, [fetchCourses])

  return (
    <section className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center px-4">
      <div className="flex w-6xl flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />
          <Button disabled={isLoading} lucideIconClassName="size-4" lucideIcon="MessageCircle">
            Feedback
          </Button>
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <section className="flex-1">
            <YouTubePlayer />
          </section>

          <aside className="absolute divide-y-2 divide-zinc-900 top-0 bottom-0 right-0 w-80 border-l border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            {isLoading ? (
              <ModuleSkeleton />
            ) : (
              courseModules.map(({ id, lessons, title }, index) => (
                <Module key={id} title={title} moduleIndex={index} lessonsAmount={lessons.length} />
              ))
            )}
          </aside>
        </main>
      </div>
    </section>
  )
}
