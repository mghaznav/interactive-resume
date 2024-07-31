import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

export default function AnimatedCard({ position, title, children }) {
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
      '20px 20px 60px #bebebe, -20px -20px 60px #ffffff',
      '20px 20px 60px #bebebe, -20px -20px 40px #bebebe',
      '20px 20px 60px #ffffff, -20px -20px 60px #ffffff'
    ]
  );

  return (
    <motion.section
      ref={contentCardRef}
      style={{
        height: `calc(100vh - ${position * 2}rem)`,
        top: `${position}rem`,
        scale,
        boxShadow,
      }}
      className="h-[100vh] bg-white sticky z-0 rounded-3xl p-16 overflow-hidden"
    >
      <h1 className='text-4xl text-navy-blue mb-8'>{title}</h1>
      {children}
    </motion.section>
  );
}