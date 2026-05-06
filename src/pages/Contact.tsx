import { motion } from 'framer-motion';

const Contact = () => {
  const contactLinks = [
    {
      title: "X (Main / New)",
      label: "@anti_LEAP", 
      url: "https://x.com/anti_LEAP",
      description: "最新の情報発信確認、DMでの連絡などはこちらにお願いします。"
    },
    {
      title: "X (Old)",
      label: "@antiLEAP", 
      url: "https://x.com/antiLEAP",
      description: "現在Xサーバーのトラブルによりログインできません。"
    }
  ];

  const boxStyle = "border-4 border-white transition-all duration-300";

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-10 leading-none">
            連絡先
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <section className={`${boxStyle} p-8 bg-black hover:border-accent group`}>
          <div className="mb-6">
            <h2 className="text-3xl font-black italic uppercase">E-mail</h2>
            <div className="h-1 w-12 bg-accent mt-1"></div>
          </div>
          <p className="text-zinc-400 font-bold font-gray-80 mb-8 leading-relaxed h-20">
            メディア関係者の方や情報提供、ご意見などはこちらにお送りください。
          </p>
          <a 
            href="mailto:antiLEAP@gmail.com" 
            className="text-xl md:text-2xl font-black break-all hover:text-accent underline decoration-4 underline-offset-8 transition-colors"
          >
            anti.leap@gmail.com
          </a>
        </section>

        <div className="flex flex-col gap-8">
          {contactLinks.map((link, i) => (
            <a 
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${boxStyle} block p-6 bg-black hover:border-accent hover:bg-zinc-900 group`}
            >
              <h3 className="text-accent font-black text-xs uppercase tracking-[0.2em] mb-2">
                {link.title}
              </h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-2xl font-black italic">{link.label}</span>
                <span className="text-accent group-hover:translate-x-2 transition-transform">➔</span>
              </div>
              <p className="text-zinc-500 text-sm font-bold">
                {link.description}
              </p>
            </a>
          ))}
        </div>
      </div>

      <motion.div 
        whileHover={{ scale: 1.01 }}
        className={`bg-accent p-8 md:p-10 ${boxStyle} flex flex-col md:flex-row justify-between items-center gap-8`}
      >
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-black text-white italic tracking-tighter mb-4 uppercase">Discord</h2>
          <p className="font-bold text-zinc-400 text-base md:text-lg leading-snug">
            東北大学関係者で本件に関心がある人が集うDiscordサーバーです。<br className="hidden md:block" />
            dc.tohoku.ac.jpドメインのgoogleアカウントでフォーム回答後、確認メッセージで招待リンクを送付します。回答に使用したアカウントは記録されず、匿名性は完全に担保されます。
          </p>
        </div>
        <a 
          href="https://forms.gle/LfQ2zrAot9QbYWXTA" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto text-center bg-white text-black font-black px-8 py-5 hover:bg-black hover:text-white transition-all uppercase tracking-widest text-xl border-4 border-transparent hover:border-white"
        >
          参加する
        </a>
      </motion.div> 
    </div>
  );
};

export default Contact;