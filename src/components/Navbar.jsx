import { useState } from 'react'
import './Navbar.css'

function Navbar({ sPage, onNavigate }) {
  const [blOpen, setBlOpen] = useState(false)

  function handleNav(sTarget) {
    onNavigate(sTarget)
    setBlOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <button className="navbar-logo" onClick={() => handleNav('home')}>
          STOCK QUANT
        </button>

        <button
          className={`navbar-hamburger ${blOpen ? 'open' : ''}`}
          onClick={() => setBlOpen(!blOpen)}
          aria-label="메뉴"
        >
          <span /><span /><span />
        </button>

        <ul className={`navbar-links ${blOpen ? 'open' : ''}`}>
          <li>
            <button
              className={sPage === 'home' ? 'active' : ''}
              onClick={() => handleNav('home')}
            >
              홈
            </button>
          </li>
          <li>
            <button
              className={sPage === 'manual' ? 'active' : ''}
              onClick={() => handleNav('manual')}
            >
              메뉴얼
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
