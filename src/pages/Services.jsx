
import { Link } from "react-router-dom";
import React from "react";
import HeroSection from "../components/HeroSection/HeroSection.jsx";
import CardItem from "../components/CardItem/CardItem.jsx";
import FaqItem from "../components/FaqItem/FaqItem.jsx";
import { CarFront, Droplets, Sparkles } from "lucide-react";

const services = [
    {
      title: "Exterior Wash",
      description:
        "Complete exterior cleaning including bodywork, wheels, windows, and tires. Includes wax protection for added shine.",
      price: "₹299",
      icon: CarFront,
    },
    {
      title: "Interior Detailing",
      description:
        "Vacuuming, upholstery cleaning, dashboard polishing, and odor removal to refresh your cabin.",
      price: "₹499",
      icon: Droplets,
    },
    {
      title: "Full Car Spa",
      description:
        "Premium inside-out treatment for your car. A full detailing package to bring back that new car feel.",
      price: "₹999",
      icon: Sparkles,
    },
  ];

export default function Services() {
    return (

        <main class="pt-16">
            {/* Hero Section */}
            <HeroSection
                title="Our Services"
                description="Professional car cleaning services tailored to your needs, delivered right to your doorstep."
            />

            {/* services section */}
            <section className="py-20 bg-light services-section">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <CardItem
                                key={index}
                                title={service.title}
                                description={service.description}
                                price={service.price}
                                Icon={service.icon}
                                showButton={true}
                            />
                        ))}
                    </div>
                </div>

            </section>

            {/* Custom Quote section */}
            <section className="py-16 bg-white custom-quote">
                <div className="container mx-auto px-4">
                    <div className="bg-primary rounded-lg p-8 md:p-12 text-center">
                        <h2 className="text-3xl font-bold mb-4 text-white">Want a Custom Quote?</h2>
                        <p className="text-lg text-gray-200 mb-8 mx-auto">Need something specific or have multiple cars? We can create a customized cleaning plan just for you.</p>
                        <Link to="/contact" className="mt-6">
                            <button className="bg-secondary hover:bg-secondary/90 text-white rounded-lg px-8 py-3 text-sm font-medium transition-all duration-300 hover:shadow-lg cursor-pointer">
                                Get in Touch
                            </button>
                        </Link>

                    </div>

                </div>

            </section>

            {/* Faq section */}

            <section className="py-20 bg-light faq-section">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl mb-4 text-primary font-semibold section-title">Frequently Asked Questions</h2>
                        <p className="mb-10 text-lg subtitle-text subtitle-color">Have questions about our services? Find quick answers below.</p>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-6">
                            <FaqItem
                                question="How long does a typical car cleaning take?"
                                answer="Most of our services take between 45-90 minutes depending on the package and size of your vehicle."
                            />
                            <FaqItem
                                question="How long does a typical car cleaning take?"
                                answer="Most of our services take between 45-90 minutes depending on the package and size of your vehicle."
                            />
                            <FaqItem
                                question="How long does a typical car cleaning take?"
                                answer="Most of our services take between 45-90 minutes depending on the package and size of your vehicle."
                            />
                            <FaqItem
                                question="How long does a typical car cleaning take?"
                                answer="Most of our services take between 45-90 minutes depending on the package and size of your vehicle."
                            />

                        </div>
                    </div>
                </div>

            </section>

        </main>

    );
}
