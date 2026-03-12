import logo from "@/public/asset/logo/logo.png";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PayPalIcon = () => (
  <svg
    viewBox="0 0 101 32"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <path
      d="M12.237 2.93C11.13 1.65 9.15 1.1 6.595 1.1H.812a.896.896 0 0 0-.886.757L.001 30.94a.538.538 0 0 0 .531.617h5.087l1.277-8.105-.04.254a.893.893 0 0 1 .883-.757h1.838c3.607 0 6.432-1.466 7.257-5.706.024-.125.046-.247.065-.366-.104-.055-.104-.055 0 0 .245-1.562.016-2.625-.699-3.587"
      fill="#003087"
    />
    <path
      d="M28.772 9.35h-5.065a.893.893 0 0 0-.743.397l-4.288 6.31-1.818-6.063a.896.896 0 0 0-.86-.644h-4.977a.538.538 0 0 0-.511.715l3.426 10.054-3.223 4.548a.538.538 0 0 0 .44.851h5.061a.893.893 0 0 0 .74-.392l10.355-14.94a.537.537 0 0 0-.437-.836"
      fill="#003087"
    />
    <path
      d="M54.393 9.35h-5.065a.893.893 0 0 0-.743.397l-4.288 6.31-1.818-6.063a.896.896 0 0 0-.86-.644h-4.977a.538.538 0 0 0-.511.715l3.426 10.054-3.222 4.548a.538.538 0 0 0 .44.851h5.061a.893.893 0 0 0 .74-.392l10.355-14.94a.537.537 0 0 0-.438-.836"
      fill="#009cde"
    />
    <path
      d="M35.79 2.93C34.683 1.65 32.7 1.1 30.147 1.1h-5.784a.896.896 0 0 0-.886.757l-2.402 15.242a.538.538 0 0 0 .531.617h5.346l1.338-8.483.042-.267a.893.893 0 0 1 .883-.757h1.837c3.607 0 6.432-1.466 7.257-5.706.024-.125.045-.247.065-.367-.104-.055-.104-.055 0 0 .245-1.561.016-2.625-.584-3.206"
      fill="#009cde"
    />
    <path
      d="M16.033 17.756c-.19 1.22-.898 2.254-1.928 2.886-1.05.644-2.386.969-3.986.969H8.9l-1.277 8.106H2.543L4.92 13.675h5.783c1.6 0 2.936.324 3.986.967 1.03.633 1.738 1.666 1.928 2.886a5.09 5.09 0 0 1-.584-.772"
      fill="#012169"
    />
  </svg>
);

const StripeIcon = () => (
  <svg
    viewBox="0 0 60 25"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <path
      d="M5.419 9.394c0-.633.52-.877 1.381-.877 1.235 0 2.794.373 4.029 1.04V6.21C9.6 5.618 8.366 5.37 7.13 5.37 4.03 5.37 2 6.973 2 9.543c0 3.988 5.49 3.355 5.49 5.073 0 .747-.65 1.003-1.556 1.003C4.634 15.62 2.9 15.073 1.598 14.31v3.348c1.444.623 2.901.886 4.336.886 3.174 0 5.355-1.567 5.355-4.178-.013-4.306-5.87-3.54-5.87-4.972M17.547 2.968l-3.32.707-.013 10.863c0 2.002 1.504 3.478 3.505 3.478 1.11 0 1.921-.205 2.37-.45v-2.702c-.436.178-2.586.801-2.586-1.202V8.95h2.586V6.06h-2.586l.044-3.092M24.99 7.002l-.207-1.02h-2.976v11.9h3.443V10.23c.814-1.063 2.193-.87 2.629-.72V6.062c-.45-.167-2.1-.474-2.89.94M31.843 5.983h-3.456v11.9h3.456V5.982M31.843 2.39a1.727 1.727 0 1 0-3.456 0 1.727 1.727 0 0 0 3.456 0M39.945 5.657c-1.303 0-2.143.612-2.685 1.037l-.18-.81H34.2v15.897l3.443-.731.013-3.855c.553.4 1.369.97 2.276.97 2.3 0 4.4-1.846 4.4-5.913-.013-3.73-2.13-4.595-4.387-4.595m-.772 7.083c-.757 0-1.204-.27-1.516-.604l-.014-4.757c.34-.37.8-.628 1.53-.628 1.17 0 1.979 1.316 1.979 2.99 0 1.713-.795 2.999-1.979 2.999M58 11.675c0-3.316-1.6-5.93-4.66-5.93-3.073 0-4.933 2.614-4.933 5.904 0 3.898 2.2 5.877 5.352 5.877 1.54 0 2.703-.348 3.585-.838v-2.652c-.882.44-1.896.711-3.175.711-1.255 0-2.37-.44-2.512-1.97H57.96c0-.168.04-.836.04-1.102m-6.38-1.228c0-1.46.895-2.074 1.713-2.074.79 0 1.638.613 1.638 2.074H51.62z"
      fill="#6772e5"
    />
  </svg>
);

const VisaIcon = () => (
  <svg
    viewBox="0 0 60 20"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <path
      d="M26.58 2.004L23.375 18H19.5L22.71 2.004h3.87zM43.7 12.42l2.035-5.612.174-.96.938 4.714-1.148 1.858H43.7zm4.38 5.58H51.5L48.55 2.004H45.3a1.907 1.907 0 0 0-1.783 1.19L37.85 18h3.882l.772-2.13h4.738L47.738 18h.342zm-9.83-5.126c.015-3.77-5.212-3.978-5.178-5.656.01-.512.5-1.056 1.57-1.195a6.98 6.98 0 0 1 3.65.64l.65-3.035A9.965 9.965 0 0 0 35.4 1.7c-3.652 0-6.222 1.94-6.244 4.72-.024 2.057 1.834 3.206 3.232 3.888 1.438.698 1.92 1.146 1.914 1.77-.01.956-1.147 1.378-2.208 1.394-1.854.03-2.932-.5-3.79-.9l-.668 3.124c.86.394 2.45.738 4.097.754 3.874 0 6.41-1.913 6.424-4.876zM18.29 2.004L12.292 18H8.388L5.43 4.967C5.25 4.226 5.09 3.954 4.52 3.64A15.33 15.33 0 0 0 .77 2.378L.86 2.004H7.06a1.66 1.66 0 0 1 1.644 1.402l1.502 7.978 3.71-9.38h3.374z"
      fill="#1a1f71"
    />
  </svg>
);

const MastercardIcon = () => (
  <svg
    viewBox="0 0 38 24"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <rect width="38" height="24" rx="4" fill="white" />
    <circle cx="15" cy="12" r="7" fill="#EB001B" />
    <circle cx="23" cy="12" r="7" fill="#F79E1B" />
    <path d="M19 6.8a7 7 0 0 1 0 10.4A7 7 0 0 1 19 6.8z" fill="#FF5F00" />
  </svg>
);
const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Logo & Info */}
          <div className="lg:col-span-4 flex flex-col items-start gap-6">
            <Image src={logo} alt="PrizeFlow Logo" width={120} height={40} />
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Your trusted platform for online lottery and competitions. Win
              amazing prizes with fair and transparent draws.
            </p>
          </div>

          {/* Links: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h4>
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
            <h4 className="text-lg font-semibold mb-6 text-white">Follow Us</h4>
            <div className="flex gap-2 mb-6">
              <Link
                href="#"
                className="size-8.5 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white"
              >
                <Facebook className="size-4" />
              </Link>
              <Link
                href="#"
                className="size-8.5 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white"
              >
                <Twitter className="size-4" />
              </Link>
              <Link
                href="#"
                className="size-8.5 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white"
              >
                <Instagram className="size-4" />
              </Link>
              <Link
                href="#"
                className="size-8.5 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white"
              >
                <Linkedin className="size-4" />
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
            <span className="text-xs text-gray-500">Payment methods:</span>
            <div className="flex items-center gap-2">
              {/* PayPal */}
              <div className="w-14 h-8 bg-white rounded-md flex items-center justify-center px-2 py-1">
                <PayPalIcon />
              </div>

              {/* Stripe */}
              <div className="w-14 h-8 bg-white rounded-md flex items-center justify-center px-2 py-1">
                <StripeIcon />
              </div>

              {/* Visa */}
              <div className="w-14 h-8 bg-white rounded-md flex items-center justify-center px-2 py-1">
                <VisaIcon />
              </div>

              {/* Mastercard */}
              <div className="w-14 h-8 bg-white rounded-md flex items-center justify-center px-1 py-1">
                <MastercardIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
