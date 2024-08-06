import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import ParallaxImage from "./ParallaxImage";
import ParallaxContent from "./ParallaxContent";

export default function ScrollableContainer({ image, children }) {
  // Get Card position according to screen size.
  const getPosition = (width) => {
    if (width < 768) {
      return 0.5;
    } else {
      return 1;
    }
  };

  const [cardPosition, setCardPosition] = useState(getPosition(window.innerWidth));
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setCardPosition(getPosition(window.innerWidth));
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Get height of the content
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
    className="bg-[#f1faff] relative scroll-smooth"
    >
      <ParallaxImage position={cardPosition} image={image}>
          <ParallaxContent ref={contentRef} y={y}>
            {children}
          </ParallaxContent>
      </ParallaxImage>
    </motion.div>
  );
}