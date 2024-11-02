import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Call-2-Journal has transformed how I process my emotions. Being able to call and express myself in the moment, rather than waiting to write later, has made such a difference in my self-awareness journey.",
    author: "Priya M.",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "This app helped me understand the difference between observing my mind and being lost in it. The writing prompts create a natural distance that brings clarity.",
    author: "David L.",
    role: "Teacher",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "As someone new to self-reflection, Empath showed me how writing can create the space needed to see my thoughts and patterns clearly.",
    author: "Sarah R.",
    role: "Artist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-gray-900">
            Journeys to Self-Discovery
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Join others who have found the power of conscious self-observation through writing.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}