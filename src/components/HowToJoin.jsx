import './GuideSection.css'

const BASE = import.meta.env.BASE_URL

const steps = [
  {
    img: '1_telegram_app_store.jpg',
    caption: '1. 텔레그램 앱 설치',
  },
  {
    img: '2_search_botfather.jpg',
    caption: '2. 텔레그램 실행 후 검색',
  },
  {
    img: '3_create_new_bot.png',
    caption: '3. Stock Quant 봇 검색',
  },
  {
    img: '4_search_join_bot.jpg',
    caption: '4. 봇 선택',
  },
  {
    img: '5_join_bot.png',
    caption: '5. 시작하기 버튼 클릭',
  },
  {
    img: '5_join_bot_supplementary.png',
    caption: '6. 가입 완료',
  },
]

function HowToJoin() {
  return (
    <section className="guide-section" id="how-to-join">
      <div className="container">
        <h2 className="section-title">
          텔레그램 봇 <span>가입 방법</span>
        </h2>
        <div className="guide-grid">
          {steps.map((s) => (
            <div className="guide-step" key={s.img}>
              <img
                src={`${BASE}images/how_to_join_telegram_bot/${s.img}`}
                alt={s.caption}
                loading="lazy"
              />
              <p className="guide-caption">{s.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowToJoin
