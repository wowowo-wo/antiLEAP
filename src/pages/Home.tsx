import { motion } from 'framer-motion';
import Im06 from '../assets/06.jpg';
import Im20 from '../assets/20.jpg';

const Home = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <motion.section 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-24"
      >
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-10 leading-none">
          概要
        </h1>

        <div className="border-l-8 border-accent pl-6 py-4 mb-16 bg-zinc-900/50">
          <p className="text-2xl md:text-4xl font-black leading-tight text-white tracking-tighter">
           「国際卓越研究大学」という輝かしい看板の裏で、<br />
            学生支援は著しく改悪。
          </p>
        </div>
        <article className="space-y-8 text-xl md:text-2xl font-bold leading-relaxed text-gray-300">
            <p>
            2024年12月、東北大学は10兆円規模の大学ファンドからの支援を受けて世界最高水準の研究力を目指す「国際卓越研究大学」の認定を受けました。<br />
            しかし、2026年度4月から開始された新しい博士学生支援制度(LEAP)の内容は、その立派な肩書とは裏腹に、博士後期課程学生への生活費支援水準をそれまでの月額18万円から
            <span className="text-accent">生活保護基準をすら下回る月額10万7,000円</span>へと大幅に引き下げる制度改悪でした。さらに、これまで割り当てられていた年額34万円の個人研究費は
            廃止され、研究活動に大幅に支障をきたすことになりました。<br />
            これまで国籍を問わず全ての学生が利用可能であった入学金・授業料免除制度は、対象が原則日本人のみに限定され、留学生にはさらに重い負担がのしかかっています。
            </p>

            <p>
            「世界最高水準の研究力」を標榜しながら、その基盤を支え、将来を担う博士学生を「健康で文化的な最低限度の生活」未満の生活に追いやり、
            研究活動のための裁量的予算すら与えない。<br />
            「国際化」を標榜しながら、国籍を基準として授業料免除制度を利用させない差別的な制度。<br />
        
            これらの実態は、<a href="https://www.mext.go.jp/content/20241224-mxt_gakkikan-000039065_1.pdf" target="_blank" rel="noopener noreferrer">国際卓越研究大学 研究等体制強化計画 概要</a>
            が重点KPIとして掲げる「博士課程学生数の増加・留学生比率の増加・博士課程学生への平均経済支援額の増加」という方針とも明確に矛盾するものです。
            </p>

            <div className="flex flex-col lg:flex-row gap-8 mt-10">
                
                <div className="flex-1 border-4 border-white p-6 bg-zinc-900 relative overflow-hidden">
                <h4 className="text-2xl font-black mb-6 italic tracking-tighter uppercase text-white">
                    文科省へ掲げた「目標と重要KPI」
                </h4>
                <ul className="space-y-3 mb-8 text-lg font-bold border-l-4 border-accent pl-4">
                    博士後期課程学生数<br/>
                    留学生比率<br/>
                    平均経済支援額<br />
                    のいずれも25年目まで右肩上がりで引き上げを目指す。
                </ul>
                    <img 
                    src={Im06}
                    alt="重点KPI：博士学生支援と国際化の目標" 
                    className="w-full"
                    />
                </div>

                <div className="flex-1 border-4 border-white p-6 bg-zinc-900 relative overflow-hidden">
                <h4 className="text-2xl font-black mb-6 italic tracking-tighter uppercase text-white">
                    2024年度12月時点での実績のアピール
                </h4>
                <ul className="space-y-3 mb-8 text-lg font-bold border-l-4 border-white pl-4">
                    博士後期課程学生全員に経済的支援 <br/>
                    授業料は実質無料 <br />
                    学生一人当たりの支援年180万円<br />
                    と2024年度12月時点での「実績」として記載されている。
                </ul>
                    <img 
                    src={Im20}
                    alt="2024年度実績：180万円支給と授業料免除" 
                    className="w-full"
                    />
                </div>
            </div>
                    認定からわずか3年目にして、自ら掲げた目標に逆行する制度改悪を断行する行為は、国を挙げた研究力強化の理念を自ら否定するものであり、教育・研究機関としての機能不全を露呈しています。
        </article>

      </motion.section>

    <motion.div 
        whileHover={{ scale: 1.01 }}
        className={`bg-accent p-8 md:p-10 border-4 border-white transition-all duration-300 flex flex-col md:flex-row justify-between items-center gap-8`}
      >
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-black text-white italic tracking-tighter mb-4 uppercase">Discordへの招待</h2>
          <p className="font-bold text-zinc-400 text-base md:text-lg leading-snug">
            東北大学関係者で本件に関心がある人が集うDiscordサーバーを立ち上げました。<br className="hidden md:block" />
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

export default Home;