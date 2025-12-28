"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  SECTION_PADDING_CLASS,
  HEADING_CLASS,
  SUBHEADING_CLASS,
} from "./constants";

const About = () => {
  return (
    <section id="about" className={SECTION_PADDING_CLASS}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full"
        >
          {/* Placeholder for About Image/Visual - using mascot if available or generic pattern */}
          <div className="relative aspect-square rounded-sm overflow-hidden shadow-inner">
            <Image
              src="/assets/my-profile.jpeg"
              alt="Zeedevit Pattern"
              width={1000}
              height={1000}
              className="object-cover relative bottom-10 opacity-80"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
            About Zeedevit
          </span>
          <h2 className={`${HEADING_CLASS} text-left mb-6`}>
            Built By Zeedevit. Designed For Growth.
          </h2>
          <p className=" mb-8 leading-relaxed">
            Zeedevit is a digital solutions company focused on helping small and
            midsize service businesses grow with systems, automation, and
            performance-driven strategy.
          </p>
          <p className=" mb-8 leading-relaxed">
            We believe every serious business deserves tools that save time,
            build trust, and create consistent income — without confusion or
            complexity.
          </p>
          <div className="pl-6 border-l-4 border-primary">
            <p className="text-xl font-medium text-gray-900 italic">
              "We build systems that grow with you."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
