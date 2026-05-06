import { motion } from 'framer-motion';

const Report = () => {
  const activities = [
    {
      date: "2026.05.06",
      title: "メディア掲載：田中圭太郎氏による記事",
      description: "ジャーナリストの田中圭太郎氏による、国際卓越研究大学制度に関する記事「ルポ：国立大学の崩壊」が公開されました。本件の制度改悪と学生の窮状に関しても、連載の中で取り上げられる予定です。",
      link: "https://gendai.media/articles/-/166870",
      isNew: true,
    },
    {
      date: "2026.04.21",
      title: "宮城県庁にて記者会見を実施",
      description: "当会の有志が宮城県庁にて記者会見を行い、本件について周知と、学生の窮状を訴えました。",
      link: null,
    },
    {
      date: "2026.04.13",
      title: "「東北大学の大学院生支援制度改悪に反対する会」X(@antiLEAP)開設",
      description: "本件について発信するためのXアカウントを作成しました。問題の概要をまとめたポストは37万表示を記録し、注目を集めました。",
      link: null,
    },
    {
      date: "2026.04.09",
      title: "「東北大学の大学院生支援制度改悪に反対する会」Discordサーバー開設",
      description: "本件について議論・行動するためのDiscordサーバーを立ち上げました。",
      link: null,
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-10 leading-none">
            活動の記録
        </h1>
      </motion.div>

      <div className="space-y-12">
        {activities.map((act, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative pl-8 border-l-2 ${act.isNew ? 'border-accent' : 'border-gray-800'}`}
          >
            <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-none rotate-45 ${act.isNew ? 'bg-accent' : 'bg-gray-800'}`} />
            
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-4">
              <span className={`font-black text-xl tracking-tighter ${act.isNew ? 'text-accent' : 'text-gray-500'}`}>
                {act.date}
              </span>
              {act.isNew && (
                <span className="bg-accent text-white text-xs font-black px-2 py-1 uppercase tracking-widest w-fit">
                  Latest
                </span>
              )}
            </div>

            <h2 className="text-2xl md:text-4xl font-black mb-4 leading-tight">
              {act.title}
            </h2>
            
            <p className="text-gray-400 text-lg font-bold leading-relaxed mb-6">
              {act.description}
            </p>

            {act.link && (
              <a 
                href={act.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white border-2 border-white px-6 py-2 font-black hover:bg-white hover:text-black transition-all"
              >
                記事を読む ➔
              </a>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-24 p-8 bg-zinc-900 border-2 border-accent text-center">
        <h3 className="text-2xl font-black mb-4">取材・お問い合わせ</h3>
        <p className="text-gray-400 font-bold mb-8 text-lg">
          当会では、メディア関係者の方々からの取材を随時受け付けています。
        </p>
          連絡先は CONTACT ページを参照してください。
      </div>
    </div>
  );
};

export default Report;