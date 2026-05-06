import './Contact.css'

function Contact({ onInquiry }) {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">
          <span>문의</span>
        </h2>
        <div className="contact-card">
          <p className="contact-text">서비스 이용 문의나 가입 관련 문의는 이메일로 연락주세요.</p>
          <p className="contact-email">stockop123@naver.com</p>
          <p className="contact-sub">평일 오전 9시 ~ 오후 6시 응답</p>
          <button className="contact-btn" onClick={onInquiry}>
            문의하기
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact
