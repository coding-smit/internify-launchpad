import { Link } from "react-router-dom";
import { Briefcase, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Expernix</span>
            </div>
            <p className="text-background/70 text-sm mb-6">
              Empowering the next generation of professionals through real-world internship experiences.
            </p>
            <div className="space-y-2 text-sm text-background/70">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>patelsmit9328@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 9328233295</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLScwwoGO2uGfPbMj3QhdTkTq8Zrh5Tvf3aIj8DpIj5p1hyM7tw/viewform?usp=header" className="hover:text-background transition-colors">
                  Internships
                </Link>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-background transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-background transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <Link to="/apply" className="hover:text-background transition-colors">
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <Link to="/about" className="hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-background transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-background transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund" className="hover:text-background transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <Link to="/" className="hover:text-background transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-background transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-background transition-colors">
                  Verify Certificate
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Expernix. All rights reserved.
          </p>
           <p className="text-sm text-background/50">
            MSME Registered | UDYAM-GJ-14-0068059
          </p>
          <div className="flex items-center gap-6 text-sm text-background/50">
            <span>Made with ❤️ in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
