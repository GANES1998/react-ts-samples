import './App.css';
import ButtonComponent from './components/ButtonComponent';
import Heading from './components/Heading';
import InputComponent from './components/InputComponent';
import Status, { STATUS_ENUM } from './components/Status';

function App() {
  return (
    <div className="App">
      <Status status={STATUS_ENUM.loading} />
      <Status status={STATUS_ENUM.success} />
      <Status status={STATUS_ENUM.error} />
      <br />
      {/* String as children */}
      <Heading>Another string...</Heading>

      {/* React element as children */}
      <Heading>
        <h2>Here goes the children</h2>
      </Heading>

      <InputComponent />
      <ButtonComponent>Button</ButtonComponent>
    </div>
  );
}

export default App;
