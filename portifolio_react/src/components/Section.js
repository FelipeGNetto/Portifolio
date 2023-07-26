import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Sobre from './Sobre';
import Pessoal from './Pessoal';
import Cursos from './Cursos';

export default function Section() {

  const buttons = [
    { text: 'inicio', selector: '#inicio'},
    { text: 'Sobre mim', selector: '#sobre' },
    { text: 'Projetos pessoais', selector: '#pessoal' },
    { text: 'Projetos de cursos', selector: '#cursos' },
  ];

  return (
    <div>
        <div id='inicio'>
        <Nav buttons={buttons} />
        <Header />
        </div>
      <section className="container-items">
        <div id="sobre">
          <Nav buttons={buttons} />
          <Sobre />
        </div>

        <div id="pessoal">
          <Nav buttons={buttons} />
          <Pessoal />
        </div>

        <div id="cursos">
          <Nav buttons={buttons} />
          <Cursos />
        </div>
      </section>
    </div>
  );
}
