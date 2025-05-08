
import { Link } from "react-router-dom";
import React from "react";
import HeroSection from "../components/HeroSection/HeroSection.jsx";
import CardItem from "../components/CardItem/CardItem.jsx";
import { User, LeafyGreen, ThumbsUp } from "lucide-react";
import OurTeam from "../components/OurTeam/OurTeam.jsx";

const values = [
    {
        title: "Reliability",
        description:
            "We show up on time, every time. Our consistent service quality ensures you can always count on us for a spotless result.",
        icon: User,
    },
    {
        title: "Sustainability",
        description:
            "From water-saving techniques to biodegradable cleaning solutions, we're committed to environmentally responsible practices.",
        icon: LeafyGreen,
    },
    {
        title: "Customer-first attitude",
        description:
            "Your satisfaction drives everything we do. We listen to feedback and continuously improve our services to meet your needs.",
        icon: ThumbsUp,
    },
];

export default function About() {
    return (

        <div class="pt-16">
            {/* Hero Section */}
            <HeroSection
                title="About Us"
                description="Get to know the team behind CarGuyz and our mission to transform car cleaning."
            />

            {/* our story section */}
            <section className="py-16 bg-white our-story">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl mb-4 text-primary font-semibold text-center section-title">The CarGuyz Story</h2>
                        <div className="our-story-content">
                            <p className="text-lg text-center mb-8">At CarGuyz, we believe every car deserves premium care – without the hassle. Founded in 2021 by car lovers frustrated with long service center queues, our mission is to provide convenient, eco-conscious, and professional car cleaning services at your doorstep.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                                <div className="story-content-col">
                                    <h3 className="text-2xl font-semibold text-primary mb-4">Our Humble Beginnings</h3>
                                    <p className="text-gray-700">CarGuyz started with just two friends and a passion for cars. After experiencing firsthand the inconvenience of traditional car wash centers – the long waits, inconsistent quality, and environmentally wasteful practices – we knew there had to be a better way.</p>
                                    <p className="text-gray-700 mt-4">We began by servicing just a few cars in our neighborhood, focusing on water conservation and high-quality results. Word spread quickly, and before we knew it, we needed to expand our team.</p>
                                </div>
                                <div className="story-content-col">
                                    <h3 className="text-2xl font-semibold text-primary mb-4">Where We Are Today</h3>
                                    <p className="text-gray-700">Today, CarGuyz operates in three major cities with a fleet of mobile cleaning units and over 50 trained professionals. We've served more than 10,000 satisfied customers and saved an estimated 2 million liters of water through our eco-friendly techniques.</p>
                                    <p className="text-gray-700 mt-4">Despite our growth, we maintain our founding principles: convenience, quality, and environmental responsibility. Every car we service gets the same attention to detail as when we started.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            {/* core values section */}
            <section className="py-16 bg-light core-values">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl mb-4 text-primary font-semibold text-center section-title">Our Core Values</h2>
                    <p className="text-center mb-10 text-lg subtitle-text subtitle-color">The principles that guide everything we do at CarGuyz</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {values.map((value, index) => (
                            <CardItem
                                key={index}
                                title={value.title}
                                description={value.description}
                                Icon={value.icon}
                                showButton={false}
                            />
                        ))}
                    </div>

                </div>

            </section>

            {/* our team */}
            <section className="py-16 bg-white our-team">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl mb-4 text-primary font-semibold text-center section-title">Meet Our Team</h2>
                    <p className="text-center mb-10 text-lg subtitle-text subtitle-color">The passionate people behind our exceptional service</p>

                    <OurTeam />
                </div>

            </section>

            {/* our promise section */}
            <section className="py-16 bg-light our-promise">
                <div className="container mx-auto px-4">
                    <div className="bg-primary rounded-lg p-8 md:p-12 text-center">
                        <h2 className="text-3xl font-bold mb-4 text-white">Our Promise To You</h2>
                        <p className="text-lg text-gray-200 mb-8 mx-auto">Your car will always look and feel showroom-ready. That's not just our goal – it's our promise.</p>
                        <Link to="/booking" className="mt-6">
                            <button className="bg-secondary hover:bg-secondary/90 text-white rounded-lg px-8 py-3 text-sm font-medium transition-all duration-300 hover:shadow-lg cursor-pointer">
                                Experience CarGuyz Today
                            </button>
                        </Link>

                    </div>

                </div>

            </section>

        </div>

    );
}
