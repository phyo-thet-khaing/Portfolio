import { Mail, Phone } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

const ContactSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Text */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                Let’s Work Together
              </h2>

              <p className="mt-4 max-w-md text-neutral-600 dark:text-neutral-400">
                Have a project idea or want to discuss an opportunity? Feel free
                to reach out. I’m always open to building interesting web
                applications and learning new things.
              </p>

              <div className="mt-6 flex flex-col gap-3 text-sm">
                <a
                  href="mailto:yourmail@gmail.com"
                  className="flex items-center gap-3 text-neutral-700 transition hover:text-black dark:text-neutral-300 dark:hover:text-white"
                >
                  <Mail size={20} />
                  phyothetkhing2002@gmail.com
                </a>

                <a
                  href="tel:+959123456789"
                  className="flex items-center gap-3 text-neutral-700 transition hover:text-black dark:text-neutral-300 dark:hover:text-white"
                >
                  <Phone size={20} />
                  +95 9 52522465
                </a>
              </div>
            </div>

            {/* Contact Card */}
            <div className="flex flex-col gap-4">
              <a
                href="https://github.com/phyo-thet-khaing"
                target="_blank"
                className="flex items-center justify-between rounded-xl border border-neutral-200 p-4 transition hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900"
              >
                <div className="flex items-center gap-3">
                  <BsGithub size={22} />
                  <span className="font-medium text-neutral-900 dark:text-white">
                    GitHub
                  </span>
                </div>

                <span className="text-neutral-400">↗</span>
              </a>

              <a
                 href="https://www.linkedin.com/in/phyo-thet-khaing-10baab2aa/"
                target="_blank"
                className="flex items-center justify-between rounded-xl border border-neutral-200 p-4 transition hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900"
              >
                <div className="flex items-center gap-3">
                  <LiaLinkedin size={24} />
                  <span className="font-medium text-neutral-900 dark:text-white">
                    LinkedIn
                  </span>
                </div>

                <span className="text-neutral-400">↗</span>
              </a>

              <a
                href="https://www.facebook.com/share/1D44SmgzuP/"
                target="_blank"
                className="flex items-center justify-between rounded-xl border border-neutral-200 p-4 transition hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900"
              >
                <div className="flex items-center gap-3">
                  <FaFacebook size={22} />
                  <span className="font-medium text-neutral-900 dark:text-white">
                    Facebook
                  </span>
                </div>

                <span className="text-neutral-400">↗</span>
              </a>

              <button className="mt-2 rounded-xl bg-neutral-900 px-6 py-3 font-medium text-white transition hover:bg-neutral-700 dark:bg-white dark:text-black dark:hover:bg-neutral-200">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
