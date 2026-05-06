import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Pricing from './components/Pricing.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ManualPage from './components/ManualPage.jsx'
import ContactModal from './components/ContactModal.jsx'

function App() {
  const [sPage, setSPage] = useState('home')
  const [blModal, setBlModal] = useState(false)

  return (
    <div className="app">
      <Navbar sPage={sPage} onNavigate={setSPage} />
      {sPage === 'home' ? (
        <>
          <Hero onInquiry={() => setBlModal(true)} />
          <Services />
          <Pricing onInquiry={() => setBlModal(true)} />
          <Contact onInquiry={() => setBlModal(true)} />
          <Footer />
        </>
      ) : (
        <>
          <ManualPage />
          <Footer />
        </>
      )}
      {blModal && <ContactModal onClose={() => setBlModal(false)} onNavigate={setSPage} />}
    </div>
  )
}

export default App
