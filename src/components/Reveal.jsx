import { motion } from "framer-motion";

const Reveal = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className={className}>
      {children}
    </motion.div>
  );
};

export default Reveal;
