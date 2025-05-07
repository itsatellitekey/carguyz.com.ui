import { CarFront, Droplets, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

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

export default function ServiceCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between hover:shadow-lg transition-all duration-300"
                >
                    <div>
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <service.icon className="text-primary w-6 h-6" />
                        </div>
                        <div className="flex justify-between items-center">
                            <h3 className="text-2xl font-semibold text-primary mb-2">
                                {service.title}
                            </h3>
                            {service.title === "Interior Detailing" && (
                                <div className="bg-secondary text-white text-xs font-medium px-2.5 py-1 rounded">
                                    Popular
                                </div>
                            )}
                        </div>

                        <div className="text-xl font-bold text-primary mb-3">
                            {service.price}
                        </div>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                    <Link to="/booking" className="mt-6">
                        <button className="w-full bg-primary hover:bg-primary/90 text-white rounded-md px-4 py-2 text-sm font-medium transition">
                            Book Now
                        </button>
                    </Link>
                </div>
            ))}
        </div>

    );
}
