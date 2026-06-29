import Counter from './components/Counter.jsx';
import Accordion from './components/Accordion.jsx';

export default function () {
  return (
    <div>
      <h1>Hello, World!</h1>
      <Counter />
      <Accordion title="leggi qua sotto">
        <h2>Contenuto dell'accordion</h2>
        <p>"Lorem ipsum sorem lorem ipsum ipsum dolor sit amet super lorem ipsum dolor sit amet super lorem ipsum dolor sit amet super" </p>
      </Accordion>
    </div>
  )
}