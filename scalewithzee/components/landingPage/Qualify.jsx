"use client";
import React from "react";
import { motion } from "motion/react";
import { CheckSquare } from "lucide-react";
import { SECTION_PADDING_CLASS, HEADING_CLASS, CARD_CLASS } from "./constants";

const Qualify = () => {
  const checks = [
    "You run a service-based business (salon, spa, clinic, fitness, repair, etc.)",
    "Your business is at least 6 months active",
    "You have an active social media account",
    "You want more customers without working more hours",
    "You are ready to invest at least $60/month + ad budget",
  ];

  return (
    <section className={` bg-green-50/50`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="">This Program Is For You If:</h2>
        </motion.div>

        <div className="bg-white rounded-sm overflow-hidden">
          <div className="p-8 md:p-12">
            <ul className="space-y-6">
              {checks.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center group"
                >
                  <div className="w-8 h-8 rounded-lg bg-green-100 text-primary flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <CheckSquare size={18} />
                  </div>
                  <span className="text-lg font-medium">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="bg-primary/10 p-4 md:p-6 text-center">
            <p className="font-semibold text-sm md:text-base uppercase tracking-wider">
              Note: Only 5 businesses will be accepted. Selection is based on
              readiness, not size.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualify;
