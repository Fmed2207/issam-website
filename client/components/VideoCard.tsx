import { Play } from "lucide-react";
import { useState } from "react";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  videoUrl: string;
  onClick: () => void;
}

export default function VideoCard({
  title,
  thumbnail,
  videoUrl,
  onClick,
}: VideoCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
      onClick={onClick}
    >
      {/* Thumbnail Image */}
      <img
        src={thumbnail}
        alt={title}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />

      {/* Play Button Overlay */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
        <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center transform group-hover:scale-125 transition-transform duration-300 shadow-xl">
          <Play size={32} className="ml-1" fill="currentColor" />
        </div>
      </div>

      {/* Title at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5">
        <h3 className="text-white font-semibold text-sm md:text-base group-hover:text-secondary transition-colors duration-300">
          {title}
        </h3>
      </div>
    </div>
  );
}
