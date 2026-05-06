import './Services.css'

const lsServices = [
  {
    nNum: '01',
    sIcon: '🧠',
    sTitle: '15년 시장 데이터를 학습한 자체 AI',
    sDesc: '자체적으로 훈련된 AI가 코스피·코스닥 3,000여 종목의 15년치 주가 데이터를 학습했습니다. 단기 노이즈가 아닌 시장 전반의 구조적 패턴을 포착하도록 설계되었습니다.',
    sTag: 'AI 모델',
  },
  {
    nNum: '02',
    sIcon: '🎯',
    sTitle: '확률 기반 매수 신호 자동 탐지',
    sDesc: 'AI가 매일 전체 시장을 분석하여 수익 확률이 가장 높은 매수 신호를 판단합니다. 선별된 종목은 목표가와 함께 Watchlist에 자동으로 등록됩니다.',
    sTag: '자동 선별',
  },
  {
    nNum: '03',
    sIcon: '🔔',
    sTitle: '목표가 도달 시 텔레그램 즉시 알람',
    sDesc: '등록된 종목의 현재가를 1분마다 실시간 모니터링합니다. 목표가에 도달하는 순간 텔레그램 봇으로 즉시 알람이 발송되어 매매 타이밍을 절대 놓치지 않습니다.',
    sTag: '실시간 알람',
  },
  {
    nNum: '04',
    sIcon: '📌',
    sTitle: '내가 원하는 종목 직접 등록',
    sDesc: 'AI 자동 등록 외에도 직접 관심 종목과 목표가를 설정할 수 있습니다. 봇 명령어 하나로 어떤 종목이든 UP/DOWN 알람을 자유롭게 추가·수정·삭제하세요.',
    sTag: '커스텀 알람',
  },
]

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <p className="services-eyebrow">서비스 소개</p>
        <h2 className="section-title">
          AI가 찾고, 봇이 알려주는<br />
          <span>스마트 주식 알람</span>
        </h2>
        <p className="services-lead">
          복잡한 분석 없이도 AI가 매수 후보를 자동으로 선별하고,<br />
          목표가 도달 즉시 텔레그램으로 알람을 받아보세요.
        </p>
        <div className="services-grid">
          {lsServices.map((s) => (
            <div className="service-card" key={s.nNum}>
              <div className="service-card-top">
                <span className="service-num">{s.nNum}</span>
                <span className="service-tag">{s.sTag}</span>
              </div>
              <div className="service-icon">{s.sIcon}</div>
              <h3 className="service-name">{s.sTitle}</h3>
              <p className="service-desc">{s.sDesc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
