import * as Collapsible from '@radix-ui/react-collapsible'
import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

import { usePlayerStore } from '@/stores/Player'

import { ModuleLessons } from '../ModuleLessons'
import { IModule } from './types'

export const Module = ({ moduleIndex, title, lessonsAmount }: IModule) => {
  const course = usePlayerStore(({ course }) => course)
  const currentModuleIndex = usePlayerStore(({ currentModuleIndex }) => currentModuleIndex)
  const currentLessonIndex = usePlayerStore(({ currentLessonIndex }) => currentLessonIndex)
  const play = usePlayerStore(({ play }) => play)

  const [isOpen, setIsOpen] = useState(false)

  const currentModuleLessons = course?.modules[moduleIndex].lessons

  useEffect(() => {
    setIsOpen(currentModuleIndex === moduleIndex)
  }, [currentModuleIndex, moduleIndex])

  return (
    <Collapsible.Root className="group" open={isOpen} onOpenChange={setIsOpen}>
      <Collapsible.Trigger asChild>
        <button className="flex w-full items-center gap-3 bg-zinc-800 p-4 cursor-pointer">
          <span className="flex items-center justify-center size-10 rounded-full bg-zinc-950 text-xs">
            {moduleIndex + 1}
          </span>
          <div className="flex flex-col gap-1 text-left">
            <strong className="text-sm">{title}</strong>
            <span className="text-xs text-zinc-400">{lessonsAmount} lessons</span>
          </div>
          <ChevronDown className="size-5 ml-auto text-zinc-400 group-data-[state=open]:-rotate-180 transition-transform" />
        </button>
      </Collapsible.Trigger>

      <Collapsible.Content asChild>
        <nav className="relative flex flex-col gap-4 p-6">
          {currentModuleLessons?.map(({ id, title, duration }, lessonIndex) => (
            <ModuleLessons
              key={id}
              title={title}
              duration={duration}
              isCurrent={currentModuleIndex === moduleIndex && currentLessonIndex === lessonIndex}
              onPlay={() =>
                play({
                  moduleIndex,
                  lessonIndex,
                })
              }
            />
          ))}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
