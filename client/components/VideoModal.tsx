import { X } from "lucide-react";
import { useEffect } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoUrl,
  title,
}: VideoModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const getVideoEmbedUrl = (url: string) => {
    // Convert YouTube URL to embed format
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      let videoId = "";
      if (url.includes("youtube.com/watch?v=")) {
        videoId = url.split("v=")[1].split("&")[0];
      } else if (url.includes("youtu.be/")) {
        videoId = url.split("youtu.be/")[1].split("?")[0];
      }
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // Convert Vimeo URL to embed format
    if (url.includes("vimeo.com")) {
      const videoId = url.split("/").pop();
      return `https://player.vimeo.com/video/${videoId}`;
    }

    return url;
  };

  const embedUrl = getVideoEmbedUrl(videoUrl);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-black rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors"
          aria-label="Close video"
        >
          <X size={24} />
        </button>

        {/* Video Container */}
        <div className="relative w-full pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
