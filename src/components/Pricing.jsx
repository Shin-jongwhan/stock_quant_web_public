import './Pricing.css'

const plans = [
  {
    name: '주식 알람',
    price: 9000,
    discountPrice: 1800,
    unit: '월',
    features: [
      '관심 종목 알람 등록',
      '목표가 도달 텔레그램 알림',
      '종목 개수 제한 없음',
    ],
    highlight: false,
  },
  {
    name: 'AI 매수 후보 추천',
    price: 39000,
    discountPrice: 7800,
    unit: '월',
    features: [
      '매일 AI 분석 결과 수신',
      '확률 기반 종목 자동 선별',
      '주식 알람 서비스 포함',
    ],
    highlight: true,
  },
]

function formatPrice(n) {
  return n.toLocaleString('ko-KR')
}

function Pricing({ onInquiry }) {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <h2 className="section-title">
          <span>요금제</span>
        </h2>
        <p className="pricing-note">첫 달 <strong>80% 할인</strong> 이벤트 진행 중!</p>
        <div className="pricing-inquiry">
          현재 사업 검증 단계로, 결제 시스템은 서비스가 커지면 연동할 계획입니다.<br />
          이용을 원하시면 <a href="mailto:stockop123@naver.com">stockop123@naver.com</a>으로 문의해 주세요.
        </div>
        <div className="pricing-grid">
          {plans.map((p) => (
            <div className={`pricing-card${p.highlight ? ' highlight' : ''}`} key={p.name}>
              {p.highlight && <div className="badge">추천</div>}
              <h3 className="plan-name">{p.name}</h3>
              <div className="plan-price-box">
                <span className="plan-original">{formatPrice(p.price)}원</span>
                <div className="plan-current">
                  <span className="plan-amount">{formatPrice(p.discountPrice)}</span>
                  <span className="plan-unit">원 / {p.unit}</span>
                </div>
                <span className="plan-first">첫 달 한정</span>
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
                가입 문의하기
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
