import data from './data';
import List from './List';
import {useState} from "react";

function App() {
    const [people, setPeople] = useState(data);
  return (
      <main>
        <section className="container">
          <h3>{people.length} birthdays today</h3>

          <List people={people}/>np

          <button onClick={() => setPeople([])}>
            Clear all
          </button>
        </section>
      </main>
  );
}

export default App;