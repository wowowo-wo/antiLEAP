import { motion } from 'framer-motion';

const Detail = () => {
  const issues = [
    {
      id: "01",
      title: "生活費支援水準の著しい低下",
      content: (
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>LEAPにおける研究奨励費(生活費)支援は月額<span className="text-accent font-black text-2xl">10万7,000円</span>。これは以前の東北大学の制度や、他大学の制度と比較して6割以下の水準であり、仙台市の単身世帯の生活保護支給額を下回っています。</p>
          <div className="bg-black border border-gray-700 p-4 my-4">
            <h4 className="text-accent font-black mb-2 uppercase">Comparison / 他制度との比較</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li>・文科省 SPRING事業: <span className="text-white">月18万円 + 研究費36万/年</span></li>
              <li>・旧制度(JST次世代等): <span className="text-white">月18万円 + 研究費34万/年</span></li>
              <li>・都立大(みやこMIRAI): <span className="text-white">月20万円 + 研究費30万/年</span></li>
              <li className="pt-2 border-t border-gray-800 text-accent font-black text-lg underline">
                LEAP: 月10.7万円 / 個人研究費 廃止
              </li>
            </ul>
          </div>
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
            大学側は「全員配布のため一人当たりの給付額が下がった」と弁明していましたが、実態は2022年時点で86.6%の博士学生が16〜18万円以上の支援を受けていました(<a href="https://www.sci.tohoku.ac.jp/student/post-15.html" target="_blank" rel="noopener noreferrer">東北大学 理学研究科・理学部
            博士向け奨学金制度</a>)。<br />
            さらに、<a href="https://www.mext.go.jp/content/20241224-mxt_gakkikan-000039065_1.pdf" target="_blank" rel="noopener noreferrer">国際卓越研究大学 研究等体制強化計画 概要</a>では
            2024年時点で全博士学生への年額180万円の支援と授業料実質無料を達成した実績を誇らしげに記載しています。
            このような過年度の状況を踏まえると、2020年代以降東北大学における博士学生支援制度は拡充を続けてきたと言えます。形式的には審査制であっても、実質的には全員が給付を受けられる状態を2024年時点で達成している以上、
            新制度が改悪であることは明白です。
        </div>
        </div>
      )
    },
    {
      id: "02",
      title: "個人研究費の廃止",
      content: (
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>
            これまで博士学生の自律的な探究を支えてきた「個人研究費(昨年度以前の制度では34万円～)」が廃止されました。
          </p>
          <p>
            学会参加、書籍の購入、計算用PCの調達、実験用消耗品、さらには論文投稿料に至るまで、あらゆる支出を指導教員（PI）の予算と顔色に依存せざるを得ない構造へと退行しています。これは若手研究者を独立した主体ではなく、単なる「研究室の補助力」へと格下げする、博士教育の根幹を揺るがす改悪です。
          </p>
        </div>
      )
    },
    {
      id: "03",
      title: "公募型旅費支援制度の欠陥",
      content: (
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>
            個人研究費の代替とされて導入された公募型旅費支援制度は、「海外で開催される国際会議の採諾後でなければ申請できない」という、研究プロセスを無視した設計ミスを抱えています。
          </p>
          <p>
            本来、研究資金は「成果を出すための試行錯誤」に投じられるべきものです。また、ジャーナル投稿が主流の基礎研究分野を切り捨て、特定分野に偏重したこの要件は、学問の多様性を著しく損ないます。LEAPプログラムの一部であるにも関わらず、申請期間が終わった今でも詳細が発表されていない制度運用スケジュールの杜撰さにも問題があります。「上限40万円」では、円安・インフレの時代の海外出張には不足しているという批判もあります。
          </p>
        </div>
      )
    },
    {
      id: "04",
      title: "「国際」なのに留学生排除",
      content: (
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
        <p>
            これまで外国人留学生も対象であった入学金（28.2万円）および授業料（年額53.5万円）の免除制度が、基本的に利用不可能になります(※学位プログラム加入者の外国人留学生の授業料免除は継続)。
        </p>
        <p>
            「国際」卓越研究大学を掲げ、留学生数のKPIを設定しながら、その実態は経済的余裕のない学生を組織的に排除する構造になっています。全ての留学生が裕福なわけではありません。
        </p>
        <p>
            日本人のみに生活費支給を限定するSPRINGの制度設計や、昨今の東北大学の留学生授業料値上げの動きと根を同じくするこの改変は、多様性を切り捨て、留学生のの門戸を経済力で選別する「差別的改悪」に他なりません。
        </p>
        </div>
      )
    },
    {
      id: "05",
      title: "学位プログラムの機能不全",
      content: (
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>
            「優秀な学生への措置」である学位プログラムへの加入が、研究生活を維持するための生活費確保の絶対条件となっています。しかし、プログラムには分野の制限が存在し、全ての学生に門戸が開かれているわけではありません。
          </p>
          <p>
            運用面の問題も深刻です。募集人数が「若干名」に留まるのみならず、2026年度には採用枠が大幅に縮小した事例も確認されており、支援規模の維持すら危うい状況です。選考過程は極めて不透明であり、採用者が特定の研究室や分野に集中するなど、公平性への疑念は拭えません。
          </p>
          <p>
            財源の不安定さと不公正な選抜を孕んだこの仕組みは、困窮する学生に対する「救済措置」としてはあまりに不完全であり、制度設計・運用の両面で破綻しています。
          </p>
        </div>
      )
    },
    {
      id: "06",
      title: "遅すぎる時期の制度変更発表",
      content: (
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>
            新入生への新制度概要告知は2月、詳細の告知と説明会の開催は3月以降。進路変更が物理的に不可能な時期を狙ったこのスケジュールは、従来の支援水準を信じて入学を決めた学生に対する「騙し討ち」です。
          </p>
          <p>
            さらに、AGS RISE(2025年度まで東北大学が実施していた博士課程学生支援制度)採用者に対しては、詳細の告知も説明会の開催もないまま2月中に新制度への移行同意を要求しました。
            支援側と被支援側の圧倒的なパワーバランスを利用し、募集時の「標準修業年限内同一内容支援」という原則を破棄し、劣化した制度への移行承諾を迫りました。
          </p>
          <p>
            情報を伏せたまま不利益な変更を実質的に強いる行為は、教育・研究機関としての倫理を逸脱しており、学生の人生に対する誠実さを完全に欠いていると言わざるを得ません。
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-10 leading-none">
          「LEAP」の詳細と問題点
        </h1>
      </motion.div>

      <div className="bg-zinc-900 border-2 border-white p-6 mb-16">
        <h2 className="text-2xl font-black mb-4 flex items-center gap-2 text-accent">
          <span className="text-white">資料</span> 
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm underline font-bold">
          <a href="https://pgd.tohoku.ac.jp/data/r7/LEAP20260306.pdf" target="_blank" className="hover:text-accent">LEAPプログラム 資料 (PDF)</a>
          <a href="https://pgd.tohoku.ac.jp/data/r7/LEAPQA_J20260410.pdf" target="_blank" className="hover:text-accent">LEAPプログラム Q&A (PDF)</a>
          <a href="https://pgd.tohoku.ac.jp/" target="_blank" className="hover:text-accent">東北大学高等大学院機構</a>
        </div>
      </div>

      <div className="space-y-4">
        {issues.map((issue) => (
          <details key={issue.id} className="group border-b-2 border-gray-800">
            <summary className="list-none cursor-pointer py-8 flex justify-between items-center group-hover:text-accent transition-colors">
              <div className="flex items-baseline gap-4 md:gap-8">
                <span className="text-accent font-black text-xl md:text-2xl">{issue.id}</span>
                <h3 className="text-xl md:text-4xl font-black tracking-tighter leading-tight">
                  {issue.title}
                </h3>
              </div>
              <span className="text-3xl font-black group-open:rotate-45 transition-transform">+</span>
            </summary>
            <div className="pb-10 pl-10 md:pl-20 pr-4 text-gray-200">
              {issue.content}
            </div>
          </details>
        ))}
      </div>

    </div>
  );
};

export default Detail;