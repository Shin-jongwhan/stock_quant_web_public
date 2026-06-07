import './Pricing.css'
import { CONTACT_EMAIL } from '../constants'

const plans = [
  {
    name: '주식 알람',
    features: [
      '관심 종목 알람 등록',
      '목표가 도달 텔레그램 알림',
      '종목 개수 제한 없음',
    ],
    highlight: false,
  },
  {
    name: 'AI 매수 후보 추천',
    features: [
      '매일 AI 분석 결과 수신',
      '확률 기반 종목 자동 선별',
      '주식 알람 서비스 포함',
    ],
    highlight: true,
  },
]

function Pricing({ onInquiry }) {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <h2 className="section-title">
          <span>이용 안내</span>
        </h2>
        <p className="pricing-note"><strong>베타 테스트 기간</strong> — 모든 서비스 현재 무료 운영 중!</p>
        <div className="pricing-inquiry">
          텔레그램 봇을 등록하시면 순차적으로 승인해 드립니다.<br />
          문의사항은 <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>으로 연락해 주세요.
        </div>
        <div className="pricing-grid">
          {plans.map((p) => (
            <div className={`pricing-card${p.highlight ? ' highlight' : ''}`} key={p.name}>
              {p.highlight && <div className="badge">추천</div>}
              <h3 className="plan-name">{p.name}</h3>
              <div className="plan-price-box">
                <div className="plan-current">
                  <span className="plan-amount">무료</span>
                </div>
                <span className="plan-first">베타 기간 한정</span>
              </div>
              <ul className="plan-features">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <button
                className={`plan-cta${p.highlight ? ' primary' : ''}`}
                onClick={onInquiry}
              >
                베타 참여 신청하기
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
