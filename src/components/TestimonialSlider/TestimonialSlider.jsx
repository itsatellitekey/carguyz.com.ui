import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Rohit Sharma",
    location: "Delhi NCR",
    text: "CarGuyz transformed my dusty car into a showroom piece! Professional team, amazing results, and the convenience of them coming to my home is unbeatable. Will definitely use again!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Patel",
    location: "Bengaluru",
    text: "I was skeptical about doorstep car washing, but CarGuyz changed my mind! Their service is prompt, thorough, and uses minimal water. My car hasn't looked this good in years!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ajay Verma",
    location: "Hyderabad",
    text: "As a busy professional, finding time to get my car cleaned was always a challenge. CarGuyz solved that problem! Their team is punctual, efficient, and delivers exceptional results.",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
  },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

export default function TestimonialsSection() {
  return (
        <div className="max-w-4xl mx-auto pb-10">
          <Slider {...sliderSettings}>
            {testimonials.map((t, idx) => (
              <div key={idx}>
                <div className="rounded-lg border-none bg-card text-card-foreground p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-secondary">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-lg italic mb-6 text-gray-600">"{t.text}"</p>
                  <div>
                    <h4 className="text-xl font-semibold text-primary">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
   
  );
}
