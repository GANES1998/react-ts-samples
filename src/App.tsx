import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonLists';

function App() {
  const person = {
    first: 'Ganeson',
    last: 'Ravichandran'
  }

  const personList = [
    {
      first: 'Ganeson',
      last: 'Ravichandran'
    },
    {
      first: 'Senthi',
      last: 'Ramanath'
    },
    {
      first: 'mea',
      last: 'mea'
    }
  ]

  return (
    <>
      <Greet name={"Ganeson"} isLoggedIn messageCount={10} />
      <br />
      <Person name={person} />

      <br />
      <PersonList names={personList} />
    </>
  );
}

export default App;
