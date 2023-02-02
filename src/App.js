import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Icon } from 'semantic-ui-react';
import InputSearch from './components/InputSearch';

function App() {
  return (
    <div className="App">
      <InputSearch />
      <Button animated>
        <Button.Content visible>Next</Button.Content>
        <Button.Content hidden>
          <Icon name='arrow right' />
        </Button.Content>
      </Button>
    </div>
  );
}

export default App;
