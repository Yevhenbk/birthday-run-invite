import { Award } from 'lucide-react';

export default function MedalSection() {
  const downloadMedal = () => {
    const svg = `
      <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#93c5fd;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="80" r="60" fill="url(#gradient)" stroke="#1e40af" stroke-width="2"/>
        <text x="100" y="95" font-size="48" font-weight="bold" text-anchor="middle" fill="#1e40af">🏃</text>
        <text x="100" y="130" font-size="24" font-weight="bold" text-anchor="middle" fill="#1e40af">Andrea's</text>
        <text x="100" y="155" font-size="20" font-weight="bold" text-anchor="middle" fill="#1e40af">Birthday Run</text>
        <text x="100" y="175" font-size="16" text-anchor="middle" fill="#3b82f6">25 años • 25 km</text>
        <line x1="100" y1="200" x2="100" y2="230" stroke="#3b82f6" stroke-width="2"/>
        <circle cx="90" cy="230" r="3" fill="#3b82f6"/>
        <circle cx="110" cy="230" r="3" fill="#3b82f6"/>
      </svg>
    `;
    
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Andrea-Birthday-Run-Medal.svg';
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white rounded-3xl shadow-soft p-8 border border-blue-100">
      <div className="flex items-center mb-6">
        <Award className="w-6 h-6 text-blue-500 mr-3" />
        <h3 className="text-2xl font-semibold text-blue-900">Tu medalla virtual</h3>
      </div>
      
      <p className="text-blue-700 font-light mb-6">
        Gracias por ser parte de esta celebración. Aquí está tu medalla virtual:
      </p>

      <button
        onClick={downloadMedal}
        className="w-full bg-gradient-to-r from-amber-300 to-yellow-300 hover:from-amber-400 hover:to-yellow-400 text-amber-900 font-medium py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md"
      >
        🏅 Descargar Medalla
      </button>
    </div>
  );
}