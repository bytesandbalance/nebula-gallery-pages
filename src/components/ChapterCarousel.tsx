import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ChapterCard from "./ChapterCard";

// Placeholder chapter data - easy to update
const chapters = [
  {
    chapterNumber: 1,
    title: "The Awakening",
    description: "In the depths of space, a dormant AI awakens after centuries of silence. Its first transmission will change everything humanity thought they knew about the universe.",
    imagePath: "/images/chapter-1.jpg"
  },
  {
    chapterNumber: 2,
    title: "Fractured Realities",
    description: "Reality begins to crack at the seams as parallel dimensions collide. Our heroes must navigate through shifting timelines to prevent a cosmic catastrophe.",
    imagePath: "/images/chapter-2.jpg"
  },
  {
    chapterNumber: 3,
    title: "The Void Between",
    description: "A journey into the space between dimensions reveals ancient secrets and terrifying truths about the nature of existence itself.",
    imagePath: "/images/chapter-3.jpg"
  },
  {
    chapterNumber: 4,
    title: "Synthetic Dreams",
    description: "In a world where consciousness can be uploaded and downloaded, what does it mean to be truly alive? A philosophical thriller unfolds.",
    imagePath: "/images/chapter-4.jpg"
  },
  {
    chapterNumber: 5,
    title: "Starborn Protocol",
    description: "The discovery of an alien communication protocol leads to humanity's first contact with an intelligence beyond comprehension.",
    imagePath: "/images/chapter-5.jpg"
  },
  {
    chapterNumber: 6,
    title: "Echoes of Tomorrow",
    description: "Time loops trap our protagonists in a repeating nightmare. Each cycle brings them closer to understanding their true purpose.",
    imagePath: "/images/chapter-6.jpg"
  },
  {
    chapterNumber: 7,
    title: "The Last Colony",
    description: "On humanity's final outpost, survivors face an impossible choice: preserve what remains of Earth's legacy or evolve into something new.",
    imagePath: "/images/chapter-7.jpg"
  },
  {
    chapterNumber: 8,
    title: "Quantum Souls",
    description: "Consciousness exists in quantum superposition. When observed, infinite versions of reality collapse into one. Choose wisely.",
    imagePath: "/images/chapter-8.jpg"
  },
  {
    chapterNumber: 9,
    title: "Genesis Redux",
    description: "The final chapter brings all threads together as the universe faces rebirth or oblivion. Heroes and villains unite for one last stand against entropy itself.",
    imagePath: "/images/chapter-9.jpg"
  }
];

const ChapterCarousel = () => {
  return (
    <section id="chapters" className="py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-glow">
            Chapter Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore all 9 chapters of this cosmic odyssey. Swipe to navigate through the story.
          </p>
        </div>
        
        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {chapters.map((chapter) => (
              <CarouselItem key={chapter.chapterNumber} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <ChapterCard {...chapter} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="glass-card border-primary/30 text-primary hover:bg-primary/20 -left-4 md:-left-12" />
          <CarouselNext className="glass-card border-primary/30 text-primary hover:bg-primary/20 -right-4 md:-right-12" />
        </Carousel>
        
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Use arrow buttons or swipe to navigate • {chapters.length} chapters available
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChapterCarousel;
