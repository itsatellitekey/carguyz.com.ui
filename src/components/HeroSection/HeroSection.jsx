import React from "react";

function HeroSection({ title, subtitle }) {
  return (
    <section className={`py-16 bg-primary hero-section`}>
      <div className="w-full max-w-screen-xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{title}</h1>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto">{subtitle}</p>
      </div>
    </section>
  );
}

export default HeroSection;
