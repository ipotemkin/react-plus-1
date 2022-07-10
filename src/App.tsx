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
        <StateButton text="Button normal m"/>
        <StateButton text="Button action m" state="action" size="m" />
        <StateButton text="Button outlined s" state="outlined" size="s" />
        <StateButton text="Button outlined-info l" state="outlined-info" size="l" />
        <StateButton text="Button outlined-danger xl" state="outlined-danger" size="xl" />
        <StateButton text="Button raised" state="raised" />
        <StateButton text="Button flat" state="flat" />
        <StateButton text="Button flat-info" state="flat-info" />
        <StateButton text="Button flat-danger" state="flat-danger" />
        <StateButton text="Button flat-secondary" state="flat-secondary" />
      {/* </div> */}
      </header>
    </div>
  );
}

export default App;
