import { useRef, useEffect, useState, useContext } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { ScreenContext } from "../store/screen";

import StickyImage from "./StickyImage";
import ScrollContentContainer from "./ScrollContentContainer";

export default function ParallaxSection({ image, children }) {
  const { screenHeight, screenWidth } = useContext(ScreenContext);
  const [cardPadding, setCardPadding] = useState(0);

  useEffect(() => {
    const padding = screenWidth > 768 ? 1 : 0.5;
    setCardPadding(padding);
  }, [screenWidth]);

  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    setContentHeight(contentRef.current.clientHeight);
  }, []);

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [screenHeight, -contentHeight - (screenHeight * 0.25)]
  );

  return (
    <motion.div
      ref={containerRef}
      style={{
      padding: `${cardPadding}rem`,
      height: `calc(100vh + ${contentHeight}px)`
    }}
    className="bg-light-blue relative scroll-smooth"
    >
      <StickyImage position={cardPadding} image={image}>
          <ScrollContentContainer ref={contentRef} y={y}>
            {children}
          </ScrollContentContainer>
      </StickyImage>
    </motion.div>
  );
}