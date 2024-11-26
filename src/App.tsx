import React, { useState, useEffect } from 'react';
import { Twitter, Rocket, Send, ExternalLink } from 'lucide-react';
import { Navigation } from './components/Navigation';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add('dark');
      document.querySelector('.theme-wrapper')?.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
    document.querySelector('.theme-wrapper')?.classList.toggle('dark');
  };

  return (
    <div className="theme-wrapper">
      <div className="dark:block">
        <div className="stars" />
      </div>
      
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />

      <main className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center rounded-3xl mb-12">
          <div className="text-center floating">
            <h1 className="text-4xl sm:text-7xl font-bold mb-6 neon-text">
              $UAP Memecoin
            </h1>
            <p className="text-lg sm:text-xl text-gray-900 dark:text-gray-100 mb-8 max-w-2xl mx-auto font-medium px-4">
              The UAP memecoin for everyone that wants to believe.
            </p>
            <a 
              href="https://app.apewave.fun/token/resource_rdx1tk89kg35tm50fvvj94q9swf432n47ag27twdcflqftvs9qr6rn4ft8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white neon-border px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:from-blue-600 hover:to-blue-800 transition-all duration-300 hover:-translate-y-1"
            >
              Launch App <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* Presale Section */}
        <section id="presale" className="min-h-screen flex items-center rounded-3xl mb-12">
          <div className="w-full max-w-2xl mx-auto bg-white/10 dark:bg-black/60 p-4 sm:p-8 rounded-2xl backdrop-blur-lg border border-white/20 dark:border-white/10 neon-border">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 neon-text flex items-center gap-2">
              <Rocket className="h-6 sm:h-8 w-6 sm:w-8" />
              Classified Presale
            </h2>
            <div className="space-y-6">
              <div className="bg-white/10 dark:bg-black/80 p-4 sm:p-6 rounded-xl border border-white/20">
                <a 
                  href="https://app.apewave.fun/token/resource_rdx1tk89kg35tm50fvvj94q9swf432n47ag27twdcflqftvs9qr6rn4ft8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl mb-4 text-gray-900 dark:text-gray-100 font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  Total Raised: 420.69 AFM (Alien Funny Money) <ExternalLink className="h-4 w-4" />
                </a>
                <div className="w-full bg-blue-200/40 dark:bg-blue-900/40 rounded-full h-4 overflow-hidden neon-border">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full"
                    style={{width: '65%'}}
                  ></div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="text" 
                  placeholder="Enter amount" 
                  className="flex-1 bg-white/10 dark:bg-black/80 border border-blue-300/50 dark:border-blue-700/50 rounded-lg px-4 py-2 text-gray-900 dark:text-gray-100 placeholder-gray-700 dark:placeholder-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500/50 transition-all duration-300"
                />
                <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white neon-border px-6 py-2 rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section id="social" className="min-h-screen flex items-center rounded-3xl mb-12">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Twitter Section */}
            <div id="twitter" className="bg-white/10 dark:bg-black/60 p-6 sm:p-8 rounded-2xl backdrop-blur-lg neon-border floating">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 neon-text flex items-center gap-2">
                <Twitter className="h-5 sm:h-6 w-5 sm:w-6" />
                Declassified Twitter
              </h2>
              <p className="text-gray-900 dark:text-gray-100 mb-6 font-medium">
                Get top-secret updates and classified information
              </p>
              <a 
                href="https://twitter.com/uap_fun" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 hover:-translate-y-1"
              >
                Access Files <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* Telegram Section */}
            <div id="telegram" className="bg-white/10 dark:bg-black/60 p-6 sm:p-8 rounded-2xl backdrop-blur-lg neon-border floating" style={{animationDelay: '0.3s'}}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 neon-text flex items-center gap-2">
                <Send className="h-5 sm:h-6 w-5 sm:w-6" />
                Secret Telegram Base
              </h2>
              <p className="text-gray-900 dark:text-gray-100 mb-6 font-medium">
                Join our classified community operations center
              </p>
              <a 
                href="https://t.me/uap_fun" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 hover:-translate-y-1"
              >
                Enter Base <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white/10 dark:bg-black/60 backdrop-blur-md mt-20 border-t border-white/20 dark:border-white/10">
        <div className="container mx-auto px-4 sm:px-6 py-8">
          <div className="text-center text-gray-900 dark:text-gray-100 font-medium">
            © 2024 UAP Memecoin. All rights reserved. TOP SECRET.
          </div>
        </div>
      </footer>
    </div>
  );
}
