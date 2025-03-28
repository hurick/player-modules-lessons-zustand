import { PlayCircle, Video } from 'lucide-react'

import { IModuleLessons } from './types'

export const ModuleLessons = ({ title, duration, isCurrent, onPlay }: IModuleLessons) => {
  return (
    <button
      type="button"
      onClick={onPlay}
      disabled={isCurrent}
      data-active={isCurrent}
      className="flex items-center gap-3 text-sm text-zinc-400 cursor-pointer data-[active=true]:text-emerald-400 enabled:hover:text-zinc-100 group/item"
    >
      {isCurrent ? (
        <PlayCircle className="size-4 text-emerald-400" />
      ) : (
        <Video className="size-4 text-zinc-500 group-hover/item:text-zinc-100" />
      )}

      <span className="whitespace-nowrap text-ellipsis overflow-x-hidden" title={title}>
        {title}
      </span>
      <span className="ml-auto font-mono text-xs text-zinc-500">{duration}</span>
    </button>
  )
}
