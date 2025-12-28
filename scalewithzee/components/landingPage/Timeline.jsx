"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Create a smooth vertical line animation
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const months = [
    {
      month: "Month 1",
      title: "Foundation",
      desc: "We build your high-converting website, set up your booking system, and get you listed on Google Maps immediately.",
    },
    {
      month: "Month 2",
      title: "Visibility",
      desc: "Targeted ads go live. We start driving traffic to your new system to generate your first automated leads.",
    },
    {
      month: "Month 3",
      title: "Optimization",
      desc: "We analyze the data. Ad campaigns are tweaked for lower costs, and follow-up automations are refined.",
    },
    {
      month: "Month 4",
      title: "Retention",
      desc: "Focus shifts to keeping customers. We launch email campaigns and referral systems to turn one-time buyers into regulars.",
    },
    {
      month: "Month 5",
      title: "Scale",
      desc: "Doubling down on what works. We increase ad spend on winning campaigns and expand your reach.",
    },
    {
      month: "Month 6",
      title: "Transition",
      desc: "Review a full 6 months of growth. You can renew for continued growth or take over the system yourself.",
    },
  ];

  return (
    <section
      id="timeline"
      ref={containerRef}
      className="py-24 bg-zinc-950 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=" text-white mb-6"
          >
            A Roadmap to{" "}
            <span className="text-primary">Predictable Growth</span>
          </motion.h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            No guessing. No random tactics. Just a proven 6-month process
            designed to scale your business.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* The Line */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-800 -translate-x-1/2 rounded-full"></div>
          <motion.div
            style={{ height }}
            className="absolute left-[19px] md:left-1/2 top-0 w-[2px] bg-primary -translate-x-1/2 rounded-full origin-top shadow-[0_0_12px_rgba(115,191,68,0.8)]"
          />

          <div className="space-y-12">
            {months.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } relative group`}
              >
                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />

                {/* Timeline Node */}
                <div className="absolute left-[19px] md:left-1/2 -translate-x-1/2 w-10 h-10 bg-zinc-950 border-4 border-zinc-800 rounded-full z-10 flex items-center justify-center shadow-lg group-hover:border-primary transition-colors duration-300">
                  <div className="w-3 h-3 bg-zinc-600 rounded-full group-hover:bg-primary transition-colors duration-300"></div>
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 pl-16 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  } w-full text-left`}
                >
                  <div className="bg-zinc-900/50 backdrop-blur-sm p-6 md:p-8 rounded-sm border border-zinc-800 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 text-left">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4">
                      {item.month}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
