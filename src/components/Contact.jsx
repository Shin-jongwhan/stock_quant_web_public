import './Contact.css'

function Contact({ onInquiry }) {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">
          <span>문의</span>
        </h2>
        <div className="contact-card">
          <p className="contact-text">베타 테스트 기간 중 모든 서비스를 무료로 이용하실 수 있습니다.<br />텔레그램 봇을 등록하시면 순차적으로 승인해 드립니다.<br />문의사항은 아래 이메일로 연락해 주세요.</p>
          <p className="contact-email">stockop123@naver.com</p>
          <p className="contact-sub">평일 오전 9시 ~ 오후 6시 응답</p>
          <button className="contact-btn" onClick={onInquiry}>
            베타 참여 신청하기
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact
