export const getBackgroundStyle = (isVideoPlaying, featuredContent) => {
  if (isVideoPlaying && featuredContent?.VideoUrl) {
    return null;
  }

  return {
    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.1) 100%), url('assets/FeaturedCoverImage.png')`,
  };
};
