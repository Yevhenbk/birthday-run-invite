'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import FormSection from '@/components/FormSection';
import PhotoUpload from '@/components/PhotoUpload';
import MedalSection from '@/components/MedalSection';
import Footer from '@/components/Footer';
import BackgroundDecoration from '@/components/BackgroundDecoration';

// Main App Component
export default function BirthdayRunInvite() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    distance: '',
    comments: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [photoSubmitted, setPhotoSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 to-cyan-50">
      <BackgroundDecoration />

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-12 md:py-16">
        <Header />
        <FormSection 
          formData={formData} 
          setFormData={setFormData} 
          formSubmitted={formSubmitted}
          setFormSubmitted={setFormSubmitted}
        />
        <PhotoUpload 
          photoSubmitted={photoSubmitted}
          setPhotoSubmitted={setPhotoSubmitted}
        />
        <MedalSection />
        <Footer />
      </div>

      <style jsx>{`
        .shadow-soft {
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.1);
        }
      `}</style>
    </div>
  );
}
