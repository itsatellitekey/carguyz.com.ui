import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection/HeroSection.jsx";

export default function Booking() {
  return (

    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection
        title="Book Your Car Cleaning"
        subtitle="Schedule a convenient time for your doorstep car cleaning service."
      />

      {/* booking form section */}
      <section className="py-16 bg-light booking-form">
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-6 md:p-10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 upper-form">
                {/* <!-- Name --> */}
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none" for="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    className="flex h-10 w-full rounded-lg border-input border border-slate-200 focus:outline-none bg-background px-3 py-2 mt-2 text-base md:text-sm"
                    required
                  />
                </div>

                {/* <!-- Phone Number --> */}
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none" for="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your phone number"
                    className="flex h-10 w-full rounded-lg border-input border border-slate-200 focus:outline-none bg-background px-3 py-2 mt-2 text-base md:text-sm"
                    required
                  />
                </div>

                {/* <!-- Car Type --> */}
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none" for="car-type">Car Type</label>
                  <select
                    id="car-type"
                    name="car_type"
                    className="flex h-10 w-full rounded-lg border-input border border-slate-200 focus:outline-none bg-background px-3 py-2 mt-2 text-base md:text-sm">
                    <option value="">Select car type</option>
                    <option value="hatchback">Hatchback</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="luxury">Luxury Car</option>
                  </select>
                </div>

                {/* <!-- Service Type --> */}
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none" for="service-type">Service Type</label>
                  <select
                    id="service-type"
                    name="service_type"
                    className="flex h-10 w-full rounded-lg border-input border border-slate-200 focus:outline-none bg-background px-3 py-2 mt-2 text-base md:text-sm"
                  >
                    <option value="">Select service</option>
                    <option value="exterior">Exterior Wash (₹299)</option>
                    <option value="interior">Interior Detailing (₹699)</option>
                    <option value="steam">Steam Sanitization (₹799)</option>
                    <option value="full">Full Car Detailing (₹1,499)</option>
                    <option value="monthly">Monthly Maintenance (₹999/month)</option>
                  </select>
                </div>

                {/* <!-- Preferred Date --> */}
                <div className="space-y-2 flex flex-col">
                  <label className="text-sm font-medium leading-none" for="preferred-date">Preferred Date</label>
                  <input
                    type="date"
                    id="preferred-date"
                    name="preferred_date"
                    className="flex h-10 w-full rounded-lg border-input border border-slate-200 focus:outline-none bg-background px-3 py-2 mt-2 text-base md:text-sm"
                    required
                  />
                </div>

                {/* <!-- Preferred Time --> */}
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none" for="preferred-time">Preferred Time</label>
                  <select
                    id="preferred-time"
                    name="preferred_time"
                    className="flex h-10 w-full rounded-lg border-input border border-slate-200 focus:outline-none bg-background px-3 py-2 mt-2 text-base md:text-sm"
                  >
                    <option value="">Select time</option>
                    <option value="8am">8:00 AM</option>
                    <option value="10am">10:00 AM</option>
                    <option value="12pm">12:00 PM</option>
                    <option value="2pm">2:00 PM</option>
                    <option value="4pm">4:00 PM</option>
                  </select>
                </div>
              </div>
              {/* Address */}
              <div className="space-y-2 w-full max-w-full">
                <label
                  for="address"
                  className="text-sm font-medium leading-none"
                >
                  Address
                </label>
                <input
                  name="address"
                  id="address"
                  placeholder="Your full address where we should come"
                  aria-describedby="full-address"
                  aria-invalid="false"
                  className="flex h-10 w-full rounded-lg border-input border border-slate-200 focus:outline-none bg-background px-3 py-2 mt-2 text-base md:text-sm"
                  required
                />
                <p
                  className="text-sm text-gray-500"
                >
                  We'll use this address for the service.
                </p>
              </div>

              {/* special instructions */}
              <div className="space-y-2 w-full max-w-full">
                <label
                  for="special-notes"
                  className="text-sm font-medium leading-none"
                >
                  Special Instructions (Optional)
                </label>
                <textarea
                  name="notes"
                  id="special-notes"
                  placeholder="Any specific instructions for our team"
                  aria-describedby="special-notes-description"
                  aria-invalid="false"
                  className="flex min-h-[80px] w-full rounded-lg border-input border border-slate-200 focus:outline-none bg-background px-3 py-2 mt-2 text-base md:text-sm"
                ></textarea>
              </div>


              {/* <!-- Submit Button --> */}

              <Link to="">
                <button type="submit" className="w-full h-10 bg-secondary hover:bg-secondary/90 text-white rounded-lg px-8 py-3 text-sm font-medium transition-all duration-300 hover:shadow-lg cursor-pointer">
                  Book Appointment
                </button>
              </Link>
            </form>
          </div>
        </div>
      </section>
    </div>

  );
}
