import { useState } from 'react';
import Counter from './components/Counter.jsx';
import Accordion from './components/Accordion.jsx';

export default function () {
  const [currentOpen, setCurrentOpen] = useState(null);

  const accordionsData = [
    {
      title: "Accordion Counter",
      content: <Counter />
    },
    {
      title: "Testo Accordion",
      content: <>
        <h2>Contenuto dell'accordion</h2>
        <p>"Lorem ipsum sorem lorem ipsum ipsum dolor sit amet super lorem ipsum dolor sit amet super lorem ipsum dolor sit amet super" </p></>
    },
    {
      title: "Breve Accordion",
      content: <>
        <h2>Brutto testo</h2>
        <p>"Lorem ipsum sorem lorem ipsum ipsum dolor sit amet super lorem ipsum dolor sit amet super lorem ipsum dolor sit amet super" </p>
      </>
    }
  ];

  return (
    <div>
      <h1>Hello, World!</h1>
      {accordionsData.map((data, index) => (
        <Accordion
          key={index}
          title={data.title}
          isOpen={currentOpen === index}
          onAccordionClick={() => setCurrentOpen(currentOpen === index ? null : index)}
        >
          {data.content}
        </Accordion>
      ))}
    </div>
  )
}