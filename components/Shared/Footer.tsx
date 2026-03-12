import logo from "@/public/asset/logo/logo.png";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Logo & Info */}
          <div className="lg:col-span-4 flex flex-col items-start gap-6">
            <Image src={logo} alt="PrizeFlow Logo" width={120} height={40} />
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Your trusted platform for online lottery and competitions. 
              Win amazing prizes with fair and transparent draws.
            </p>
          </div>

          {/* Links: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li>
                <Link
                  href="/lotteries"
                  className="hover:text-white transition-colors"
                >
                  All Lotteries
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/winners"
                  className="hover:text-white transition-colors"
                >
                  Recent Winners
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Links: Company */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="hover:text-white transition-colors"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Links: Legal */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6 text-white">Legal</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/responsible-gaming"
                  className="hover:text-white transition-colors"
                >
                  Responsible Gaming
                </Link>
              </li>
              <li>
                <Link
                  href="/fair-play"
                  className="hover:text-white transition-colors"
                >
                  Fair Play
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6 text-white">
              Follow Us
            </h4>
            <div className="flex gap-3 mb-6">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Stay connected for latest updates and winner announcements
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-800 mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-gray-400 text-sm">
          <p>{new Date().getFullYear()} © PrizeFlow. All rights reserved.</p>
          <div className="flex items-center gap-6 order-2 lg:order-1">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex items-center gap-4 order-3">
            <span className="text-xs">Payment methods:</span>
            <div className="flex gap-3">
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center p-1">
                <img src="/asset/payment/stripe.png" alt="Stripe" className="w-full h-full object-contain" />
              </div>
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center p-1">
                <img src="/asset/payment/paypal.png" alt="PayPal" className="w-full h-full object-contain" />
              </div>
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center p-1">
                <img src="/asset/payment/visa.png" alt="Visa" className="w-full h-full object-contain" />
              </div>
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center p-1">
                <img src="/asset/payment/mastercard.png" alt="Mastercard" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
