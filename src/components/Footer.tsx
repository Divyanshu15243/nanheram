import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import logo from "@/assets/mainlogo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-foreground text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={logo} alt="NanheRam" className="h-16 w-auto mb-3" />
            <p className="mt-3 text-sm leading-relaxed opacity-70">
              Pure nutrition packed in every bite. Premium dry fruits, spices & snacks sourced with care.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-50">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", to: "/" },
                { label: "Shop", to: "/shop" },
                { label: "About Us", to: "/about" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="opacity-70 transition-opacity hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-50">Categories</h4>
            <ul className="space-y-2 text-sm">
              {["Dry Fruits", "Spices", "Snacks"].map((cat) => (
                <li key={cat}>
                  <Link to="/shop" className="opacity-70 transition-opacity hover:opacity-100">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-50">Get in Touch</h4>
            <a
              href="https://wa.me/917987073346"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
            <p className="mt-4 text-sm opacity-70">
              We'd love to hear from you!
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs opacity-50">
          © {new Date().getFullYear()} NanheRam. All rights reserved. | Pure nutrition packed in every bite.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
