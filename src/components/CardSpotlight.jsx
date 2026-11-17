import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";

// Aceternity UI Card Spotlight interaction, adapted to the portfolio's color system.
export function CardSpotlight({ children, className = "", radius = 360, color = "rgba(156,143,240,0.13)" }) {
  const mouseX = useMotionValue(-radius);
  const mouseY = useMotionValue(-radius);
  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, ${color}, transparent 82%)`;

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  }

  function handleMouseLeave() {
    mouseX.set(-radius);
    mouseY.set(-radius);
  }

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`spotlight-card ${className}`}
    >
      <motion.div aria-hidden="true" className="spotlight-glow" style={{ background }} />
      <div className="spotlight-content">{children}</div>
    </motion.article>
  );
}
