import { useEffect, useRef } from 'react'
import YouTube from 'react-youtube'
import { useAudioContext } from '../hooks/useAudioContext'

export function YouTubePlayer({ src, ...props }) {
  const playerRef = useRef(null)
  const { audioOff } = useAudioContext()

  useEffect(() => {
    const player = playerRef.current.internalPlayer

    if (audioOff) {
      player.mute()
    } else {
      player.unMute()
    }
  }, [audioOff])

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
