import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer pb-8 pt-16 text-white bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          {/* footer-first-col */}
          <div className="space-y-4 footer-col">
            <a className="inline-block" href="/">
              <h3 className="text-2xl font-bold">
                Car<span className="text-secondary">Guyz</span>
              </h3>
            </a>

            <p className="text-gray-300 text-base">
              Professional car cleaning services at your doorstep. Fast, affordable, and eco-friendly.
            </p>

            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="#" className="text-white hover:text-secondary transition facebook-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="#" className="text-white hover:text-secondary transition instagram-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              <a href="#" className="text-white hover:text-secondary transition twitter-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </a>
            </div>
          </div>

          {/* footer-second-col */}
          <div className="footer-col">
            <h4 className="text-xl font-semibold mb-4 links-col">
              Quick Links
            </h4>
            <ul className="space-y-2 links-list">
              <li className="list-item">
                <Link to="/" className="text-gray-300 hover:text-secondary transition text-base">Home</Link>
              </li>
              <li className="list-item">
                <Link to="/services" className="text-gray-300 hover:text-secondary transition text-base">Services</Link>
              </li>
              <li className="list-item">
                <Link to="/" className="text-gray-300 hover:text-secondary transition text-base">About Us</Link>
              </li>
              <li className="list-item">
                <Link to="/" className="text-gray-300 hover:text-secondary transition text-base">Blog</Link>
              </li>
              <li className="list-item">
                <Link to="/" className="text-gray-300 hover:text-secondary transition text-base">Contact</Link>
              </li>
            </ul>
          </div>

          {/* footer-third-col */}
          <div className="footer-col">
            <h4 className="text-xl font-semibold mb-4 links-col">
              Our Services
            </h4>
            <ul className="space-y-2 links-list">
              <li className="list-item">
                <Link to="/" className="text-gray-300 hover:text-secondary text-base">Exterior Wash</Link>
              </li>
              <li className="list-item">
                <Link to="/" className="text-gray-300 hover:text-secondary transition text-base">Interior Detailing</Link>
              </li>
              <li className="list-item">
                <Link to="/" className="text-gray-300 hover:text-secondary transition text-base">Steam Sanitization</Link>
              </li>
              <li className="list-item">
                <Link to="/" className="text-gray-300 hover:text-secondary transition text-base">Full Car Detailing</Link>
              </li>
              <li className="list-item">
                <Link to="/" className="text-gray-300 hover:text-secondary transition text-base">Monthly Maintenance</Link>
              </li>
            </ul>
          </div>

          {/* footer-fourth-col */}
          <div className="footer-col">
            <h4 className="text-xl font-semibold mb-4 links-col">
              Contact Us
            </h4>
            <ul className="space-y-3 links-list">
              <li className="flex flex-col sm:flex-row sm:items-start gap-3 list-item">
                <div className="flex gap-3 justify-center sm:justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2ec4b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>
                  <a href="#" className="text-gray-300 hover:text-secondary transition text-base">
                    +91-8989XXXXXX
                  </a>
                </div>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-start gap-3 list-item">
                <div className="flex gap-3 justify-center sm:justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2ec4b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                  <a href="#" className="text-gray-300 hover:text-secondary transition text-base">
                    support@carguyz.in
                  </a>
                </div>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-start gap-3 list-item">
                <div className="flex gap-3 justify-center sm:justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2ec4b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                  <a href="#" className="text-gray-300 hover:text-secondary transition text-base">
                    Delhi NCR, Bengaluru, Hyderabad
                  </a>
                </div>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-start gap-3 list-item">
                <div className="flex gap-3 justify-center sm:justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2ec4b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock-icon lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <span className="text-gray-300 hover:text-secondary transition text-base">
                    8 AM – 8 PM (7 Days)
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-700 w-full my-8" />

        <div className="copyright-block text-center text-gray-400 w-full">
          <p className="text-base">&copy; 2025 CarGuyz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
