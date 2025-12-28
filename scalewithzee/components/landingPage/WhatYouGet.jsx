"use client";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Eye, MousePointerClick, TrendingUp, Check } from "lucide-react";
import {
  SECTION_PADDING_CLASS,
  HEADING_CLASS,
  SUBHEADING_CLASS,
  CARD_CLASS,
} from "./constants";

const WhatYouGet = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pillars = [
    {
      icon: <Eye className="w-10 h-10 text-primary" />,
      title: "Visibility",
      features: [
        "Google Business + Google Maps listing",
        "ChatGPT booking integration",
        "A professional brand presence customers trust",
      ],
    },
    {
      icon: <MousePointerClick className="w-10 h-10 text-primary" />,
      title: "Conversion",
      features: [
        "A functional, modern website designed to convert",
        "Automated booking and inquiry system",
        "Lead capture and email follow-up tools",
      ],
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-primary" />,
      title: "Growth",
      features: [
        "Targeted ads setup (Google, Meta, TikTok)",
        "Weekly growth guidance & strategy",
        "Access to custom SaaS solutions",
      ],
    },
  ];

  return (
    <section ref={ref} className={SECTION_PADDING_CLASS}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="">What We Build For You</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white p-6 rounded-sm border border-gray-100 shadow-sm flex flex-col items-start transition-all"
            >
              <div className="mb-6 p-3 bg-green-50 rounded-2xl inline-block">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6">{pillar.title}</h3>
              <ul className="space-y-4">
                {pillar.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default WhatYouGet;
