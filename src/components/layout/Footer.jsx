import {
  faFacebook,
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail, ZodiacTaurus } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800">
      <div className="container flex flex-col items-center justify-between px-6 py-4 mx-auto max-w-7xl sm:flex-row">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 text-lg font-semibold text-black dark:text-white"
        >
          <ZodiacTaurus
            size={22}
            className="transition-transform duration-300 hover:rotate-12"
          />
          <span>Phyo Thet Khaing</span>
        </a>

        {/* Copyright */}
        <p className="mt-3 text-sm text-center text-neutral-600 dark:text-neutral-400 sm:mt-0">
          © {new Date().getFullYear()} Phyo Thet Khaing. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4 mt-3 sm:mt-0">
          <a
            href="https://github.com/phyo-thet-khaing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/phyo-thet-khaing-10baab2aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
          </a>

          <a
            href="https://x.com/PhyoThetKhing3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
            aria-label="X"
          >
            <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5" />
          </a>

          <a
            href="mailto:phyothetkhing2002@gmail.com"
            className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>

          <a
            href="https://www.facebook.com/share/1D44SmgzuP/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-blue-600 transition-colors"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
