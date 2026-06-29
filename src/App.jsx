import Counter from './components/Counter.jsx';
import Accordion from './components/Accordion.jsx';

export default function () {
  return (
    <div>
      <h1>Hello, World!</h1>

      <Accordion title="Accordion Counter">
        <Counter />
      </Accordion>
      <Accordion title="Testo Accordion">
        <h2>Contenuto dell'accordion</h2>
        <p>"Lorem ipsum sorem lorem ipsum ipsum dolor sit amet super lorem ipsum dolor sit amet super lorem ipsum dolor sit amet super" </p>
      </Accordion>
      <Accordion title="Breve Accordion">
        <h2>Brutto testo</h2>
        <p>"Lorem ipsum sorem lorem ipsum ipsum dolor sit amet super lorem ipsum dolor sit amet super lorem ipsum dolor sit amet super" </p>
      </Accordion>
    </div>
  )
}