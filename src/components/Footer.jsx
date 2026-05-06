import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-brand">STOCK QUANT</p>
        <p className="footer-info">
          대표 신종환&nbsp;&nbsp;|&nbsp;&nbsp;사업자등록번호 321-26-01416
        </p>
        <p className="footer-contact">
          문의:{' '}
          <a href="mailto:stockop123@naver.com">stockop123@naver.com</a>
        </p>
        <p className="footer-copy">© {new Date().getFullYear()} STOCK QUANT. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
