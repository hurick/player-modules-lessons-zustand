import { beforeEach, describe, expect, it } from 'vitest'

import { usePlayerStore as store } from '../store'

const course = {
  course: {
    modules: [
      {
        id: '1',
        title: 'Module 1',
        lessons: [
          { id: '1', title: 'Lesson 1', duration: '1:00' },
          { id: '2', title: 'Lesson 2', duration: '2:00' },
        ],
      },
      {
        id: '2',
        title: 'Module 2',
        lessons: [
          { id: '3', title: 'Lesson 3', duration: '3:00' },
          { id: '4', title: 'Lesson 4', duration: '4:00' },
        ],
      },
    ],
  },
}

const initialState = store.getState()

describe('stores/Player', () => {
  beforeEach(() => {
    store.setState(initialState)
  })

  it('should be able to play', () => {
    const { play } = store.getState()

    play({
      moduleIndex: 1,
      lessonIndex: 2,
    })

    expect(store.getState().currentModuleIndex).toBe(1)
    expect(store.getState().currentLessonIndex).toBe(2)
  })

  it('should be able to play next lesson', () => {
    const { play, next } = store.getState()

    play({
      moduleIndex: 0,
      lessonIndex: 0,
    })

    next()

    expect(store.getState().currentModuleIndex).toBe(0)
    expect(store.getState().currentLessonIndex).toBe(1)
  })

  it('should be able to play next module', () => {
    const { play, next } = store.getState()

    store.setState({ ...course })

    play({
      moduleIndex: 0,
      lessonIndex: 1,
    })

    next()

    expect(store.getState().currentModuleIndex).toBe(1)
    expect(store.getState().currentLessonIndex).toBe(0)
  })

  it('should not be able to play next lesson if there are no lessons', () => {
    const { next } = store.getState()

    store.setState({
      ...course,
      currentModuleIndex: 1,
      currentLessonIndex: 1,
    })

    next()

    expect(store.getState().currentModuleIndex).toBe(1)
    expect(store.getState().currentLessonIndex).toBe(1)
  })
})
