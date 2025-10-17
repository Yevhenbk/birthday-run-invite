interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 80, className = "" }: LogoProps) {
  return (
    <div className={`inline-block ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 200 200" 
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
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
        
        {/* Background circle */}
        <circle cx="100" cy="100" r="95" fill="url(#bluegradient)" filter="url(#shadow)"/>
        
        {/* Inner light circle */}
        <circle cx="100" cy="100" r="85" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
        
        {/* Runner figure (stylized) */}
        <g transform="translate(100, 100)">
          {/* Head */}
          <circle cx="-8" cy="-32" r="8" fill="white"/>
          
          {/* Body */}
          <line x1="-8" y1="-24" x2="-8" y2="-8" stroke="white" strokeWidth="4" strokeLinecap="round"/>
          
          {/* Left arm (back) */}
          <line x1="-8" y1="-20" x2="-22" y2="-12" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
          
          {/* Right arm (forward) */}
          <line x1="-8" y1="-20" x2="8" y2="-28" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
          
          {/* Left leg (forward) */}
          <line x1="-8" y1="-8" x2="-4" y2="12" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
          
          {/* Right leg (back) */}
          <line x1="-8" y1="-8" x2="-18" y2="8" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
          
          {/* Accent number "25" */}
          <text x="20" y="-8" fontSize="28" fontWeight="bold" fill="url(#accent)" fontFamily="Arial, sans-serif">25</text>
          
          {/* Sparkle 1 */}
          <circle cx="-28" cy="-20" r="2.5" fill="url(#accent)"/>
          <line x1="-28" y1="-25" x2="-28" y2="-15" stroke="url(#accent)" strokeWidth="1.5"/>
          <line x1="-33" y1="-20" x2="-23" y2="-20" stroke="url(#accent)" strokeWidth="1.5"/>
          
          {/* Sparkle 2 */}
          <circle cx="12" cy="18" r="2" fill="url(#accent)"/>
          <line x1="12" y1="14" x2="12" y2="22" stroke="url(#accent)" strokeWidth="1"/>
          <line x1="8" y1="18" x2="16" y2="18" stroke="url(#accent)" strokeWidth="1"/>
        </g>
        
        {/* Outer decorative ring */}
        <circle cx="100" cy="100" r="95" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="5,3"/>
      </svg>
    </div>
  );
}