import { Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Cosmic background effect */}
      <div className="absolute inset-0 cosmic-stars opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-background" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-glow animate-fade-in">
          Cosmic Chronicles
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Embark on an epic journey through the cosmos. Experience 9 chapters of mind-bending 
          sci-fi adventure, where humanity's future hangs in the balance across distant galaxies 
          and parallel dimensions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-display text-lg px-8 py-6 glow-primary transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('chapters')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Chapters
          </Button>
          
          <a 
            href="https://www.paypal.com/paypalme/yourpaypalname/3.99EUR" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/50 text-primary hover:bg-primary/10 font-display text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
            >
              <Coffee className="mr-2 h-5 w-5" />
              Gift a Coffee - €3.99
            </Button>
          </a>
        </div>
        
        <p className="text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Support the creator and fuel more cosmic adventures
        </p>
      </div>
    </section>
  );
};

export default Hero;
