"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { AuroraBackground } from "./aurora-background";

interface GradientHeroProps {
  title: string;
  description: string;
  buttonText: string;
  /**
   * Optional: If this is not the main page heading, set to false to use <h2> instead of <h1>.
   */
  isMainHeading?: boolean;
  /**
   * Optional: aria-label for the section if you want to override the default.
   */
  ariaLabel?: string;
  /**
   * Height of the hero section. Options: 'sm', 'md', 'lg', 'full-screen'.
   */
  height?: 'sm' | 'md' | 'lg' | 'full-screen';
}

export default function GradientHero({ title, description, buttonText, isMainHeading = true, ariaLabel, height = 'md' }: GradientHeroProps) {
  // Respect user reduced motion preference
  const shouldReduceMotion = useReducedMotion();
  const HeadingTag = isMainHeading ? "h1" : "h2";
  // Map height prop to Tailwind classes
  const heightClass =
    height === 'sm' ? 'h-72' :
    height === 'md' ? 'h-96' :
    height === 'lg' ? 'h-[32rem]' :
    height === 'full-screen' ? 'h-screen' : '';
  return (
    <section
      aria-label={ariaLabel || title}
      className={`w-screen flex justify-center items-center ${heightClass}`}
    >
      <AuroraBackground>
        <motion.div
          {...(!shouldReduceMotion && {
            initial: { opacity: 0.0, y: 40 },
            whileInView: { opacity: 1, y: 0 },
            transition: {
              delay: 0.3,
              duration: 0.7,
              ease: "easeInOut",
            },
          })}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <HeadingTag className="text-3xl md:text-5xl font-bold dark:text-white text-center">
            {title}
          </HeadingTag>
          <p
            className="font-extralight text-base md:text-xl dark:text-neutral-200 pb-4"
            aria-live="polite"
            id="gradient-hero-desc"
          >
            {description}
          </p>
          <button
            className="bg-black dark:bg-white rounded-full text-white dark:text-black px-4 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black dark:focus-visible:ring-white"
            aria-label={buttonText}
            aria-describedby="gradient-hero-desc"
          >
            {buttonText}
          </button>
        </motion.div>
      </AuroraBackground>
    </section>
  );
}
