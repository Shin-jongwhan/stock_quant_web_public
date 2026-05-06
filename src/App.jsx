import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Pricing from './components/Pricing.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ManualPage from './components/ManualPage.jsx'
import ContactModal from './components/ContactModal.jsx'

function parseHash() {
  const sRaw = window.location.hash.replace('#', '')
  const lsParts = sRaw.split('/')
  const sPage = lsParts[0] === 'manual' ? 'manual' : 'home'
  const sTab = lsParts[1] || 'join'
  return { sPage, sTab }
}

function App() {
  const { sPage: sInitPage, sTab: sInitTab } = parseHash()
  const [sPage, setSPage] = useState(sInitPage)
  const [sManualTab, setSManualTab] = useState(sInitTab)
  const [blModal, setBlModal] = useState(false)

  useEffect(() => {
    const sHash = sPage === 'manual' ? `#manual/${sManualTab}` : '#home'
    window.history.replaceState(null, '', sHash)
  }, [sPage, sManualTab])

  useEffect(() => {
    function handleHashChange() {
      const { sPage: sNewPage, sTab: sNewTab } = parseHash()
      setSPage(sNewPage)
      setSManualTab(sNewTab)
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  function handleInquiry() {
    setBlModal(true)
  }

  function handleSubscriptionManual() {
    setBlModal(false)
    setSPage('manual')
    setSManualTab('subscription')
  }

  function handleNavigate(sP) {
    if (sP !== 'manual') setSManualTab('join')
    setSPage(sP)
  }

  return (
    <div className="app">
      <Navbar sPage={sPage} onNavigate={handleNavigate} />
      {sPage === 'home' ? (
        <>
          <Hero onInquiry={handleInquiry} />
          <Services />
          <Pricing onInquiry={handleInquiry} />
          <Contact onInquiry={handleInquiry} />
          <Footer />
        </>
      ) : (
        <>
          <ManualPage sInitTab={sManualTab} />
          <Footer />
        </>
      )}
      {blModal && (
        <ContactModal
          onClose={() => setBlModal(false)}
          onNavigate={handleNavigate}
          onSubscription={handleSubscriptionManual}
        />
      )}
    </div>
  )
}

export default App
