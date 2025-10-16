import React from 'react';
import { Heart, Check } from 'lucide-react';

interface FormSectionProps {
  formData: { name: string; email: string; distance: string; comments: string };
  setFormData: React.Dispatch<React.SetStateAction<{ name: string; email: string; distance: string; comments: string }>>;
  formSubmitted: boolean;
  setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FormSection({ formData, setFormData, formSubmitted, setFormSubmitted }: FormSectionProps) {
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Replace 'YOUR_FORM_ID' with your actual Formspree form ID when ready
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', distance: '', comments: '' });
        setTimeout(() => setFormSubmitted(false), 3000);
      }
    } catch {
      console.log('Form submitted locally');
      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 3000);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-soft p-8 mb-8 border border-blue-100">
      <div className="flex items-center mb-6">
        <Heart className="w-6 h-6 text-blue-500 mr-3" />
        <h3 className="text-2xl font-semibold text-blue-900">Cuestionario</h3>
      </div>
      
      <form onSubmit={handleFormSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-blue-800 mb-2">
            Tu nombre
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-blue-50 text-blue-900 placeholder-blue-400 font-light"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-800 mb-2">
            Tu email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-blue-50 text-blue-900 placeholder-blue-400 font-light"
            placeholder="tu@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-800 mb-2">
            ¿Cuántos km vas a correr?
          </label>
          <input
            type="number"
            name="distance"
            value={formData.distance}
            onChange={handleFormChange}
            min="1"
            required
            className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-blue-50 text-blue-900 placeholder-blue-400 font-light"
            placeholder="1 km"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-800 mb-2">
            Comentarios (opcional)
          </label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleFormChange}
            className="w-full px-4 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-blue-50 text-blue-900 placeholder-blue-400 font-light resize-none"
            rows={3}
            placeholder="Cuéntame algo especial..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={formSubmitted}
          className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center gap-2"
        >
          {formSubmitted ? (
            <>
              <Check className="w-5 h-5" />
              ¡Enviado con éxito!
            </>
          ) : (
            'Enviar'
          )}
        </button>
      </form>
    </div>
  );
}