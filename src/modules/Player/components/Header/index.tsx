import { useCurrentModuleAndLesson,usePlayerStore } from '@/stores/Player'

import { HeaderSkeleton } from './skeleton'

export const Header = () => {
  const { currentLesson, currentModule } = useCurrentModuleAndLesson()

  const isLoading = usePlayerStore(({ isLoading }) => isLoading)

  const currentLessonTitle = currentLesson?.title
  const currentModuleTitle = currentModule?.title

  if (isLoading) {
    return <HeaderSkeleton />
  }

  return (
    <div className="flex flex-col gap-1 w-full">
      <h1 className="text-2xl font-bold">{currentLessonTitle}</h1>
      <span className="text-sm text-zinc-400">Now learning: {currentModuleTitle}</span>
    </div>
  )
}
