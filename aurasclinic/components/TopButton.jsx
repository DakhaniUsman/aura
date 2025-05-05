"use client";

import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react'; // Optional: Use icon library

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300); // Show after 300px scroll
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 flex items-center justify-center transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-white hover:text-black" />
      </button>
    )
  );
};

export default TopButton;