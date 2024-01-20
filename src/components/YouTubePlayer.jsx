import { useEffect, useRef } from 'react'
import YouTube from 'react-youtube'
import { useMuteContext } from '../hooks/useMuteContext'

export function YouTubePlayer({ src, ...props }) {
  const playerRef = useRef(null)
  const { isMuted } = useMuteContext()

  useEffect(() => {
    const player = playerRef.current.internalPlayer

    if (isMuted) {
      player.mute()
    } else {
      player.unMute()
    }
  }, [isMuted])

  const onReady = () => {
    const player = playerRef.current.internalPlayer
    player.playVideo()
  }

  return (
    <div {...props}>
      <YouTube
        ref={playerRef}
        className='h-[100.5%]'
        iframeClassName='h-full w-full'
        opts={{
          playerVars: {
            autoplay: 1,
            controls: 0,
          },
        }}
        videoId={src}
        onReady={onReady}
      />
    </div>
  )
}
