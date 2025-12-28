"use client";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  MessageCircle,
  XCircle,
  Globe,
  Users,
  Clock,
  AlertTriangle,
} from "lucide-react";

// Challenge card data with "humanized" content
const challenges = [
  {
    icon: <MessageCircle className="w-8 h-8 text-red-500" />,
    title: "Stuck in the DMs?",
    description:
      "Accepting bookings via WhatsApp or DM is prone to errors, missed messages, and lost income.",
  },
  {
    icon: <Globe className="w-8 h-8 text-red-500" />,
    title: "Invisible Online?",
    description:
      "Without a website, potential customers can't find you on Google. You don't exist to them.",
  },
  {
    icon: <Users className="w-8 h-8 text-red-500" />,
    title: "Customer Chaos?",
    description:
      "No email list means no way to bring customers back. You're always chasing new leads.",
  },
  {
    icon: <Clock className="w-8 h-8 text-red-500" />,
    title: "Time Poor?",
    description:
      "Manual follow-ups drain your energy. You should vary be working on your craft, not admin.",
  },
  {
    icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
    title: "Ad Waste?",
    description:
      "Running ads without a converting website is just burning money. Stop the leak.",
  },
  {
    icon: <XCircle className="w-8 h-8 text-red-500" />,
    title: "Losing to Systems?",
    description:
      "Competitors with better booking systems are winning your clients while you sleep.",
  },
];

const Challenge = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="challenge"
      ref={ref}
      className=" bg-gray-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className=" mb-6">
            Why Most Service Businesses{" "}
            <span className="text-red-500">Hit a Ceiling</span>
          </h2>
          <p className=" ">
            Running a service business is hard. It's even harder when you're
            doing everything manually.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((item, index) => (
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
              <div className="p-3 bg-red-50 rounded-2xl mb-6">{item.icon}</div>
              <h3 className="mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 md:text-center"
        >
          <h3 className="">
            You deserve a system that works as hard as you do.
          </h3>
          <h3 className="text-primary">
            That's where ScaleWithZee comes in.
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default Challenge;
