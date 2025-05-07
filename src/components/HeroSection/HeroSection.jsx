import React from "react";

function HeroSection({ title, description, className = "" }) {
  return (
    <section className={`py-16 bg-primary ${className}`}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{title}</h1>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto">{description}</p>
      </div>
    </section>
  );
}

export default HeroSection;
