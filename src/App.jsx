import { useState } from 'react';
import Counter from './components/Counter.jsx';
import Accordion from './components/Accordion.jsx';

export default function () {
  const [currentOpen, setCurrentOpen] = useState(null);

  return (
    <div>
      <h1>Hello, World!</h1>

      <Accordion title="Accordion Counter" isOpen={currentOpen === 0} onAccordionClick={() => setCurrentOpen(currentOpen === 0 ? null : 0)} >
        <Counter />
      </Accordion>
      <Accordion title="Testo Accordion" isOpen={currentOpen === 1} onAccordionClick={() => setCurrentOpen(currentOpen === 1 ? null : 1)} >
        <h2>Contenuto dell'accordion</h2>
        <p>"Lorem ipsum sorem lorem ipsum ipsum dolor sit amet super lorem ipsum dolor sit amet super lorem ipsum dolor sit amet super" </p>
      </Accordion>
      <Accordion title="Breve Accordion" isOpen={currentOpen === 2} onAccordionClick={() => setCurrentOpen(currentOpen === 2 ? null : 2)} >
        <h2>Brutto testo</h2>
        <p>"Lorem ipsum sorem lorem ipsum ipsum dolor sit amet super lorem ipsum dolor sit amet super lorem ipsum dolor sit amet super" </p>
      </Accordion>
    </div>
  )
}