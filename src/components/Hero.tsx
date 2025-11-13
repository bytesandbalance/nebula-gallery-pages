import { useState } from "react";
import { Coffee, Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const handleDownloadClick = (url: string) => {
    setDownloadUrl(url);
    setShowModal(true);
  };

  const handleProceedDownload = () => {
    if (downloadUrl) {
      window.open(downloadUrl, "_blank");
    }
    setShowModal(false);
  };

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Cosmic background effect */}
      <div className="absolute inset-0 cosmic-stars opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-background" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-glow animate-fade-in">
          ManYFold
        </h1>

        <p
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Step into the ManYFold: a multiverse of intertwined realities. Explore
          9 folds of mind-bending sci-fi, where cosmic anomalies, quantum
          curiosities, and parallel dimensions challenge the very fabric of
          space, time, and existence.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          {/* Explore button */}
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-display text-lg px-8 py-6 glow-primary transition-all duration-300 hover:scale-105"
            onClick={() =>
              document.getElementById("chapters")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Explore Folds
          </Button>

          {/* PayPal button */}
          <a
            href="https://www.paypal.com/paypalme/pflashgary/3.99EUR"
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

          {/* Download buttons */}
          <Button
            size="lg"
            variant="secondary"
            className="border-primary/50 bg-primary/5 text-primary hover:bg-primary/20 font-display text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
            onClick={() =>
              handleDownloadClick(
                "https://drive.google.com/uc?export=download&id=1wjy28p_SoXvrUzf46Hgm7R6CYovRDzYK"
              )
            }
          >
            <Download className="mr-2 h-5 w-5" />
            Download Comic
          </Button>

          <Button
            size="lg"
            variant="secondary"
            className="border-primary/50 bg-primary/5 text-primary hover:bg-primary/20 font-display text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
            onClick={() =>
              handleDownloadClick(
                "https://drive.google.com/uc?export=download&id=YOUR_KNOWLEDGE_PDF_ID"
              )
            }
          >
            <Download className="mr-2 h-5 w-5" />
            Download Knowledge Nuggets
          </Button>
        </div>

        <p
          className="text-sm text-muted-foreground animate-fade-in max-w-md mx-auto"
          style={{ animationDelay: "0.6s" }}
        >
          Download freely — your support keeps new folds unfolding ☕
        </p>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-background rounded-2xl shadow-xl p-8 max-w-sm w-full relative text-center border border-primary/20">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-2xl font-display mb-4">Support the Journey 🌌</h2>
            <p className="text-muted-foreground mb-6">
              This project exists thanks to explorers like you. Would you like to
              support ManYFold by gifting a coffee (€3.99)?
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="https://www.paypal.com/paypalme/pflashgary/3.99EUR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-primary text-primary-foreground">
                  <Coffee className="mr-2 h-5 w-5" />
                  Gift a Coffee - €3.99
                </Button>
              </a>
              <Button
                variant="secondary"
                onClick={handleProceedDownload}
                className="text-primary hover:bg-primary/10"
              >
                Continue to Download
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
