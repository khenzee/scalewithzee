"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

const CTA = () => {
  const phoneNumber = "2348065043934";
  const whatsappMessage = encodeURIComponent(
    "Hello! I'm interested in scaling my business with ScaleWithZee."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  return (
    <section
      id="apply"
      className="bg-primary relative overflow-hidden"
    >
      <div className="absolute left-0 overflow-hidden top-0 w-full h-full">
        <Image
          src={"/assets/zeedevit-pattern1-08.svg"}
          width={1080}
          height={1080}
          alt="zeedevit badge"
          className="h-full w-full opacity-40 object-cover scale-120"
        />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          Become One of the 5 Businesses That Scale in 2025
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-10 max-w-2xl mx-auto"
        >
          Ready to transform your business? Let's discuss how we can help you
          scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className=" text-base font-semibold bg-background px-4 py-2 rounded-sm inline-flex gap-2 mb-4 group"
          >
            <MessageCircle
              size={24}
              className="group-hover:rotate-12 transition-transform"
            />
            <span>Message Us on WhatsApp</span>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          Limited to 5 businesses. Once slots are filled, applications close.
        </motion.p>
      </div>
    </section>
  );
};

export default CTA;
