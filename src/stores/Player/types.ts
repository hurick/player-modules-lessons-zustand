export interface Course {
  modules: Module[]
}

export interface Module {
  id: string
  title: string
  lessons: Lesson[]
}

export interface Lesson {
  id: string
  title: string
  duration: string
}

export interface PlayerState {
  isLoading: boolean
  currentModuleIndex: number
  currentLessonIndex: number
  course: Course | null

  play: ({ moduleIndex, lessonIndex }: PlayActionPayload) => void
  next: () => void
  fetchCourses: () => Promise<void>
}

export interface PlayActionPayload {
  moduleIndex: number
  lessonIndex: number
}
