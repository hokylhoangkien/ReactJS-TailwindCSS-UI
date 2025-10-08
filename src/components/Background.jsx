import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import anh1 from "../assets/img/anh1.jpg";
import anh2 from "../assets/img/anh2.jpg";
import anh3 from "../assets/img/anh3.jpg";
import anh4 from "../assets/img/anh4.jpg";
import anh5 from "../assets/img/anh5.jpg";
const images = [anh1, anh2, anh3, anh4, anh5];

export default function Background() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 7000); // mỗi ảnh hiện 7s (6.25s đứng + 0.75s chuyển)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={`${images[index]}?auto=format&fit=crop&w=1600&q=80`}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, x: 40, scale: 1.05 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -40, scale: 1.05 }}
          transition={{
            duration: 0.75,
            ease: "easeInOut",
          }}
        />
      </AnimatePresence>

      {/* Overlay tạo chiều sâu và độ tương phản */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
    </div>
  );
}
