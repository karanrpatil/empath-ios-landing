import React from 'react';
import { Brain, Heart, Sun, Zap } from 'lucide-react';
import Ripple from './Ripple';

const benefits = [
  {
    icon: Brain,
    title: 'True Self-Awareness',
    description: 'Move beyond identification with thoughts and emotions to discover the observer within.'
  },
  {
    icon: Heart,
    title: 'Inner Freedom',
    description: 'Experience the liberation that comes from creating space between you and your mind.'
  },
  {
    icon: Sun,
    title: 'Conscious Living',
    description: 'Transform unconscious patterns into conscious choices through the power of observation.'
  },
  {
    icon: Zap,
    title: 'Deep Understanding',
    description: 'Discover the profound insights that emerge when you observe your mind objectively.'
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="space-rhythm relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-wisdom-50/80 to-wisdom-50/40" />
      <Ripple className="opacity-40" mainCircleSize={400} numCircles={3} mainCircleOpacity={0.45} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center lotus-border">
          <h2 className="font-serif text-4xl font-bold text-gray-900 mt-8">
            From Attachment to Awareness
          </h2>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            When you create space to observe your mind, true transformation becomes possible.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group flex items-start p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-wisdom-100 rounded-xl flex items-center justify-center group-hover:bg-wisdom-200 transition-colors duration-500">
                    <Icon className="h-6 w-6 text-wisdom-600 group-hover:text-wisdom-700 transition-colors duration-500" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="font-serif text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}