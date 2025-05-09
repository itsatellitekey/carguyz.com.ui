import HeroSection from "../components/HeroSection/HeroSection";
import ContactInfoItem from "../components/ContactInfoItem/ContactInfoItem";
import { MessageCircle } from "lucide-react";
import FaqItem from "../components/FaqItem/FaqItem.jsx";
import { Link } from "react-router";


export default function Contact() {
    return (
        <div className="pt-16 contact-page">
            {/* Hero Section */}
            <HeroSection
                title="Contact Us"
                subtitle="Have questions or need assistance? We're here to help. Reach out to our team for services starting at just ₹299."
            />

            {/* contact form and info section */}
            <section className="pt-16 bg-light contact-form-info">
                <div className="w-full max-w-screen-xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                        {/* form left side starts */}
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-primary mb-6">Send Us a Message</h2>
                            <form className="space-y-6">
                                {/* <!-- Name --> */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium leading-none" for="name">Name</label>
                                    <input type="text" id="name" name="name" placeholder="Your name"
                                        className="flex h-10 w-full rounded-lg border-input border border-slate-200 focus:outline-none bg-background px-3 py-2 mt-2 text-base md:text-sm"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label for="email" className="text-sm font-medium leading-none">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Your email"
                                        className="flex h-10 w-full rounded-lg border-input border border-slate-200 focus:outline-none bg-background px-3 py-2 mt-2 text-base md:text-sm"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label
                                        for="message"
                                        className="text-sm font-medium leading-none">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Your message"
                                        className="flex h-10 w-full rounded-lg border-input border border-slate-200 focus:outline-none bg-background px-3 py-2 mt-2 text-base md:text-sm min-h-32"
                                    />
                                </div>
                                <button type="button" className="w-full h-10 bg-secondary hover:bg-secondary/90 text-white rounded-lg px-8 py-3 text-sm font-medium transition-all duration-300 hover:shadow-lg cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap">
                                    Send Message
                                </button>
                            </form>

                        </div>
                        {/* form left side end */}

                        {/* contact-info right side */}
                        <div className="flex flex-col justify-between contact-info-block">
                            <div className="contact-info-inner">
                                <h2 className="text-2xl font-semibold text-primary mb-6">Contact Information</h2>
                                <ContactInfoItem />
                            </div>

                            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white flex items-center justify-center space-x-2 py-3 px-6 rounded-lg hover:bg-green-600 transition-colors mt-8 lg:mt-0">
                                <MessageCircle />
                                <span className="font-medium">Chat on WhatsApp</span>
                            </a>

                        </div>
                        {/* contact-info right side end */}
                    </div>

                </div>

            </section>

            {/* map section */}
            <section className="pt-16 bg-light">
                <div className="w-full max-w-screen-xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl mb-4 text-primary font-semibold text-center section-title">Find Us</h2>
                    <div className="map h-96 bg-gray-200 rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9510630717!2d76.7635559895021!3d28.64428734582233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1746732743967!5m2!1sen!2sin"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </section>

             {/* Faq section */}

             <section className="py-20 bg-white faq-section">
                <div className="w-full max-w-screen-xl mx-auto px-4">
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

        </div>
    )

}