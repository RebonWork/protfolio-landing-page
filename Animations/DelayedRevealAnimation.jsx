import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const DelayRevealAnimate = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();
  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView, animation]);
  return (
      <motion.div
        ref={ref}
        animate={animation}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 75 },
        }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        {children}
      </motion.div>
  );
};

export default DelayRevealAnimate;
