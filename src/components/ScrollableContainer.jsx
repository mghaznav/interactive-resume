import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import AnimatedCard from './AnimatedCard';

export default function ScrollableContainer({ title, children }) {
  // Get Card position according to screen size.
  const getWidth = (width) => {
    if (width < 640) {
      return 2;
    } else if (width < 768) {
      return 3;
    } else {
      return 4;
    }
  };

  const [cardPosition, setCardPosition] = useState(getWidth(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setCardPosition(getWidth(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Get height of the content inside the children prop
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    setContentHeight(contentRef.current.clientHeight);
  }, []);


  // Get container scroll progress
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Add scroll to content according to container scroll progress
  const vhToPx = (vh) => window.innerHeight * (vh / 100);
  const contentStart = vhToPx(100);
  const contentEnd = -contentHeight - vhToPx(25);

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [contentStart, contentEnd]
  );

  return (
    <motion.div
      ref={containerRef}
      style={{
      padding: `${cardPosition}rem`,
      height: `calc(100vh + ${contentHeight}px)`
    }}
    className="bg-[#e0e0e0] relative scroll-smooth"
    >
      <AnimatedCard position={cardPosition} title={title}>
        <div
          className='w-full overflow-hidden'
          style={{
              clipPath: `inset(0)`
          }}
        >
          <motion.article
            ref={contentRef}
            style={{
              y
            }}
            className="flex w-full flex-col items-center justify-center inset-0 gap-4"
          >
            {children}
          </motion.article>
        </div>
      </AnimatedCard>
    </motion.div>
  );
}