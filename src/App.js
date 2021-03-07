import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home'
import AddTask from './pages/AddTask'

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Task App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/addtask" className="nav-link">Add Task</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route path="/addtask">
          <AddTask />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
