import { motion, AnimatePresence } from "framer-motion";

export default function SceneTransition({ show, children }) {
  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          key="scene"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-[800px] h-[500px] border-4 border-purple-700 rounded-2xl shadow-xl overflow-hidden"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
