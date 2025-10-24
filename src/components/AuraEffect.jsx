import { useEffect } from "react";
import { motion } from "framer-motion";
import { Howl } from "howler";

export default function AuraEffect({ visible, color = "violet" }) {
  useEffect(() => {
    let auraSound;
    if (visible) {
      auraSound = new Howl({ src: ["/sounds/aura.mp3"], loop: true, volume: 0.4 });
      auraSound.play();
    }
    return () => auraSound && auraSound.stop();
  }, [visible]);

  if (!visible) return null;

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        className={`w-48 h-48 rounded-full blur-3xl opacity-60 bg-${color}-500/60`}
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
