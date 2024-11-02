import React, { useEffect } from 'react';
import Layout from '../components/Layout';

export default function Philosophy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-wisdom-100/80 via-wisdom-50/60 to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(144,97,249,0.03)_70%)] opacity-70" />
        
        <div className="container mx-auto px-6 py-16 max-w-3xl mt-20 relative z-10">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8">Our Philosophy</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-700 mb-6">
              At Empath, we believe that true self-awareness is the foundation of personal growth and fulfillment. 
              In a world filled with distractions and unconscious actions, the journey inward is often overlooked. 
              We are here to change that.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-gray-800 mt-8 mb-4">The Power of Self-Observation</h2>
            <p className="text-gray-700 mb-6">
              Inspired by the ancient wisdom of Advaita Vedanta, we recognize the profound impact of observing oneself. 
              Yet, in today's fast-paced society, many of us are deeply attached to our bodies and minds. This attachment 
              creates a barrier, leaving little space for the observer within us to step back and reflect.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-gray-800 mt-8 mb-4">Writing as a Path to Awareness</h2>
            <p className="text-gray-700 mb-6">
              We see writing as a powerful tool to bridge this gap. When you write, you externalize your thoughts and feelings, 
              effectively turning your mind into an observable object. This simple act creates a space between the observer 
              and the observed, allowing for genuine introspection and self-awareness.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-gray-800 mt-8 mb-4">Beyond Traditional Therapy</h2>
            <p className="text-gray-700 mb-6">
              Empath is designed to facilitate this transformative process. Our app provides a safe and accessible platform 
              for you to explore your inner world, even if traditional therapy isn't part of your journey. By encouraging 
              regular writing and reflection, we help you cultivate mindfulness and a deeper understanding of yourself.
            </p>

            <div className="bg-wisdom-50 p-8 rounded-lg mt-8 space-y-6">
              {[
                { text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle" },
                { text: "The unexamined life is not worth living.", author: "Socrates" },
                { text: "Your visions will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes.", author: "Carl Jung" },
                { text: "He who knows others is wise; he who knows himself is enlightened.", author: "Lao Tzu" }
              ].map((quote, index) => (
                <div key={index} className="flex flex-col space-y-2">
                  <p className="text-gray-800 italic text-lg">"{quote.text}"</p>
                  <p className="text-gray-600 text-sm font-medium text-right">— {quote.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
