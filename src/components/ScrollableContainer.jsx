import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import AnimatedCard from './AnimatedCard';

export default function ScrollableContainer({ title, children }) {
  // Get Card position according to screen size.
  const getPosition = (width) => {
    if (width < 640) {
      return 2;
    } else if (width < 768) {
      return 3;
    } else {
      return 4;
    }
  };

  const [cardPosition, setCardPosition] = useState(getPosition(window.innerWidth));
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setCardPosition(getPosition(window.innerWidth));
      setWindowHeight(window.innerHeight);
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


  // Scroll through content
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [windowHeight, -contentHeight - (windowHeight * 0.25)]
  );

  return (
    <motion.div
      ref={containerRef}
      style={{
      padding: `${cardPosition}rem`,
      height: `calc(100vh + ${contentHeight}px)`
    }}
    className="bg-[#F1faff] relative scroll-smooth"
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