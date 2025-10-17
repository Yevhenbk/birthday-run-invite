import { Award } from 'lucide-react';

export default function MedalSection() {
  const viewMedal = () => {
    window.open('/medal', '_blank');
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
        onClick={viewMedal}
        className="w-full bg-gradient-to-r from-amber-300 to-yellow-300 hover:from-amber-400 hover:to-yellow-400 text-amber-900 font-medium py-3 rounded-xl transition-all duration-300 transform hover:cursor-pointer shadow-md"
      >
        🏅 Ver Medalla
      </button>
    </div>
  );
}