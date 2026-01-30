import './Videoplayer.scss'
import {useEffect, useRef, useState} from "react";

const Videoplayer = (props) => {
  const {
    className = '',
    source,
    poster,
    width = "100%",
    height,
  } = props

  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false);

  const playerRef = useRef(null)

  useEffect(() => {
    if(isPlaying) {
      playerRef.current.play()
    } else {
      playerRef.current.pause()
    }
  }, [isPlaying]);

  useEffect(() => {
    playerRef.current.muted = isMuted
  }, [isMuted]);

  const handlePlay = () => setIsPlaying(true)

  const handlePause = () => {
    if(!playerRef.current.seeking) {
      setIsPlaying(false)
    }
  }

  const toggleMute = () => setIsMuted(!isMuted)

  return (
    <div
      className={`videoplayer ${className}`}
      style={{ maxWidth: width + 'px', height: height + 'px' }}
    >
      <video
        className="videoplayer__player"
        ref={playerRef}
        src={source}
        poster={poster}
        controls={isPlaying}
        onPause={handlePause}
        muted={isMuted}
      ></video>
      <div
        className={`videoplayer__controls ${isPlaying ? '' : 'is-active'}`}
      >
        <button
          className="videoplayer__controls-play"
          type="button"
          onClick={handlePlay}
        >
          <svg
            width="19"
            height="22"
            viewBox="0 0 19 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 9.66181C18.6667 10.0467 18.6667 11.009 18 11.3939L1.5 20.9201C0.833333 21.305 -1.0183e-06 20.8239 -9.84655e-07 20.0541L-1.51841e-07 1.00155C-1.18192e-07 0.231753 0.833333 -0.249374 1.5 0.135527L18 9.66181Z"
              fill="white"
            />
          </svg>
        </button>
        <button
          className={`videoplayer__controls-mute ${isMuted ? 'is-active' : ''}`}
          type="button"
          onClick={toggleMute}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.83333 11.4167C8.41667 11.8333 9.16667 11.5 9.16667 10.75V7L6.08333 10.0833L7.83333 11.4167Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.0833 0.25C12.75 -0.0833333 12.25 -0.0833333 11.9167 0.25L9.16667 3V0.916666C9.16667 0.25 8.33333 -0.166667 7.83333 0.25L5.5 2.16667C5.16667 2.33333 4.83333 2.5 4.41667 2.5H2.5C1.58333 2.5 0.833333 3.25 0.833333 4.16667V7.5C0.833333 8.41667 1.58333 9.16667 2.5 9.16667H3L0.25 11.9167C-0.0833333 12.25 -0.0833333 12.75 0.25 13.0833C0.583333 13.4167 1.08333 13.4167 1.41667 13.0833L13.0833 1.41667C13.4167 1.08333 13.4167 0.583333 13.0833 0.25Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Videoplayer