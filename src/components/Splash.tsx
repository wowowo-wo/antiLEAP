import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import p5 from 'p5';

interface SplashProps {
  onComplete: () => void;
}

const Splash = ({ onComplete }: SplashProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(containerRef.current!);
        p.frameRate(24);
      };

      p.draw = () => {
        p.background(0, 40);
        p.stroke(255, 0, 0, 100);
        p.strokeWeight(1);
        if (p.random() > 0.8) {
          const y = p.random(p.height);
          p.line(0, y, p.width, y);
        }
      };

      p.windowResized = () => p.resizeCanvas(p.windowWidth, p.windowHeight);
    };

    const p5Instance = new p5(sketch);
    return () => p5Instance.remove();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden cursor-pointer"
      onClick={onComplete}
    >
      <div ref={containerRef} className="absolute inset-0 z-0 opacity-50" />
      
      <div className="z-10 text-center px-6">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-7xl font-black text-white leading-none tracking-tighter mb-8"
        >
          東北大学の大学院生支援制度<br />
          改悪に反対する会
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-accent text-xl md:text-3xl font-black tracking-tighter leading-relaxed"
        >
          国際卓越研究大学認定以降、<br />
          東北大学の博士後期課程学生支援制度は改悪される一方です。<br />
          私たちは、この状況を是正することを要求します。
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 text-gray-500 animate-pulse font-bold tracking-[0.3em] text-sm md:text-base"
        >
          CLICK TO ENTER
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Splash;