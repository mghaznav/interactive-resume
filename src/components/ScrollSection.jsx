import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollSection() {
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
      '0px 0px 00px rgba(0, 0, 0, 0.2)',
      '0px 0px 20px rgba(0, 0, 0, 0.5)',
      '0px 0px 00px rgba(0, 0, 0, 0.2)'
    ]
  );

  return (
    <section>
      <div className="h-[150vh] bg-blue-200 p-8 relative">
        <motion.article
          ref={contentCardRef}
          style={{
            height: `calc(100vh - ${64}px)`,
            scale,
            boxShadow
          }}
          className="h-[100vh] bg-white sticky top-8 z-0 rounded-3xl p-3"
        >
          <p>This is where the content will be</p>
        </motion.article>
      </div>
      {/* <div className="h-96 bg-white">
        <article>
          <h1>Additional content will go here</h1>
        </article>
      </div> */}
    </section>
  );
}