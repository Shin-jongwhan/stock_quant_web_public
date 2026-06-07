import './ContactModal.css'
import { useEscapeKey } from '../hooks/useEscapeKey'

function ContactModal({ onClose, onNavigate }) {
  useEscapeKey(onClose)

  function handleGoManual() {
    onClose()
    onNavigate('manual')
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-icon">🤖</div>
        <h2 className="modal-title">베타 참여 안내</h2>
        <p className="modal-desc">
          현재 베타 테스트 기간으로 <strong>모든 서비스가 무료</strong>입니다.<br />
          텔레그램 봇을 등록하시면 순차적으로 승인해 드립니다.<br />
          봇 생성 방법은 아래 메뉴얼을 참고해 주세요.
        </p>
        <button className="modal-manual-btn" onClick={handleGoManual}>
          📖 봇 연동 메뉴얼 보기
        </button>
        <button className="modal-back-btn" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  )
}

export default ContactModal
