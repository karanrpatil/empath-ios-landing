import React from 'react';
import { BookOpen, LineChart, Lock, Sparkles, Phone, Brain, Heart } from 'lucide-react';
import Particles from './Particles';
import { MagicCard } from './ui/magic-card';

const primaryFeatures = [
  {
    icon: BookOpen,
    title: 'Dig Deeper',
    description: 'Get inspired to dig deeper and reflect with our carefully crafted prompts. Each prompt creates space for reflection, enabling deeper self-awareness and authentic expression.',
    media: {
      type: 'image',
      src: '/dig-deeper.png'
    }
  },
  {
    icon: Phone,
    title: 'Call-2-Journal',
    description: 'Transform your voice into journal entries instantly. Call anytime to capture your thoughts and emotions as they happen.',
    media: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1522108133167-a96f36e623e7?auto=format&fit=crop&w=800&q=80'
    }
  },
  {
    icon: Brain,
    title: 'Discover Yourself',
    description: 'Uncover hidden patterns and connections in your journal entries. Our advanced analysis reveals underlying themes and recurring patterns, helping you understand yourself at a deeper level.',
    media: {
      type: 'video',
      src: 'https://www.youtube.com/embed/CWCvzYNGs4Q?autoplay=1&loop=1&playlist=CWCvzYNGs4Q&controls=0&mute=1'
    }
  },
  {
    icon: Heart,
    title: 'Mood Analysis',
    description: 'Track your emotional journey through sophisticated sentiment analysis. Visualize mood patterns over time and gain profound insights into your emotional landscape.',
    media: {
      type: 'image',
      src: '/mood-analysis.png'
    }
  }
];

const secondaryFeatures = [
  {
    icon: Lock,
    title: 'Sacred Space',
    description: 'A private sanctuary for your inner exploration, protected by secure encryption.'
  },
  {
    icon: LineChart,
    title: 'Awareness Insights',
    description: 'Observe patterns in your thinking and behavior over time, fostering deeper self-understanding.'
  },
  {
    icon: Sparkles,
    title: 'Inner Stillness',
    description: 'Tools for creating the mental space needed for authentic self-observation and awareness.'
  }
];

const MediaContent = ({ media }: { media: { type: string; src: string } }) => {
  if (media.type === 'video') {
    return (
      <div className="relative w-full aspect-video rounded-xl shadow-2xl overflow-hidden">
        <iframe
          src={media.src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full pointer-events-none"
        />
      </div>
    );
  }

  return (
    <div className="relative">
      <img 
        src={media.src}
        alt="Feature visualization"
        className="rounded-xl shadow-2xl w-full object-contain bg-gray-900 aspect-4/3"
      />
      {!media.src.includes('dig-deeper') && (
        <div className="absolute inset-0 bg-gradient-to-tr from-wisdom-600/20 to-transparent rounded-xl" />
      )}
    </div>
  );
};

export default function Features() {
  return (
    <section id="features" className="space-rhythm bg-white relative overflow-hidden">
      <Particles
        className="absolute inset-0"
        quantity={1000}
        staticity={20}
        ease={50}
        size={2}
        colors={[
          "#FFB5E8",
          "#B5B9FF",
          "#B5FFB9",
          "#FFB5B5",
          "#907dff",
        ]}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto lotus-border">
          <h2 className="font-serif text-4xl font-bold text-gray-900 mt-8">
            The Path to Self-Awareness
          </h2>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            Writing is the bridge between the observer and the observed, creating the distance needed for true awareness.
          </p>
        </div>

        {/* Primary Features */}
        <div className="mt-20 space-y-24">
          {primaryFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <MagicCard 
                key={index}
                className="p-8 md:p-12"
              >
                <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-wisdom-100 rounded-xl flex items-center justify-center">
                      <Icon className="h-8 w-8 text-wisdom-600" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-serif text-3xl font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                      <button className="bg-wisdom-600 text-white px-8 py-3 rounded-full hover:bg-wisdom-700 transition-all duration-300 hover:shadow-md inline-flex items-center">
                        <Icon className="h-5 w-5 mr-2" />
                        Try {feature.title}
                      </button>
                    </div>
                  </div>
                  <div className={`relative ${index % 2 === 1 ? 'md:order-first' : ''}`}>
                    <MediaContent media={feature.media} />
                  </div>
                </div>
              </MagicCard>
            );
          })}
        </div>

        {/* Secondary Features Grid */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {secondaryFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group p-8 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 hover:border-wisdom-200 hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-wisdom-100 rounded-xl flex items-center justify-center group-hover:bg-wisdom-200 transition-colors duration-500">
                  <Icon className="h-7 w-7 text-wisdom-600 group-hover:text-wisdom-700 transition-colors duration-500" />
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}