
import { Link } from "react-router-dom";
import FeatureSection from "../components/FeatureCard/FeatureCard.jsx";
import TestimonialSlider from "../components/TestimonialSlider/TestimonialSlider.jsx";

export default function Home() {
    return (

        <div>
            {/* Banner Section */}
            <section className="relative bg-cover bg-center h-screen flex items-center banner-section">
                <div className="container mx-auto px-4 h-full flex items-center">
                    <div className="max-w-3xl text-white">
                        <div className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold mb-4 bg-secondary text-white">
                            Premium Car Care
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fade-in">
                            Doorstep Car Cleaning – Fast, Affordable & Eco-Friendly
                        </h1>

                        <p
                            className="text-lg md:text-xl mb-8 text-gray-100 animate-fade-in"
                            style={{ animationDelay: "0.2s" }}
                        >
                            We bring professional car cleaning right to your home or office.
                            No queues, no mess – just clean, shiny results in minutes.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link href="/booking">
                                <button
                                    className="cta-button border-2 border-primary animate-fade-in bg-primary cursor-pointer text-primary-foreground px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                                    style={{ animationDelay: "0.3s" }}
                                >
                                    Book Now
                                </button>
                            </Link>

                            <Link href="/services">
                                <button
                                    className="cta-button animate-fade-in border-2 border-white cursor-pointer text-white hover:bg-white hover:text-primary font-medium py-2 px-8 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 text-sm"
                                    style={{ animationDelay: "0.4s" }}
                                >
                                    See Our Services
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-20 bg-primary app-download">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white section-title">
                        Ready for a Cleaner Ride?
                    </h2>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        Experience the convenience of professional car cleaning at your doorstep.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                        <a
                            href="#"
                            aria-label="Download WashWoosh App From Play Store For Android Users"
                            target="_blank"
                        >
                            <img
                                className="h-12 md:h-14 transition-transform hover:scale-105"
                                src="/images/d-app1.png"
                                alt="Play Store Icon"
                            />
                        </a>

                        <a
                            href="#"
                            aria-label="Download WashWoosh App From App Store For iOS Users"
                            target="_blank"
                        >
                            <img
                                className="h-12 md:h-14 transition-transform hover:scale-105"
                                src="/images/d-app2.png"
                                alt="App Store Icon"
                            />
                        </a>
                    </div>


                </div>
            </section>


            {/* Features */}

            <section className="py-20 bg-base-100 feature-cards">
                <div className="text-center">
                    <h2 className="text-4xl mb-4 text-primary font-semibold section-title">Why CarGuyz?</h2>
                    <p className="mb-10 text-lg">Convenience, quality, and eco-conscious car cleaning.</p>
                </div>
                <FeatureSection />
            </section>



            {/* Testimonials */}
            <section className="py-20 bg-base-100 testimonials">
            <div className="text-center">
                    <h2 className="text-3xl md:text-4xl mb-4 text-primary font-semibold section-title">What Our Customers Say</h2>
                    <p className="mb-10 text-lg">Don't just take our word for it - hear from some of our satisfied customers.</p>
                </div>
                <TestimonialSlider />
            </section>
        </div>

    );
}
