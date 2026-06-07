import './Footer.css'
import { CONTACT_EMAIL } from '../constants'

function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-brand">STOCK QUANT</p>
        <p className="footer-info">
          대표 신종환&nbsp;&nbsp;|&nbsp;&nbsp;사업자등록번호 321-26-01416
        </p>
        <p className="footer-contact">
          문의:{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
        <p className="footer-disclaimer">
          본 서비스는 현재 베타테스트 중입니다. 유사투자자문업 등 관련 법적 요건 마련 시 사전 고지 후 베타테스트가 종료될 수 있습니다.
        </p>
        <p className="footer-legal">
          <button className="footer-legal-link" onClick={() => onNavigate('legal')}>
            유사투자자문업 법령 준수 사항
          </button>
        </p>
        <p className="footer-copy">© {new Date().getFullYear()} STOCK QUANT. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
