const Detail = () => {

   const results = [
     {
       comment: "博士に対する支援が月10.6万円と、生活保護費より低いのは明らかにおかしい。この額では生活費を全て賄えるとは到底言えず、自身の研究時間を削ってでも、生活のためにアルバイト等をする必要が生じる。これでは十分な研究成果が出せるはずもない。最低でも支援額を月15万程度には引き上げるべき。",
       affiliation: "東北大学 理学研究科 修士2年"
     },
     {
       comment: "博士学生への支援拡充、国際性の推進を唄いながら逆行した支援内容に思う。特に後者の留学生に対する支援の減少は、世論の言いなりではないのか。",
       affiliation: "東北大　卒業生"
     },
   ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-10 leading-none">
        学生の声
      </h1>


      <div className="bg-zinc-900 border-l-4 border-accent p-8 mb-16">
        <h2 className="text-2xl md:text-3xl font-black mb-4">アンケートご協力のお願い</h2>
        <p className="text-lg font-bold mb-8 text-gray-300">
          本件に関するご意見をお寄せください。回答にあたって、送信元のGoogleアカウントは記録されず、全て匿名で行えます。
          所属等の記載も任意ですが、東北大学の関係者であればその旨記載いただけるとありがたいです。
        </p>
<a 
          href="https://forms.gle/m3oy4gSLTM8vLJHX9" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-white hover:bg-gray-200 text-black text-xl md:text-2xl font-black py-4 px-10 transition-colors duration-200"
        >
          回答フォームを開く
        </a>
      </div>

      <div className="space-y-6">
        {results.map((item, i) => (
          <div key={i} className="bg-white p-8 border-b-8 border-gray-300">
            <p className="text-black text-xl md:text-2xl font-bold leading-relaxed mb-6">
              {item.comment}
            </p>
            <div className="text-right">
              <span className="text-gray-600 text-sm md:text-base font-bold">
                — {item.affiliation}
              </span>
            </div>
          </div>
        ))}
      </div> 
    </div>
  );
};

export default Detail;