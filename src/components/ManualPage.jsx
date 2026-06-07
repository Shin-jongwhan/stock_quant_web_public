import { useState, useEffect, useRef } from 'react'
import './ManualPage.css'
import { useEscapeKey } from '../hooks/useEscapeKey'
import { CONTACT_EMAIL } from '../constants'

const BASE = import.meta.env.BASE_URL

const lsJoinSteps = [
  {
    img: `${BASE}images/how_to_join_telegram_bot/1_telegram_app_store.jpg`,
    sTitle: '텔레그램 앱 설치',
    lsDesc: [
      '앱스토어(iOS) 또는 구글플레이(Android)에서 Telegram을 검색하여 공식 앱을 설치합니다.',
      '텔레그램은 완전 무료이며 전 세계 10억 회 이상 다운로드된 보안 메신저입니다. Stock Quant의 모든 알람은 텔레그램 봇을 통해 발송됩니다.',
      '이미 텔레그램이 설치되어 있다면 이 단계는 건너뛰셔도 됩니다.',
    ],
  },
  {
    img: `${BASE}images/how_to_join_telegram_bot/2_search_botfather.jpg`,
    sTitle: 'BotFather 검색',
    lsDesc: [
      '텔레그램 앱 상단 검색창에 botfather를 입력합니다.',
      '검색 결과에서 파란색 공식 인증 뱃지(✔)가 있는 BotFather를 선택합니다. 인증 뱃지가 없는 계정은 가짜이므로 반드시 공식 계정을 선택하세요.',
      'BotFather는 텔레그램이 공식으로 제공하는 봇 생성 도구입니다. 이 봇을 통해 내 전용 알람 봇을 만들 수 있습니다.',
    ],
  },
  {
    img: `${BASE}images/how_to_join_telegram_bot/3_create_new_bot.png`,
    sTitle: '봇 생성 및 토큰 발급',
    lsDesc: [
      'BotFather 채팅창에 /newbot을 입력합니다.',
      '봇 이름을 입력하라는 안내가 나오면 원하는 이름을 입력합니다. 봇 이름은 반드시 bot으로 끝나야 합니다. (예: stock_quant_test_bot)',
      '봇 생성이 완료되면 HTTP API 토큰이 발급됩니다. 1234567890:AAF... 형식의 긴 문자열이며, 다음 단계에서 사용하므로 반드시 복사해두세요.',
    ],
  },
  {
    img: `${BASE}images/how_to_join_telegram_bot/5_join_bot_supplementary.png`,
    sTitle: 'BotFather 토큰 복사',
    lsDesc: [
      '봇 생성 완료 후 BotFather가 보내준 메시지에서 API 토큰을 복사합니다.',
      '토큰은 Use this token to access the HTTP API: 바로 아래에 표시됩니다. 토큰 전체를 정확히 복사하세요.',
      '이 토큰은 외부에 공개하면 안 됩니다. 누구에게도 알려주지 말고 안전하게 보관하세요.',
    ],
  },
  {
    img: `${BASE}images/how_to_join_telegram_bot/4_search_join_bot.jpg`,
    sTitle: '가입 봇 검색',
    lsDesc: [
      '텔레그램 검색창에 stock_quant_join_bot을 입력합니다.',
      '검색 결과에 표시되는 stock_quant_join_bot을 선택하여 채팅창을 엽니다.',
      '이 봇은 Stock Quant 서비스 가입 전용 봇입니다. 여기서 내 봇 토큰과 사용자명을 등록합니다.',
    ],
  },
  {
    img: `${BASE}images/how_to_join_telegram_bot/5_join_bot.png`,
    sTitle: '서비스 등록',
    lsDesc: [
      'stock_quant_join_bot 채팅창에 아래 형식으로 입력합니다.',
      '/start <BotFather 토큰> <원하는 user_name>',
      '예시: /start 1234567890:AAF... 홍길동',
      'BotFather에서 복사한 토큰을 그대로 붙여넣고 한 칸 띄운 후 원하는 사용자명을 입력합니다.',
      '등록 메시지 전송 후 수 분 내 응답이 없으면, 관리자가 자리를 비운 상태입니다. 나중에 다시 시도해주세요.',
      '응답 가능 시간: 평일 오전 8시 ~ 오후 8시 (KST) 기준으로 확인하고 있습니다.',
    ],
  },
]

const lsUseSteps = [
  {
    img: `${BASE}images/how_to_use_bot/1_search_your_bot.jpg`,
    sTitle: '내 봇 검색',
    lsDesc: [
      '텔레그램 검색창에 BotFather에서 생성한 내 봇 이름을 검색합니다. (예: stock_quant_test_bot)',
      '검색 결과에서 내 봇을 선택하여 채팅창을 엽니다.',
      '이제 이 채팅창에서 모든 알람을 수신하고 명령어를 입력할 수 있습니다. 가입 봇(stock_quant_join_bot)이 아닌 내가 직접 만든 봇에서 사용해야 합니다.',
    ],
  },
  {
    img: `${BASE}images/how_to_use_bot/2_help.jpg`,
    sTitle: '명령어 목록 확인 (/help)',
    lsDesc: [
      '/help를 입력하면 사용 가능한 전체 명령어 목록을 확인할 수 있습니다.',
      '주요 명령어 목록:',
      '/add — 알람 종목 등록 (/add <종목코드or종목명> <up|down> <목표가>)',
      '/watchlist — 현재 등록된 알람 목록 조회',
      '/activate / /deactivate — 알람 항목 활성화 / 비활성화',
      '/update_alert — 목표가 수정',
      '/unactivated_list — 비활성화된 항목 목록 조회',
      '/config / /set_config — 개인 설정 조회 및 변경',
    ],
  },
  {
    img: `${BASE}images/how_to_use_bot/3_watchlist.jpg`,
    sTitle: '알람 목록 조회 (/watchlist)',
    lsDesc: [
      '/watchlist를 입력하면 현재 활성화된 알람 종목 목록을 확인할 수 있습니다.',
      '종목코드, 종목명, 현재가, 알람 방향(UP/DOWN), 목표가, 현재 달성률(%)이 한눈에 표시됩니다.',
      '특정 종목의 상세 정보는 /watchlist <종목코드> <순번> 형식으로 조회할 수 있습니다.',
    ],
  },
  {
    img: `${BASE}images/how_to_use_bot/4_add.png`,
    sTitle: '알람 등록 (/add)',
    lsDesc: [
      '/add <종목코드 또는 종목명> <up|down> <목표가> 형식으로 알람을 등록합니다.',
      '예시 1: /add 005930 up 310000 → 삼성전자가 310,000원 이상이 되면 알람',
      '예시 2: /add 삼성전자 down 60000 → 삼성전자가 60,000원 이하가 되면 알람',
      '등록 완료 시 종목코드, 종목명, 현재가, 목표가, 목표배율, 알람 방향이 확인 메시지로 표시됩니다. 이후 /watchlist로 바로 확인할 수 있습니다.',
    ],
  },
  {
    img: `${BASE}images/how_to_use_bot/5_alarm.jpg`,
    sTitle: '알람 수신',
    lsDesc: [
      '등록한 목표가에 도달하면 자동으로 알람 메시지가 발송됩니다. 시장 운영 시간(KST 08:00 ~ 20:00) 중 1분마다 가격을 체크합니다.',
      '알람 메시지에는 종목코드, 종목명, 현재가, 목표가, 달성률(%)이 표시됩니다.',
      '메시지 하단의 /deactivate 링크를 눌러 해당 알람을 즉시 비활성화할 수도 있습니다.',
      '동일 알람은 alert_interval 설정 간격(기본 60초)마다 반복 발송되므로 필요시 비활성화하세요.',
    ],
  },
  {
    img: `${BASE}images/how_to_use_bot/6_deactivate.jpg`,
    sTitle: '알람 비활성화 (/deactivate)',
    lsDesc: [
      '더 이상 알람이 필요 없는 종목은 /deactivate <종목코드 또는 종목명> [순번]으로 비활성화합니다.',
      '예시: /deactivate 삼성전자 → 삼성전자 첫 번째 알람 비활성화',
      '예시: /deactivate 005930 2 → 삼성전자 두 번째 알람만 비활성화',
      '비활성화된 항목은 완전히 삭제되지 않으며, /activate 명령어로 언제든지 다시 켤 수 있습니다.',
    ],
  },
  {
    img: `${BASE}images/how_to_use_bot/7_unactivated_list.jpg`,
    sTitle: '비활성화 목록 조회 (/unactivated_list)',
    lsDesc: [
      '/unactivated_list를 입력하면 비활성화된 알람 목록을 확인할 수 있습니다.',
      '종목코드, 종목명, 알람 방향, 목표가, 비활성화 날짜가 표시됩니다.',
      '기본 10건이 표시되며, /unactivated_list 20 또는 /unactivated_list all로 더 많은 항목을 조회할 수 있습니다.',
      '표시된 순번은 /activate 명령어에서 사용하는 순번입니다.',
    ],
  },
  {
    img: `${BASE}images/how_to_use_bot/8_activate_again.jpg`,
    sTitle: '알람 재활성화 (/activate)',
    lsDesc: [
      '비활성화된 알람을 다시 켜려면 /activate <종목코드 또는 종목명> <순번>을 입력합니다.',
      '예시: /activate 삼성전자 1 → 비활성화 목록의 1번 삼성전자 알람을 다시 활성화',
      '순번은 /unactivated_list에서 확인할 수 있습니다.',
      '활성화 완료 후 해당 종목은 즉시 실시간 모니터링 대상에 다시 포함됩니다.',
    ],
  },
  {
    img: `${BASE}images/how_to_use_bot/9_config.jpg`,
    sTitle: '개인 설정 (/config, /set_config)',
    lsDesc: [
      '/config를 입력하면 현재 설정값을 확인할 수 있습니다.',
      '설정 항목:',
      'min_calibrated_hit_rate — Watchlist 자동 등록 최소 승률 (기본값 80.0)',
      'alert_interval — 동일 알람 재발송 방지 간격 (초, 기본값 60). 모니터링이 1분 단위로 실행되므로 실질적으로 분 단위로 적용됩니다.',
      '변경 예시: /set_config alert_interval 120 → 동일 알람을 최소 2분 간격으로만 수신',
    ],
  },
]

const lsSubscriptionSteps = [
  {
    img: `${BASE}images/subscription/1_subscription.jpg`,
    sTitle: '구독 등록 안내',
    lsDesc: [
      '관리자가 결제를 확인하면 구독이 등록되고, 내 봇으로 구독 확인 메시지가 발송됩니다.',
      '메시지에는 결제 금액, 이용 기간(시작일 ~ 만료일), AI 자동 등록 활성 여부가 포함됩니다.',
      '구독 기간 중에는 등록한 종목에 대한 가격 알람 및 AI 매수 후보 알람(AI 플랜 해당)을 정상적으로 수신할 수 있습니다.',
    ],
  },
  {
    img: `${BASE}images/subscription/2_referral.jpg`,
    sTitle: '추천인 제도',
    lsDesc: [
      '가입 문의 시 추천인 user_name을 함께 전달하면, 추천인에게 무료 이용 기간이 자동으로 지급됩니다.',
      '추천인 보상은 신규 결제 유저 1인당 1회만 지급됩니다. 동일 유저가 재결제할 때는 추천인 혜택이 적용되지 않습니다.',
      '보상 지급 시 추천인 봇으로 기존 만료일과 변경된 만료일이 안내됩니다.',
      '추천인 보상에는 AI 자동 등록 서비스가 포함됩니다.',
    ],
  },
  {
    img: `${BASE}images/subscription/3_refund.jpg`,
    sTitle: '환불 안내',
    lsDesc: [
      '환불 요청 시 환불 신청일 기준으로 일할 계산하여 잔여 금액이 환불됩니다.',
      '사용 일수는 구독 시작일부터 환불 신청일 당일까지이며, 당일도 사용 일수에 포함됩니다.',
      '환불 처리가 완료되면 내 봇으로 환불 금액, 사용 일수, 기존 만료일 및 변경된 만료일이 안내됩니다.',
      '환불 후 잔여 구독 기간이 없으면 서비스 이용이 즉시 종료됩니다.',
    ],
  },
  {
    img: `${BASE}images/subscription/4_cancel_referral.jpg`,
    sTitle: '환불 시 추천인 보상 취소',
    lsDesc: [
      '환불이 처리되면 해당 결제로 발생한 추천인 보상도 함께 취소됩니다.',
      '추천인에게 지급된 무료 기간이 롤백되며, 추천인 봇으로 보상 취소 안내 메시지가 발송됩니다.',
      '추천인에게 다른 유효한 구독 기간이 남아 있다면 해당 만료일로 자동 변경됩니다.',
    ],
  },
]

function JoinNoticeBox() {
  return (
    <div className="manual-join-notice">
      <div className="manual-join-notice-title">📢 가입 응답 시간 안내</div>
      <ul className="manual-join-notice-list">
        <li>가입 봇(<strong>stock_quant_join_bot</strong>)에 메시지를 보낸 후 <strong>수 분 내 응답이 없으면</strong> 관리자가 자리를 비운 상태입니다. 나중에 다시 시도해주세요.</li>
        <li>응답 가능 시간: <strong>평일 오전 8시 ~ 오후 8시 (KST)</strong> 기준이며, 상황에 따라 변동될 수 있습니다.</li>
        <li>서버는 <strong>상시 운영되지 않으며</strong>, 점검·재시작 등으로 일시적으로 서비스가 중단될 수 있습니다.</li>
      </ul>
    </div>
  )
}


function CautionBox() {
  return (
    <div className="manual-caution">
      <div className="manual-caution-title">⚠️ 환불 주의사항</div>
      <ul className="manual-caution-list">
        <li>결제 후 즉시 환불하더라도 <strong>환불 신청일 당일은 사용 일수에 포함</strong>되어 일할 계산됩니다.</li>
        <li>환불 금액은 <strong>잔여 일수 기준으로 100원 단위 내림</strong> 계산됩니다.</li>
        <li>예시: 30일 / 30,000원 구독권을 당일 환불하면 → 사용 1일 차감, 잔여 29일 환불<br />
          <span className="manual-caution-formula">30,000 × 29 / 30 = 29,000원 → <strong>29,000원 환불</strong></span>
        </li>
        <li>추천인 보상이 지급된 상태에서 환불하면 <strong>추천인 보상도 함께 취소</strong>됩니다.</li>
      </ul>
    </div>
  )
}

const sMailTemplate = `[Stock Quant 구독 문의]

유저명 : shinejh0528
구독 요청 개월 : 12 (참고용)
입금자 성함 : 피터 린치
추천인 : (없으면 비워두기)`

function MailTemplate() {
  const [blCopied, setBlCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(sMailTemplate)
    setBlCopied(true)
    setTimeout(() => setBlCopied(false), 2000)
  }

  const sMailto = `mailto:${CONTACT_EMAIL}?subject=[Stock Quant 구독 문의]&body=${encodeURIComponent(sMailTemplate)}`

  return (
    <div className="mail-template">
      <div className="mail-template-header">
        <h3 className="mail-template-title">📧 이메일 문의 양식</h3>
        <p className="mail-template-note">
          아래 양식을 복사한 뒤 빈칸을 채워 <strong>{CONTACT_EMAIL}</strong>으로 보내주세요.<br />
          <strong>구독 요청 개월은 참고용</strong>이며, 실제 등록 개월 수는 입금액을 기준으로 산정됩니다.<br />
          입금 확인 후 맞는 개월 수로 등록해드립니다.
        </p>
      </div>
      <div className="mail-template-body">
        <pre className="mail-template-text">{sMailTemplate}</pre>
        <button className="mail-template-copy" onClick={handleCopy}>
          {blCopied ? '✓ 복사됨' : '복사'}
        </button>
      </div>
      <a className="mail-template-send" href={sMailto}>
        ✉️ 메일 앱으로 바로 보내기
      </a>
    </div>
  )
}


function ImageViewer({ sSrc, sAlt, onClose }) {
  const [nScale, setNScale] = useState(1)
  const [blClosing, setBlClosing] = useState(false)
  const cClosed = useRef(false)

  function triggerClose() {
    if (cClosed.current) return
    cClosed.current = true
    setNScale(1)
    setBlClosing(true)
    setTimeout(onClose, 450)
  }

  useEscapeKey(triggerClose)

  useEffect(() => {
    const onWheel = (e) => {
      if (!e.ctrlKey) return
      e.preventDefault()
      setNScale(fl => Math.min(5, Math.max(0.5, fl + (e.deltaY < 0 ? 0.15 : -0.15))))
    }
    document.addEventListener('wheel', onWheel, { passive: false })
    return () => document.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <div className={`img-viewer-backdrop${blClosing ? ' closing' : ''}`} onClick={triggerClose}>
      <div className="img-viewer-frame" onClick={e => e.stopPropagation()}>
        <img
          className="img-viewer-img"
          src={sSrc}
          alt={sAlt}
          style={{ transform: `scale(${nScale})` }}
        />
      </div>
    </div>
  )
}


function StepCard({ nIdx, dicStep, onImgClick }) {
  const lsCode = ['/', '예시']
  return (
    <div className="manual-step">
      <div className="step-img-wrap">
        <img
          src={dicStep.img}
          alt={dicStep.sTitle}
          loading="lazy"
          className="step-img-clickable"
          onClick={() => onImgClick(dicStep.img, dicStep.sTitle)}
        />
      </div>
      <div className="step-body">
        <span className="step-num">{String(nIdx + 1).padStart(2, '0')}</span>
        <h3 className="step-title">{dicStep.sTitle}</h3>
        <div className="step-desc">
          {dicStep.lsDesc.map((sLine, nI) => {
            const blCode = lsCode.some(sP => sLine.startsWith(sP))
            return blCode
              ? <code key={nI} className="step-code">{sLine}</code>
              : <p key={nI}>{sLine}</p>
          })}
        </div>
      </div>
    </div>
  )
}


function ManualPage({ sInitTab = 'join' }) {
  const [sTab, setSTab] = useState(sInitTab)
  const [dicViewer, setDicViewer] = useState(null)

  useEffect(() => {
    setSTab(sInitTab)
  }, [sInitTab])

  const lsSteps = sTab === 'join' ? lsJoinSteps : sTab === 'use' ? lsUseSteps : lsSubscriptionSteps

  return (
    <div className="manual-page">
      <div className="manual-inner">
        <h1 className="manual-title">메뉴얼</h1>
        <p className="manual-subtitle">Stock Quant 텔레그램 봇 연동 및 사용 방법을 단계별로 안내합니다.</p>

        <div className="manual-tabs">
          <button
            className={`manual-tab-btn ${sTab === 'join' ? 'active' : ''}`}
            onClick={() => setSTab('join')}
          >
            봇 연동
          </button>
          <button
            className={`manual-tab-btn ${sTab === 'use' ? 'active' : ''}`}
            onClick={() => setSTab('use')}
          >
            봇 사용 방법
          </button>
          <button
            className={`manual-tab-btn ${sTab === 'subscription' ? 'active' : ''}`}
            onClick={() => setSTab('subscription')}
          >
            구독 안내
          </button>
        </div>

        {sTab === 'join' && <JoinNoticeBox />}
        {sTab === 'subscription' && <CautionBox />}

        <div className="manual-steps">
          {lsSteps.map((dicStep, nIdx) => (
            <StepCard
              key={nIdx}
              nIdx={nIdx}
              dicStep={dicStep}
              onImgClick={(sSrc, sAlt) => setDicViewer({ sSrc, sAlt })}
            />
          ))}
        </div>

        {sTab === 'subscription' && <MailTemplate />}
      </div>

      {dicViewer && (
        <ImageViewer
          sSrc={dicViewer.sSrc}
          sAlt={dicViewer.sAlt}
          onClose={() => setDicViewer(null)}
        />
      )}
    </div>
  )
}

export default ManualPage
