import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

export default function StickyImage({ image, position, children }) {
  const contentCardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: contentCardRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 1, 0.8]
  );

  const boxShadow = useTransform(
    scrollYProgress,
    [0.2, 0.5, 0.8],
    [
      '2px 5px 5px #bebebe, -2px -5px 5px #ffffff',
      '2px 5px 10px #bebebe, -2px -5px 10px #bebebe',
      '2px 5px 5px #ffffff, -2px -5px 5px #ffffff'
    ]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0.25, 0.5, 0.75],
    [0, 1, 0]
  );

  return (
    <motion.section
      ref={contentCardRef}
      style={{
        height: `calc(100vh - ${position * 2}rem - 5rem)`,
        top: `calc(5rem + ${position}rem)`,
        backgroundImage: `url(${image})`,
        scale,
        boxShadow
      }}
      className="bg-cover bg-center sticky w-full rounded-xl z-0 overflow-hidden"
    >
      <motion.div
        style={{opacity}}
        className="absolute inset-0 bg-white"
      />
      {children}
    </motion.section>
  );
}