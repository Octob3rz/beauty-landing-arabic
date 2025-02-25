import React from 'react';

const Map = () => {
  return (
    <div className="relative w-full max-w-[600px] mx-auto h-[150px] rounded-2xl overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.458942280891!2d29.029722!3d41.048333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab71f16bd8b8f%3A0x0!2zSGFsYXNrYXJnYXppIENhZC4gU2ViYXQgQXB0LiBObzo3NCBLOjQgRDo3LCAzNDM3MSDFnmnFn2xpL8Swc3RhbmJ1bA!5e0!3m2!1sen!2str!4v1650000000000!5m2!1sen!2str"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Beauty Clinic Location"
      />
      <div className="absolute bottom-2 left-2 bg-white/90 p-2 rounded-lg shadow-lg text-xs max-w-[200px] backdrop-blur-sm">
        <p className="font-semibold mb-1">Beauty Clinic</p>
        <p>Halaskargazi Cad. Sebat Apt.</p>
        <p>No:74 K:4 D:7</p>
        <p>34371 Şişli/İstanbul</p>
      </div>
    </div>
  );
};

export default Map;
