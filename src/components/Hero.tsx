import React, { useState, useEffect } from 'react';
import { Phone, Brain, Heart } from 'lucide-react';
import { GradualSpacing } from './GradualSpacing';
import { motion, AnimatePresence } from 'framer-motion';
import { ShinyButton } from './ui/shiny-button';

const features = [
  {
    icon: Phone,
    title: "Call-2-Journal",
    description: "Voice journal anytime, anywhere",
    section: "features"
  },
  {
    icon: Brain,
    title: "Discover Yourself",
    description: "Uncover patterns in your thoughts",
    section: "benefits"
  },
  {
    icon: Heart,
    title: "Mood Analysis",
    description: "Track your emotional journey",
    section: "features"
  }
];

export default function Hero() {
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-wisdom-100/80 via-wisdom-50/60 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(144,97,249,0.03)_70%)] opacity-70" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <ShinyButton
                    onClick={() => scrollToSection(features[currentFeature].section)}
                    className="inline-flex items-center"
                  >
                    {React.createElement(features[currentFeature].icon, { className: "h-4 w-4" })}
                    <span>Featuring {features[currentFeature].title}</span>
                  </ShinyButton>
                </motion.div>
              </AnimatePresence>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Witness Your Mind
                <div className="flex justify-center lg:justify-start">
                  <GradualSpacing 
                    text="Become Self Aware"
                    className="text-wisdom-700"
                    duration={0.6}
                    delayMultiple={0.06}
                    framerProps={{
                      hidden: { opacity: 0, y: 20, scale: 0.9 },
                      visible: { opacity: 1, y: 0, scale: 1 }
                    }}
                  />
                </div>
              </h1>
              <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                Transform your self-awareness journey with voice journaling. Call anytime to capture your thoughts and emotions as they happen.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://apps.apple.com/us/app/myempath/id6472873287" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center"
              >
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="Download on the App Store"
                  className="h-12 transition-transform group-hover:scale-105"
                />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl animate-float">
              <img 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80" 
                alt="Person in deep contemplation" 
                className="w-full h-auto transform transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-wisdom-200 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg"
              >
                <p className="font-semibold text-gray-900">{features[currentFeature].title}</p>
                <p className="text-sm text-gray-600">{features[currentFeature].description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}