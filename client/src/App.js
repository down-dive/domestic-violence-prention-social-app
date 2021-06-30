import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Profile from './pages/Profile';


function App() {
  return (
    <Router>
    <div className="flex-column justify-flex-start min-100-vh">
      <div className="container">
        <Switch>
          <Route exact path="/profile/:username?" component={Profile} />
        </Switch>
      </div>
    </div>
  </Router>
//   <div className="App">
//   <header className="App-header">
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
  );
}

export default App;
