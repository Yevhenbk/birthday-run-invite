import React from 'react';
import { Camera } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface PhotoUploadProps {
  photoSubmitted: boolean;
  setPhotoSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PhotoUpload({ photoSubmitted, setPhotoSubmitted }: PhotoUploadProps) {
  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (50MB limit - Supports high-resolution professional photos)
      if (file.size > 50 * 1024 * 1024) {
        alert('El archivo es demasiado grande. Por favor, selecciona una imagen menor a 50MB.');
        return;
      }
      
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Por favor, selecciona un archivo de imagen válido.');
        return;
      }
      
      try {
        // Convert image to base64
        const reader = new FileReader();
        
        reader.onload = async (e) => {
          const base64Image = e.target?.result as string;
          
          // Prepare email data
          const templateParams = {
            to_email: process.env.NEXT_PUBLIC_RECIPIENT_EMAIL,
            from_name: 'Birthday Run App',
            subject: 'Nueva foto - Andrea\'s Birthday Run',
            message: `Nueva foto subida: ${file.name}`,
            photo_name: file.name,
            photo_size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
            photo_data: base64Image, // Base64 image data
            upload_time: new Date().toLocaleString()
          };

          try {
            // Send email via EmailJS using environment variables
            await emailjs.send(
              process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
              process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
              templateParams,
              process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            setPhotoSubmitted(true);
            setTimeout(() => setPhotoSubmitted(false), 3000);
            console.log('Photo sent to email successfully!');
            
          } catch (emailError) {
            console.error('Email sending failed:', emailError);
            alert('Error al enviar la foto por email. Por favor, inténtalo de nuevo.');
          }
        };

        // Start reading the file
        reader.readAsDataURL(file);
        
      } catch (error) {
        console.error('Photo processing error:', error);
        alert('Error al procesar la foto. Por favor, inténtalo de nuevo.');
      }
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-soft p-8 mb-8 border border-blue-100">
      <div className="flex items-center mb-6">
        <Camera className="w-6 h-6 text-blue-500 mr-3" />
        <h3 className="text-2xl font-semibold text-blue-900">Comparte tu foto corriendo</h3>
      </div>
      
      <p className="text-blue-700 font-light mb-6">
        Puedes subir tu foto y ser parte de este recuerdo especial:
      </p>

      <label className="cursor-pointer block">
        <div className="border-2 border-dashed border-blue-300 rounded-xl p-8 text-center hover:border-blue-500 hover:bg-blue-50 transition-all duration-300">
          <Camera className="w-12 h-12 text-blue-400 mx-auto mb-3" />
          <p className="text-blue-800 font-medium">
            {photoSubmitted ? '✓ Foto enviada' : 'Haz clic para subir tu foto'}
          </p>
          <p className="text-blue-600 font-light text-sm mt-1">
            PNG, JPG o GIF (máx. 10MB)
          </p>
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
          className="hidden"
        />
      </label>
    </div>
  );
}