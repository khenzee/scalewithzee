"use client";
import React from "react";
import { motion } from "motion/react";
import { Check, HelpCircle, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

const Pricing = () => {
  return (
    <section id="pricing" className="">
      <div className="">
        <div className="md:text-center mb-16 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            Premium Growth, Without the{" "}
            <span className="text-primary">Premium Price Tag</span>
          </motion.h2>
          <p className="">
            Get a full digital agency setup for less than the cost of a daily
            coffee. No hidden fees, just results.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
          {/* Value Breakdown Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col"
          >
            <div className="mb-8">
              <h3 className="mb-2">
                What's Included
              </h3>
              <p className="text-gray-500">
                Everything you need to scale your business.
              </p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Custom High-Converting Website",
                "Automated Booking System",
                "Google Maps & Business Profile Optimization",
                "Lead Generation & Ad Setup",
                "Email Marketing & Follow-up Automations",
                "Weekly Strategy & Growth Guidance",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} className="text-primary" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-gray-50 rounded-sm p-6 border border-gray-100">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 font-medium">
                  Real Market Value
                </span>
                <span className="text-gray-400 line-through decoration-red-400 decoration-2 text-lg">
                  $2,800+
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-900 font-bold">You Save</span>
                <span className="text-green-600 font-bold">Over 85%</span>
              </div>
            </div>
          </motion.div>

          {/* Pricing Action Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-[480px] bg-gray-900 text-white rounded-sm p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col justify-center"
          >
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10 text-center">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary font-bold text-sm tracking-widest uppercase mb-8 border border-primary/20">
                Limited Offer
              </div>

              <div className="flex items-center justify-center gap-1 mb-2">
                <span className="text-6xl md:text-7xl font-bold tracking-tight">
                  $60
                </span>
                <div className="text-left">
                  <span className="block text-gray-400 text-lg font-medium leading-none">
                    /mo
                  </span>
                </div>
              </div>
              <p className="text-gray-400 mb-10 text-lg">
                For 6 months (Total: $360)
              </p>

              <Link href="#apply" className="w-full bg-primary hover:bg-primary text-white text-lg font-semibold py-2 px-4 rounded-sm transition-all inline-flex items-center justify-center gap-3 group">
                Start Application
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <p className="mt-6 text-sm text-gray-500">
                Only 5 spots available for this cohort.
              </p>

              <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col gap-3 text-sm text-gray-400">
                <div className="flex items-center justify-center gap-2">
                  <ShieldCheck size={16} />
                  <span>No hidden setup fees</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <HelpCircle size={16} />
                  <span>Ad budget paid separately</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
