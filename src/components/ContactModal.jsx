import { useState, useEffect } from 'react'
import './ContactModal.css'

function ContactModal({ onClose, onNavigate, onSubscription }) {
  const [nStep, setNStep] = useState(1)

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

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
            <h2 className="modal-title">이메일 문의 양식 안내</h2>
            <p className="modal-desc">
              메뉴얼의 <strong>구독 안내</strong> 탭에서 이메일 문의 양식과<br />
              발송 주소를 확인할 수 있습니다.<br />
              양식을 복사하여 빈칸을 채운 뒤 보내주세요.
            </p>
            <button className="modal-manual-btn" onClick={onSubscription}>
              📋 이메일 문의 양식 확인하기
            </button>
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
