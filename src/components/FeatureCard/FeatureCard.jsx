import { CarFront, LeafyGreen, Timer, User } from "lucide-react";

const Features = [
  {
    title: "Convenience at Your Doorstep",
    description: "We come to your location - home, office, or anywhere you need us. No more waiting in lines.",
    icon: CarFront,
  },
  {
    title: "Eco-Friendly Products",
    description: "We use eco-friendly cleaning techniques that are safe for your car and the environment.",
    icon: LeafyGreen,
  },
  {
    title: "Quick & Reliable",
    description: "Our quick and efficient services get your car cleaned in minutes while you focus on what matters.",
    icon: Timer,
  },
  {
    title: "Trained Professionals",
    description: "Our cleaning experts are highly trained, insured, and treat every car with the utmost care.",
    icon: User,
  },
 
];

export default function FeatureSection() {
  return (
    <section className="features">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                <feature.icon className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
