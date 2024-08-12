import { forwardRef, useRef, useImperativeHandle } from "react";
import { motion } from "framer-motion";

const ScrollContentContainer = forwardRef(function ScrollContentContainer ({children, y}, ref) {
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
      className="px-24"
    >
      {children}
    </motion.article>
  );
});

export default ScrollContentContainer;