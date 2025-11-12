import { useState } from "react";
import { Card } from "@/components/ui/card";

interface ChapterCardProps {
  chapterNumber: number;
  title: string;
  description: string;
  imagePath: string;
}

const ChapterCard = ({ chapterNumber, title, description, imagePath }: ChapterCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Card className="glass-card border-primary/20 overflow-hidden group hover:border-primary/50 transition-all duration-500 h-full flex flex-col">
      {/* Chapter Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        {!imageError ? (
          <img 
            src={imagePath} 
            alt={`Chapter ${chapterNumber}: ${title}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary/30 to-primary/20">
            <div className="text-center space-y-2 p-6">
              <div className="text-6xl font-display text-primary glow-primary">
                {chapterNumber}
              </div>
              <p className="text-sm text-muted-foreground">
                Chapter image placeholder
              </p>
            </div>
          </div>
        )}
        
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Chapter number badge */}
        <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground font-display font-bold px-4 py-2 rounded-lg glow-primary">
          Ch. {chapterNumber}
        </div>
      </div>
      
      {/* Chapter Info */}
      <div className="p-6 flex-1 flex flex-col space-y-4">
        <h3 className="text-2xl font-display font-bold text-primary text-glow">
          {title}
        </h3>
        
        <p className="text-foreground/80 leading-relaxed flex-1">
          {description}
        </p>
        
        <div className="pt-4 border-t border-primary/20">
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-display">
            Available Now
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ChapterCard;
