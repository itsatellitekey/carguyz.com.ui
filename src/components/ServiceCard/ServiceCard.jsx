import { Link } from "react-router-dom";

const ServiceCard = ({ title, description, price, Icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between hover:shadow-lg transition-all duration-300">
      <div>
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="text-primary w-6 h-6" />
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold text-primary mb-2">{title}</h3>
          {title === "Interior Detailing" && (
            <div className="bg-secondary text-white text-xs font-medium px-2.5 py-1 rounded">
              Popular
            </div>
          )}
        </div>
        <div className="text-xl font-bold text-primary mb-3">{price}</div>
        <p className="text-gray-600">{description}</p>
      </div>
      <Link to="/booking" className="mt-6">
        <button className="w-full bg-primary hover:bg-primary/90 text-white rounded-md px-4 py-2 text-sm font-medium transition">
          Book Now
        </button>
      </Link>
    </div>
  );
};

export default ServiceCard;
