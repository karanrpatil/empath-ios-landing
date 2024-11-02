import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center">
              <Logo className="h-8 w-8 text-wisdom-400" />
              <span className="ml-2 text-xl font-serif font-bold text-white">Empath</span>
            </div>
            <p className="mt-6 leading-relaxed">Become Self-Aware</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6">Download</h3>
            <ul className="space-y-4">
              <li><a href="https://apps.apple.com/us/app/myempath/id6472873287" className="hover:text-wisdom-400 transition-colors">iOS App</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6">Learn More</h3>
            <ul className="space-y-4">
              <li><Link to="/philosophy" className="hover:text-wisdom-400 transition-colors">Our Philosophy</Link></li>
              <li><a href="#" className="hover:text-wisdom-400 transition-colors">Privacy Promise</a></li>
              <li><a href="#" className="hover:text-wisdom-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6">Join Our Journey</h3>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-wisdom-400 transition-colors"
              />
              <button className="mt-3 w-full bg-wisdom-600 text-white px-4 py-3 rounded-lg hover:bg-wisdom-700 transition-all duration-300 hover:shadow-md">
                Begin Your Journey
              </button>
            </form>
            <div className="flex space-x-6 mt-8">
              <a href="#" className="hover:text-wisdom-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-wisdom-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-wisdom-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Empath. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}