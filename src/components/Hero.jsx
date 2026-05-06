import './Hero.css'

function Hero({ onInquiry }) {
  return (
    <section className="hero">
      <div className="hero-bg-glow" />
      <div className="hero-bg-grid" />
      <div className="hero-inner container">
        <span className="hero-badge">AI 기반 주식 알람 서비스</span>
        <h1 className="hero-title">
          AI가 찾고,<br />
          <span className="hero-title-accent">봇이 즉시 알려준다</span>
        </h1>
        <p className="hero-desc">
          코스피·코스닥 3,000여 종목을 학습한 AI가 매수 신호를 자동으로 선별하고,<br />
          목표가 도달 즉시 텔레그램으로 알람을 보내드립니다.
        </p>
        <div className="hero-cta-group">
          <button className="cta-button" onClick={onInquiry}>
            가입 문의하기 →
          </button>
        </div>
        <p className="hero-cta-note">
          현재 사업 검증 단계로, 결제 시스템은 서비스가 커지면 연동할 계획입니다.<br />
          가입 문의는 메일로 받고 있습니다.
        </p>
        <div className="hero-stats">
          <div className="hero-stat">
            <strong>15년</strong>
            <span>주가 데이터 학습</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <strong>3,000+</strong>
            <span>코스피·코스닥 종목</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <strong>1분</strong>
            <span>실시간 모니터링 주기</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
