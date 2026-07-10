"use client";

import { useRef, useState } from "react";
import YouTube, { YouTubeEvent } from "react-youtube";

export default function MusicPlayer() {
  const playerRef = useRef<any>(null);
  const [playing, setPlaying] = useState(false);

  const onReady = (event: YouTubeEvent) => {
    playerRef.current = event.target;
  };

  const toggleMusic = () => {
    if (!playerRef.current) return;

    if (playing) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }

    setPlaying(!playing);
  };

  return (
    <>
      <button
        onClick={toggleMusic}
        aria-label="Reproducir música"
        className="
    absolute
    left-1/2
    top-[64%]
    -translate-x-1/2
    w-[220px]
    h-[90px]
    bg-transparent
    cursor-pointer
  "
      />

      <div className="hidden">
        <YouTube
          videoId="M-gtVF33vbU"
          onReady={onReady}
          opts={{
            playerVars: {
              start: 7,
              autoplay: 0,
              controls: 0,
              rel: 0,
              modestbranding: 1,
            },
          }}
        />
      </div>
    </>
  );
}
