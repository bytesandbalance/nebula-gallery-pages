import { Coffee, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-primary/20 py-12 px-4 mt-20">
      <div className="absolute inset-0 cosmic-stars opacity-20" />
      
      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        {/* Support Section */}
        <div className="text-center space-y-4 pb-8 border-b border-primary/20">
          <div className="flex items-center justify-center gap-2 text-primary">
            <Heart className="h-5 w-5" />
            <span className="font-display text-lg">Support the Journey</span>
          </div>
          
          <p className="text-muted-foreground max-w-md mx-auto">
            Every coffee helps fuel the creation of new chapters and brings more cosmic adventures to life.
          </p>
          
          <a 
            href="https://www.paypal.com/paypalme/yourpaypalname/3.99EUR" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 border border-primary/50 rounded-lg text-primary font-display transition-all duration-300 hover:scale-105"
          >
            <Coffee className="h-4 w-4" />
            Gift a Coffee - €3.99
          </a>
        </div>
        
        {/* Info Section */}
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            © 2025 Cosmic Chronicles. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60">
            A sci-fi journey through space, time, and consciousness.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
