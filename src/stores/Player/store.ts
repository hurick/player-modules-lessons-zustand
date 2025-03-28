import { create } from 'zustand'

import { api } from '@/lib/axios'

import { PlayActionPayload, PlayerState } from './types'

export const usePlayerStore = create<PlayerState>((set, get) => ({
  isLoading: true,
  course: null,
  currentModuleIndex: 0,
  currentLessonIndex: 0,

  fetchCourses: async () => {
    set({ isLoading: true })

    const response = await api.get('/courses')

    set({
      course: response.data,
      isLoading: false,
    })
  },

  play: ({ moduleIndex, lessonIndex }: PlayActionPayload) => {
    set({
      currentModuleIndex: moduleIndex,
      currentLessonIndex: lessonIndex,
    })
  },

  next: () => {
    const { currentLessonIndex, currentModuleIndex, course } = get()

    const currentModule = course?.modules[currentModuleIndex]
    const isLastLesson = currentLessonIndex === (currentModule?.lessons.length ?? 0) - 1
    const isLastModule = currentModuleIndex === (course?.modules.length ?? 0) - 1

    if (isLastLesson && isLastModule) {
      return
    }

    if (isLastLesson) {
      set({
        currentModuleIndex: currentModuleIndex + 1,
        currentLessonIndex: 0,
      })
    } else {
      set({
        currentLessonIndex: currentLessonIndex + 1,
      })
    }
  },
}))
