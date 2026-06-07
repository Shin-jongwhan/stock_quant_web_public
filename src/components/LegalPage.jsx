import './LegalPage.css'

const lsSections = [
  {
    sTitle: '서비스 성격 및 고지',
    lsItems: [
      'STOCK QUANT은 자본시장과 금융투자업에 관한 법률 제101조에 따른 유사투자자문업 신고를 준비 중입니다.',
      '본 서비스는 정식 금융투자업(투자자문업·투자일임업)이 아니며, 금융위원회로부터 인가·등록을 받은 금융투자업자가 아닙니다.',
      '본 서비스에서 제공하는 모든 정보는 일반적인 투자 참고 정보이며, 특정 종목의 매수·매도를 개별적으로 권유하거나 지시하지 않습니다.',
      '투자 판단 및 그에 따른 손익 책임은 전적으로 이용자 본인에게 있습니다.',
    ],
  },
  {
    sTitle: '운영 의무사항',
    lsItems: [
      '투자 손실 가능성과 손실 책임이 투자자에게 있다는 사실을 서비스 내에 명시합니다.',
      '단방향 채널(푸시 알림, 알림톡 등 일방적 정보 전달 방식)로만 정보를 제공하며, 개별 투자상담은 하지 않습니다.',
      '수수료·환불 정책을 사전에 명확하게 안내하며, 부당한 환불 제한 또는 과다 위약금 청구를 하지 않습니다.',
      '계약 해지·해제 시 관련 법령 및 약관에 따라 환불을 처리합니다.',
    ],
  },
  {
    sTitle: '금지행위',
    lsItems: [
      '특정 종목의 매매를 개별적·실시간으로 추천하는 행위 (VIP방, 리딩방, 실시간 방송 등 양방향 채널 운영 금지)',
      '정보 제공 전에 해당 금융투자상품을 미리 매매하는 선행 거래',
      '보유 사실을 밝히지 않은 채 특정 종목을 추천하는 행위',
      '객관적 근거 없는 수익률 보장, 우월성 주장, 수익 사례만 선별한 광고',
      '대금 환급 거부 또는 부당한 위약금 부과',
    ],
  },
  {
    sTitle: '이용자 보호',
    lsItems: [
      '개별 투자상담이 불가하며, 모든 정보는 불특정 다수에게 동일하게 제공됩니다.',
      '서비스 이용 전 투자 위험성 및 손실 가능성을 충분히 인지하시기 바랍니다.',
      '본 서비스의 정보만을 근거로 투자 결정을 내리지 않도록 권고드립니다.',
      '이용 중 불법·불건전 행위를 발견하셨을 경우 금융감독원(국번 없이 1332)에 신고하실 수 있습니다.',
    ],
  },
  {
    sTitle: '법적 근거',
    lsItems: [
      '자본시장과 금융투자업에 관한 법률 제101조 (유사투자자문업)',
      '자본시장과 금융투자업에 관한 법률 제178조 (불공정거래 금지)',
      '표시·광고의 공정화에 관한 법률 (허위·과장 광고 금지)',
      '전자상거래 등에서의 소비자보호에 관한 법률 (환불·청약철회 규정)',
    ],
  },
]


function LegalPage({ onNavigate }) {
  return (
    <div className="legal-page">
      <div className="container legal-container">
        <button className="legal-back" onClick={() => onNavigate('home')}>
          ← 홈으로
        </button>

        <h1 className="legal-title">유사투자자문업 법령 준수 사항</h1>
        <p className="legal-updated">최종 업데이트: 2025년 5월</p>

        <div className="legal-beta-notice">
          <p>🔔 현재 베타테스트 기간으로, 유사투자자문업 신고 등 법적 요건을 준비 중입니다. 정식 서비스 전환 시 이용자에게 사전 고지 후 전환될 예정입니다.</p>
        </div>

        <div className="legal-notice">
          <strong>투자 위험 고지</strong>
          <p>
            주식 투자는 원금 손실이 발생할 수 있으며, 과거 수익률이 미래 수익을 보장하지 않습니다.
            본 서비스에서 제공하는 정보는 투자 참고용이며, 투자 판단과 그에 따른 손익은 전적으로 이용자 본인에게 귀속됩니다.
          </p>
        </div>

        {lsSections.map((dicSection, nIdx) => (
          <div key={nIdx} className="legal-section">
            <h2 className="legal-section-title">{dicSection.sTitle}</h2>
            <ul className="legal-list">
              {dicSection.lsItems.map((sItem, nI) => (
                <li key={nI}>{sItem}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className="legal-footer-note">
          <p>
            본 고지는 유사투자자문업 관련 법령 및 금융감독원 지침에 따라 작성되었으며,
            법령 개정 시 내용이 변경될 수 있습니다.
          </p>
          <p>문의: <a href="mailto:stockop123@naver.com">stockop123@naver.com</a></p>
        </div>
      </div>
    </div>
  )
}

export default LegalPage
