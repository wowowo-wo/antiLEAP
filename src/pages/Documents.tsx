import { motion } from 'framer-motion';

const Documents = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20"
      >
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-10 leading-none">
          関連資料
        </h1>
        <p className="text-xl md:text-2xl font-bold pl-4 text-gray-300">
          本件に関連する資料をまとめた置き場です。準備中。
        </p>
      </motion.div>
    </div>
  );
};

export default Documents;