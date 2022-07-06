import './App.css';
import { Button } from './components/Button/Button';
import { StateButton } from './components/StateButton/StateButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Button text="Просто кнопка"/>
      <br />
      {/* <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap'}}> */}
        <StateButton />
        <StateButton text="Button action m" buttonState="action" size="m" />
        <StateButton text="Button outlined s" buttonState="outlined" size="s" />
        <StateButton text="Buttontn outlined-info l" buttonState="outlined-info" size="l" />
        <StateButton text="Button outlined-danger xl" buttonState="outlined-danger" size="xl" />
        <StateButton text="Button rased" buttonState="raised" />
        <StateButton text="Button flat" buttonState="flat" />
        <StateButton text="Button flat-info" buttonState="flat-info" />
        <StateButton text="Button flat-danger" buttonState="flat-danger" />
        <StateButton text="Button flat-secondary" buttonState="flat-secondary" />
      {/* </div> */}
      </header>
    </div>
  );
}

export default App;
