'use client';

import { useState, useEffect } from 'react';
import { Award } from 'lucide-react';

export default function MedalDisplay() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animate in on mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleDownload = () => {
    const medalSvg = `
      <svg viewBox="-20 -20 240 240" xmlns="http://www.w3.org/2000/svg" style="overflow: visible;">
        <defs>
          <linearGradient id="bluegradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#06b6d4;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="accent" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#fbbf24;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#f59e0b;stop-opacity:1" />
          </linearGradient>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="4" stdDeviation="3" flood-opacity="0.15"/>
          </filter>
        </defs>
        
        <!-- Background circle -->
        <circle cx="100" cy="100" r="95" fill="url(#bluegradient)" filter="url(#shadow)"/>
        
        <!-- Inner light circle -->
        <circle cx="100" cy="100" r="85" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
        
        <!-- Runner figure (stylized) -->
        <g transform="translate(100, 100)">
          <!-- Head -->
          <circle cx="-8" cy="-32" r="8" fill="white"/>
          
          <!-- Body -->
          <line x1="-8" y1="-24" x2="-8" y2="-8" stroke="white" stroke-width="4" stroke-linecap="round"/>
          
          <!-- Left arm (back) -->
          <line x1="-8" y1="-20" x2="-22" y2="-12" stroke="white" stroke-width="3.5" stroke-linecap="round"/>
          
          <!-- Right arm (forward) -->
          <line x1="-8" y1="-20" x2="8" y2="-28" stroke="white" stroke-width="3.5" stroke-linecap="round"/>
          
          <!-- Left leg (forward) -->
          <line x1="-8" y1="-8" x2="-4" y2="12" stroke="white" stroke-width="3.5" stroke-linecap="round"/>
          
          <!-- Right leg (back) -->
          <line x1="-8" y1="-8" x2="-18" y2="8" stroke="white" stroke-width="3.5" stroke-linecap="round"/>
          
          <!-- Accent number "25" -->
          <text x="20" y="-8" font-size="28" font-weight="bold" fill="url(#accent)" font-family="Arial, sans-serif">25</text>
          
          <!-- Sparkle 1 -->
          <circle cx="-28" cy="-20" r="2.5" fill="url(#accent)"/>
          <line x1="-28" y1="-25" x2="-28" y2="-15" stroke="url(#accent)" stroke-width="1.5"/>
          <line x1="-33" y1="-20" x2="-23" y2="-20" stroke="url(#accent)" stroke-width="1.5"/>
          
          <!-- Sparkle 2 -->
          <circle cx="12" cy="18" r="2" fill="url(#accent)"/>
          <line x1="12" y1="14" x2="12" y2="22" stroke="url(#accent)" stroke-width="1"/>
          <line x1="8" y1="18" x2="16" y2="18" stroke="url(#accent)" stroke-width="1"/>
        </g>
        
        <!-- Outer decorative ring -->
        <circle cx="100" cy="100" r="95" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" stroke-dasharray="5,3"/>
        
        <!-- Andrea's Birthday Text - Match display version exactly -->
        <text x="100" y="145" font-size="12" font-weight="600" text-anchor="middle" fill="url(#accent)" font-family="Arial, sans-serif">Andrea's Birthday</text>
        <text x="100" y="160" font-size="12" font-weight="600" text-anchor="middle" fill="url(#accent)" font-family="Arial, sans-serif">Run</text>
      </svg>
    `;
    
    const blob = new Blob([medalSvg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Andreas-Birthday-Run-Medal.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <div className="bg-white rounded-3xl shadow-soft p-8 border border-blue-100">
        {/* Medal SVG Display */}
        <div className="flex items-center mb-6">
          <Award className="w-6 h-6 text-blue-500 mr-3" />
          <h3 className="text-2xl font-semibold text-blue-900">Tu medalla virtual</h3>
        </div>
      
      <p className="text-blue-700 font-light">
        Gracias por ser parte de esta celebración. Aquí está tu medalla virtual:
      </p>
        <div className="my-12 flex justify-center">
          <div className="relative overflow-visible p-4">
            <svg 
              width={300} 
              height={300} 
              viewBox="-20 -20 240 240" 
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-xl animate-pulse overflow-visible"
              style={{ overflow: 'visible' }}
            >
              <defs>
                <linearGradient id="bluegradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:"#3b82f6", stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:"#06b6d4", stopOpacity:1}} />
                </linearGradient>
                <linearGradient id="accent" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor:"#fbbf24", stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:"#f59e0b", stopOpacity:1}} />
                </linearGradient>
                <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.15"/>
                </filter>
              </defs>
              
              <circle cx="100" cy="100" r="95" fill="url(#bluegradient)" filter="url(#shadow)"/>
              <circle cx="100" cy="100" r="85" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
              
              <g transform="translate(100, 100)">
                <circle cx="-8" cy="-32" r="8" fill="white"/>
                <line x1="-8" y1="-24" x2="-8" y2="-8" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                <line x1="-8" y1="-20" x2="-22" y2="-12" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
                <line x1="-8" y1="-20" x2="8" y2="-28" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
                <line x1="-8" y1="-8" x2="-4" y2="12" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
                <line x1="-8" y1="-8" x2="-18" y2="8" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
                <text x="20" y="-8" fontSize="28" fontWeight="bold" fill="url(#accent)" fontFamily="Arial, sans-serif">25</text>
                <circle cx="-28" cy="-20" r="2.5" fill="url(#accent)"/>
                <line x1="-28" y1="-25" x2="-28" y2="-15" stroke="url(#accent)" strokeWidth="1.5"/>
                <line x1="-33" y1="-20" x2="-23" y2="-20" stroke="url(#accent)" strokeWidth="1.5"/>
                <circle cx="12" cy="18" r="2" fill="url(#accent)"/>
                <line x1="12" y1="14" x2="12" y2="22" stroke="url(#accent)" strokeWidth="1"/>
                <line x1="8" y1="18" x2="16" y2="18" stroke="url(#accent)" strokeWidth="1"/>
              </g>
              
              <circle cx="100" cy="100" r="95" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="5,3"/>
              
              {/* STYLING REFERENCE: Andrea's Birthday Text */}
              {/* You can modify these text elements to change the styling: */}
              {/* - fontSize: Change text size (currently 12) */}
              {/* - fill: Change text color (currently "url(#accent)" for gradient) */}
              {/* - fontWeight: Change text thickness (currently "600") */}
              {/* - fontFamily: Change font (currently "Arial, sans-serif") */}
              {/* - x, y: Change position */}
              <text x="100" y="145" fontSize="12" fontWeight="600" textAnchor="middle" fill="url(#accent)" fontFamily="Arial, sans-serif">Andrea&apos;s Birthday</text>
              <text x="100" y="160" fontSize="12" fontWeight="600" textAnchor="middle" fill="url(#accent)" fontFamily="Arial, sans-serif">Run</text>
            </svg>
          </div>
        </div>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="bg-gradient-to-r w-full outline-none from-amber-300 to-yellow-300 hover:from-amber-400 hover:to-yellow-400 text-amber-900 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:cursor-pointer shadow-lg hover:shadow-xl"
        >
          💾 Download Medal
        </button>
      </div>
    </div>
  );
}