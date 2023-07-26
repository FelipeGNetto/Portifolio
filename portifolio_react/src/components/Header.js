import React from 'react'

export default function Header() {
  return (
    <div>
        <header className="header">
            <div className="box">
                <h1>👋 Oi, eu sou o Felipe</h1>
                <div className="social">
                    <h1 id="out">Front-end</h1>
                    <a href="https://www.linkedin.com/in/felipe-netto-105499261/"><i className="bi bi-linkedin text-dark nav-link"></i></a>
                    <a href="https://github.com/FelipeGNetto"><i className="bi bi-github text-dark"></i></a>
                    <a href="Karin CV.pdf"><i className="bi bi-filetype-pdf text-dark"></i></a>
                </div> 
                <h1>Developer</h1>
                <div className="p-content">
                    <p>Desenvolvedor Front-end, especializado em HTML, CSS, Bootstrap, JavaScript e React.js.</p>
                </div>
            </div>
        </header>
    </div>
  )
}
