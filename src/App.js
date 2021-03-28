import './App.css';
import { Route, Switch } from 'react-router';
import Title from './Components/Title';
import Body from './Components/Body';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Title/>
          <Body />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
