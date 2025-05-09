
// import { Link } from "react-router-dom";
import React from "react";
import HeroSection from "../components/HeroSection/HeroSection.jsx";
import BlogCard from "../components/BlogCard/BlogCard.jsx";

export default function Blog() {
    return (

        <div class="pt-16">
            {/* Hero Section */}
            <HeroSection
                title="Car Care Tips & News"
                subtitle="Expert advice, insider tips, and the latest updates from the world of car care."
            />

            {/* blogs section */}
            <section className="py-16 bg-light blogs-section">
                <div className="w-full max-w-screen-xl mx-auto px-4">
                    <BlogCard />
                </div>

            </section>

            {/* newsletter subscription */}
            <section className="py-16 bg-white newsletter-subscription">
                <div className="w-full max-w-screen-xl mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl mb-4 text-primary font-semibold section-title">Stay Updated</h2>
                        <p className="mb-10 text-lg subtitle-text subtitle-color">Subscribe to our newsletter for the latest car care tips, special offers, and industry news.</p>

                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto items-center justify-center subscription-form">
                            <input type="email" placeholder="Your email address" className="h-10 px-4 py-3 rounded-md border border-gray-300 focus:outline-none" required />

                            <button type="button" className="flex items-center whitespace-nowrap h-10 bg-secondary hover:bg-secondary/90 text-white rounded-lg px-8 py-3 text-sm font-medium transition-all duration-300 cursor-pointer">
                                Subscribe
                            </button>

                        </form>

                        <p className="text-sm text-gray-500 mt-3">We respect your privacy. Unsubscribe at any time.</p>

                        

                    </div>

                </div>

            </section>

        </div>

    );
}
