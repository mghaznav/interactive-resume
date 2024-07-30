import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollSection() {
  const getWidth = (width) => {
    if (width < 640) {
      return 2;
    } else if (width < 768) {
      return 3;
    } else {
      return 4;
    }
  };

  const [height, setHeight] = useState(getWidth(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setHeight(getWidth(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll Animations
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
      '20px 20px 60px #bebebe, -20px -20px 60px #bebebe',
      '20px 20px 60px #bebebe, -20px -20px 60px #ffffff'
    ]
  );

  return (
    <motion.section
      style={{
      padding: `${height}rem`
    }}
    className="h-[150vh] bg-[#e0e0e0] relative"
    >
      <motion.article
        ref={contentCardRef}
        style={{
          height: `calc(100vh - ${height * 2}rem)`,
          top: `${height}rem`,
          scale,
          boxShadow
        }}
        className="h-[100vh] bg-white sticky z-0 rounded-3xl p-3"
      >
        <p>This is where the content will be</p>
      </motion.article>
    </motion.section>
  );
}