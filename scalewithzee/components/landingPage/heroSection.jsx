"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowDownRight, ArrowRight } from "lucide-react";


const HeroSection = () => {

  const FOCUS =['delivery', 'sales', 'growth']
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % FOCUS.length);
    }, 3000); // Changed to 1 second

    return () => clearInterval(timer);
  }, [FOCUS.length]);

  const itemHeight = "1.2em"; // Approximate line height

  return (
    <section className=" text-shadow-green-800 relative bg-primary">
      <div className="absolute left-0 overflow-hidden top-0 w-full h-full">
        <Image
          src={"/assets/zeedevit-pattern1-08.svg"}
          width={1080}
          height={1080}
          alt="zeedevit badge"
          className="h-full w-full opacity-40 object-cover scale-120"
        />
      </div>
      <div className="md:text-center md:absolute mb-4 mt-16 md:mt-8">
        <div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              display: "inline-block",
              transformOrigin: "center",
            }}
          >
            <Image
              src={"/assets/zeedevit-mascot.svg"}
              width={120}
              height={120}
              alt="zeedevit badge"
              className="md:w-60"
            />
          </motion.div>
        </div>
      </div>
      <div className="md:text-center md:mt-24 max-w-4xl mx-auto my-auto relative ">
        <h1 className="capitalize">
          we build system for
          <br />
          your business, So You Can <br />
          <span className="text-white"> Focus on</span>{" "}
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            className="text-white"
          >
            {FOCUS[currentIndex]}
          </motion.span>
        </h1>
        <div className="mt-12 md:mt-8">
          <div className="text-left md:text-center max-w-xl mx-auto">
            <div>
              <Link
                href={"#apply"}
                className=" text-base font-semibold bg-background px-4 py-2 rounded-sm inline-block md:hidden mb-4 group"
              >
                Join SCALEWITHZEE
                <ArrowDownRight
                  className="inline-block ml-2 group-hover:ml-6 transition-all ease-in-out"
                  size={24}
                />
              </Link>
            </div>
            <p>
              The 6-month growth program from Zeedevit designed to attract
              customers, automate bookings, and increase sales for service-based
              businesses.
            </p>
            <div className="mt-4">
              <Link
                href={"#apply"}
                className="md:inline-block hidden text-base font-semibold bg-background px-4 py-2 rounded-sm  mb-4 group"
              >
                Join SCALEWITHZEE
                <ArrowRight
                  className="inline-block ml-2 group-hover:ml-6 transition-all ease-in-out"
                  size={24}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;


