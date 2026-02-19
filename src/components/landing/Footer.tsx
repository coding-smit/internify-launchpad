import { Link } from "react-router-dom";
import { Briefcase, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top grid */}
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
                <span>expernix.official@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 93******95</span>
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
                <a
                  href="/apply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background transition-colors"
                >
                  Internships
                </a>
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
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/refund">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/help">Help Center</Link></li>
              <li><Link to="/verify">Verify Certificate</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
          <p className="text-xs md:text-sm text-white/60">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">Expernix</span>. All rights reserved.
          </p>

          <p className="text-xs md:text-sm text-white/60">
            <span className="inline-block px-2 py-0.5 rounded-full bg-white/10 text-white/80 text-[11px] font-medium tracking-wide">
              MSME Registered
            </span>
            <span className="ml-2 text-white/50">
              UDYAM-GJ-14-0068059
            </span>
          </p>
        </div>

        <div className="mt-4 text-center text-xs text-background/50">
          Made with ❤️ in India
        </div>

      </div>
    </footer>
  );
};

export default Footer;
