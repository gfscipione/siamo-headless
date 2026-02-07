"use client";

import { useRef, useState } from "react";

type VideoWithOverlayProps = {
  src: string;
  poster?: string;
  preload?: "auto" | "metadata" | "none";
  className?: string;
};

export default function VideoWithOverlay({
  src,
  poster,
  preload = "metadata",
  className = "",
}: VideoWithOverlayProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const handleOverlayClick = async () => {
    const video = videoRef.current;
    if (!video) return;
    setIsPlaying(true);
    setHasStarted(true);
    try {
      await video.play();
    } catch {
      // Ignore autoplay restrictions; user can press play in controls.
    }
  };

  return (
    <div
      className={`virtual-video-bridge__frame ${isPlaying ? "is-playing" : ""} ${className}`.trim()}
    >
      <video
        ref={videoRef}
        className="virtual-video-bridge__poster"
        src={src}
        poster={poster}
        preload={preload}
        controls
        onPlay={() => {
          setIsPlaying(true);
          setHasStarted(true);
        }}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      {!hasStarted && (
        <button
          className="virtual-video-bridge__play"
          type="button"
          aria-label="Play video"
          onClick={handleOverlayClick}
        >
          ▶
        </button>
      )}
    </div>
  );
}
