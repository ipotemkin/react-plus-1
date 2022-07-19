import './App.css';
import { Button } from './components/Button/Button';
import { Icon } from './components/Icon/Icon';
import { StateButton } from './components/StateButton/StateButton';

import logo from './logo.svg';
// import icon from './components/StateButton/assets/icon.svg'
import { IconWithLabel } from './components/IconWithLabel/IconWithLabel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Рождение кнопки</h3>
        <Button text="Просто кнопка"/>
        <br />
        <h3>Многоликий кнопкус</h3>
        <StateButton text="Button normal m" icon/>
        <StateButton text="Button action m" state="action" size="m" icon />
        <StateButton text="Button outlined s" state="outlined" size="s" icon />
        <StateButton text="Button outlined-info l" state="outlined-info" size="l" icon />
        <StateButton text="Button outlined-danger xl" state="outlined-danger" size="xl" icon />
        <StateButton text="Button raised" state="raised" icon />
        <StateButton text="Button flat" state="flat" icon />
        <StateButton text="Button flat-info" state="flat-info" icon />
        <StateButton text="Button flat-danger" state="flat-danger" icon />
        <StateButton text="Button flat-secondary" state="flat-secondary" icon />
        <br />
        <h3>Айконка</h3>
        <Icon src={logo} size={100}/>
        <br />
        <h3>Поженим!</h3>
        <StateButton text="Icon test" state="outlined">
          <Icon src={logo} size={64}/>
        </StateButton>
        <br />
        <h3>С подписью понятнее</h3>
          <IconWithLabel
            src={logo} size={100}
            label="React Logo" labelSize={28} />
        <br />
        <br />
        <h3>С подписью понятнее</h3>
      </header>
    </div>
  );
}

export default App;
