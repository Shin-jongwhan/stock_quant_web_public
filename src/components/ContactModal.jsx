import { useState, useEffect } from 'react'
import './ContactModal.css'

const sEmail = 'stockop123@naver.com'

function ContactModal({ onClose, onNavigate }) {
  const [nStep, setNStep] = useState(1)
  const [blCopied, setBlCopied] = useState(false)

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  function handleCopy() {
    navigator.clipboard.writeText(sEmail).then(() => {
      setBlCopied(true)
      setTimeout(() => setBlCopied(false), 2000)
    })
  }

  function handleGoManual() {
    onClose()
    onNavigate('manual')
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        {nStep === 1 ? (
          <>
            <div className="modal-icon">🤖</div>
            <h2 className="modal-title">가입 전 확인</h2>
            <p className="modal-desc">
              가입 문의 전, 먼저 <strong>텔레그램 봇을 직접 생성</strong>해야 합니다.<br />
              BotFather에서 봇을 만들고 발급받은 토큰을 준비해주세요.<br />
              방법을 모르신다면 아래 메뉴얼을 먼저 확인해주세요.
            </p>
            <button className="modal-manual-btn" onClick={handleGoManual}>
              📖 봇 연동 메뉴얼 보기
            </button>
            <div className="modal-divider">
              <span>봇을 이미 만들었다면</span>
            </div>
            <button className="modal-next-btn" onClick={() => setNStep(2)}>
              네, 봇 생성 완료했습니다 →
            </button>
          </>
        ) : (
          <>
            <div className="modal-icon">✉️</div>
            <h2 className="modal-title">가입 문의</h2>
            <p className="modal-desc">
              아래 이메일로 <strong>봇 토큰과 원하는 사용자명</strong>을 함께 보내주시면<br />
              확인 후 안내드리겠습니다.
            </p>
            <div className="modal-email-box">
              <span className="modal-email">{sEmail}</span>
              <button className="modal-copy-btn" onClick={handleCopy}>
                {blCopied ? '복사됨 ✓' : '복사'}
              </button>
            </div>
            <a className="modal-mail-btn" href={`mailto:${sEmail}`}>
              메일 앱으로 열기
            </a>
            <button className="modal-back-btn" onClick={() => setNStep(1)}>
              ← 이전으로
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default ContactModal
