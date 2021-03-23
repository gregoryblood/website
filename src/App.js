import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import Title from './Components/Title';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Title/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
