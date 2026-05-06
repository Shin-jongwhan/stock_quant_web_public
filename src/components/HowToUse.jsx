import './GuideSection.css'

const BASE = import.meta.env.BASE_URL

const steps = [
  { img: '1_search_your_bot.jpg', caption: '1. 봇 검색' },
  { img: '2_help.jpg', caption: '2. /help 명령어로 안내 확인' },
  { img: '3_watchlist.jpg', caption: '3. /watchlist 로 등록 종목 조회' },
  { img: '4_add.png', caption: '4. /add 로 종목 등록' },
  { img: '5_alarm.jpg', caption: '5. 목표가 도달 시 알람 수신' },
  { img: '6_deactivate.jpg', caption: '6. /deactivate 로 알람 비활성화' },
  { img: '7_unactivated_list.jpg', caption: '7. 비활성 목록 조회' },
  { img: '8_activate_again.jpg', caption: '8. /activate 로 재활성화' },
  { img: '9_config.jpg', caption: '9. /config 로 설정 관리' },
]

function HowToUse() {
  return (
    <section className="guide-section guide-section--alt" id="how-to-use">
      <div className="container">
        <h2 className="section-title">
          봇 <span>사용 방법</span>
        </h2>
        <div className="guide-grid">
          {steps.map((s) => (
            <div className="guide-step" key={s.img}>
              <img
                src={`${BASE}images/how_to_use_bot/${s.img}`}
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

export default HowToUse
