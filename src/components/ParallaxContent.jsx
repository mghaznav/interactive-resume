import { forwardRef, useRef, useImperativeHandle } from "react";
import { motion } from "framer-motion";

const ParallaxContent = forwardRef(function ParallaxContent ({children, y}, ref) {
  const contentRef = useRef(null);

  useImperativeHandle(ref, () => ({
    clientHeight: () => {
      return contentRef.current.clientHeight;
    }
  }));

  return (
    <motion.article
      ref={contentRef}
      style={{
        y
      }}
    >
      {children}
    </motion.article>
  );
});

export default ParallaxContent;