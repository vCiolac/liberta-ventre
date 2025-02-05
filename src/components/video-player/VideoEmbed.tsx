import { useEffect } from 'react';

interface VideoEmbedProps {
  onPlay: () => void;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ onPlay }) => {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin.includes(`drive.google.com`)) {
        onPlay();
      }
    };

    window.addEventListener(`message`, handleMessage);
    return () => window.removeEventListener(`message`, handleMessage);
  }, [onPlay]);

  return (
    <div className="video-container">
      <iframe
        title="Capitã Liberta-Ventre"
        src="https://drive.google.com/file/d/1MtYRmTdw2ufXYLgmzE7HICBxgMg1vU6D/preview"
        width="100%"
        height="560"
        allow="autoplay"
        allowFullScreen
      />
    </div>
  );
};

export default VideoEmbed;
