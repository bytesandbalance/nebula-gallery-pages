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
    title: "Gravitational Lensing & Vacuum Manipulation",
    description: "Lorentz detects anomalous gravitational lensing that suggests galaxy collision rates are rising. He and Puppig search for Herald—possibly trapped in a micro black hole—and uncover the Andromedians harvesting dark matter and manipulating vacuum energy. The team sabotages containment silos by looping negative-energy cancellation, barely escaping as a new black hole forms.",
    imagePath: "/images/chapter-1.jpg"
  },
  {
    chapterNumber: 2,
    title: "Planck Scale & the Graphene Membrane",
    description: "A coded seismic message from Herald leads Lorentz and Puppig to Plancket, a being of sub-Planckian law. They discover Earth sealed by a graphene-copper membrane that acts like a Faraday cage, and use Hückel’s rule to break aromaticity across the lattice. The sentient hexagons panic as the 2-D barrier dissolves and sunlight returns.",
    imagePath: "/images/chapter-2.jpg"
  },
  {
    chapterNumber: 3,
    title: "Quantum Tunneling & Valleytronics",
    description: "Sneaking into Gareth’s lab, Lorentz and Puppig witness a finite potential well and a particle escaping by quantum tunneling. Puppig finds valley indices in a WSe₂ monolayer and the team confronts the challenge of reading dark excitons and trions. In a risky lunchtime upgrade, Puppig secretly boosts QP 9.0’s processing using quantum encoding.",
    imagePath: "/images/chapter-3.jpg"
  },
  {
    chapterNumber: 4,
    title: "Chapter 4 – Coming Soon",
    description: "This chapter is currently missing. Placeholder inserted for future content.",
    imagePath: "/images/chapter-4-placeholder.jpg"
  },
  {
    chapterNumber: 5,
    title: "Cryogenic Corruption & Encoded Memory",
    description: "Puppig starts malfunctioning after a mistaken tech-support call; Lorentz discovers an illegal memory write and an encoded image showing Herald with pregnant women. Battling overfitting and the curse of dimensionality, Lorentz applies tensorized graph embeddings and latent reconstruction to heal Puppig while strange entities bleed into reality.",
    imagePath: "/images/chapter-5.jpg"
  },
  {
    chapterNumber: 6,
    title: "Time Cube & Quantum Probe 9.0",
    description: "Nezam, a traveller from a dying universe, seeks the mythical Time Cube to reverse her lover’s fate. Lorentz and Puppig enter her 2-D comic projection of the 3-D universe, and QP 9.0 detects localized curvature fluctuations—wormholes—around a lake. Portal scenes open to absurd worlds and a radioactive asteroid-mining sighting hints that something dangerous is stirring.",
    imagePath: "/images/chapter-6.jpg"
  },
  {
    chapterNumber: 7,
    title: "Klein Timeline & the Weakening Force",
    description: "The team becomes trapped in a backward-running, Klein-like reality where time folds onto itself. A political project to weaken the strong nuclear force threatens atomic stability, while Zamon—revealed to be the Time Cube—suffers in an endless loop. In a meta turn, Lorentz and QP 9.0 rip comic pages to jump time and collapse the paradox.",
    imagePath: "/images/chapter-7.jpg"
  },
  {
    chapterNumber: 8,
    title: "Hilbert Curve & Parasitic Reality",
    description: "Trapped in a 2-D comic invaded by a parasitic layer, Lorentz and Puppig confront King Hilbert, a fractal entity embodying a Hilbert curve and higher-dimensional distortion. Graphene membranes, Andromedian babies and environmental chaos make the landscape hostile; using metafictional plot armour, Lorentz knots the villain and forces the parasite back.",
    imagePath: "/images/chapter-8.jpg"
  },
  {
    chapterNumber: 9,
    title: "Delayed Choice & Wavefunction Split",
    description: "On the eve of the mission Lorentz wrestles with the quantum delayed choice machine and surreal white-panel dreams. Herald supplies outer-realm beam-splitter coordinates, and the heroes split Voiducus’ wavefunction—one part kept in our universe, the other sent outward—using entanglement to trap his outer-realm form.",
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
