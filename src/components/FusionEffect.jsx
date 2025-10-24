import { motion, AnimatePresence } from "framer-motion";

export default function FusionEffect({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="fusion"
          className="fixed inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.4 }}
          exit={{ opacity: 0, scale: 2 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.div
            className="w-64 h-64 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-70"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
