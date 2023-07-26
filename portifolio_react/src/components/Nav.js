import React from 'react';

export default function Nav({ buttons }) {
    
  const handleScrollClick = (selector) => () => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <nav className="bg-dark fixed-top">
        <ul>
          {buttons &&
            buttons.map((button, index) => (
              <li key={index}>
                <button className="bg-dark" onClick={handleScrollClick(button.selector)}>
                  {button.text}
                </button>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}
