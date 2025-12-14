import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';

import './styles/global.css';
import './styles/theme.css';

export function App() {
  console.log('Oi');

  return (
    <>
      <Heading>
        Ola Mundo
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ea rerum
        fuga illum suscipit? Fuga hic, accusantium illum, tenetur eveniet iste
        harum quis laudantium quasi amet nulla eaque odit labore.
      </p>
    </>
  );
}
