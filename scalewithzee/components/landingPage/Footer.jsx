import React from "react";
import { Mail, MessageSquare, Clock } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <Link
              href="/"
              className="font-bold text-2xl tracking-tighter mb-4 inline-block"
            >
              ScaleWith<span className="text-primary">Zee</span>
            </Link>
            <p className="text-gray-500 max-w-sm">
              Helping service businesses grow with systems, automation, and
              strategy.
            </p>
          </div>

          <div id="contact">
            <h3 className="mb-6">
              Need clarity before applying?
            </h3>
            <div className="space-y-4">
              <Link
                href="https://wa.me/2348065043934"
                className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors"
              >
                <MessageSquare size={20} />
                <span>WhatsApp Us</span>
              </Link>
              <Link
                href="mailto:support@zeedevit.com"
                className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors"
              >
                <Mail size={20} />
                <span>zeedevit@gmail.com</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Zeedevit. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
