import { useState } from "react";

export const useVideoPlayer = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const startVideo = () => {
    setIsVideoPlaying(false);
    setTimeout(() => {
      setIsVideoPlaying(true);
    }, 2000);
  };

  const stopVideo = () => {
    setIsVideoPlaying(false);
  };

  return {
    isVideoPlaying,
    startVideo,
    stopVideo,
  };
};
