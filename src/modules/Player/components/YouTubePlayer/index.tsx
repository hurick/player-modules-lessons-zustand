import Player from 'react-player'

import { useCurrentModuleAndLesson, usePlayerStore } from '@/stores/Player'

import { YouTubePlayerSkeleton } from './skeleton'

export const YouTubePlayer = () => {
  const isLoading = usePlayerStore(({ isLoading }) => isLoading)
  const next = usePlayerStore(({ next }) => next)

  const { currentLesson } = useCurrentModuleAndLesson()

  if (isLoading) {
    return <YouTubePlayerSkeleton />
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <Player
        playing
        controls
        width="100%"
        height="100%"
        onEnded={() => next()}
        url={`https://youtu.be/${currentLesson?.id}`}
      />
    </div>
  )
}
