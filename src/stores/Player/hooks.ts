import { usePlayerStore } from '.'

export const useCurrentModuleAndLesson = () => {
  const course = usePlayerStore(({ course }) => course)
  const currentModuleIndex = usePlayerStore(({ currentModuleIndex }) => currentModuleIndex)
  const currentLessonIndex = usePlayerStore(({ currentLessonIndex }) => currentLessonIndex)

  const currentModule = course?.modules[currentModuleIndex]
  const currentLesson = currentModule?.lessons[currentLessonIndex]

  return { currentModule, currentLesson }
}
