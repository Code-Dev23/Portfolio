import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css'

import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <header>
          <NavBar />
        </header>   
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/projects">
          <ProjectsPage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="*">
          <h1>404 ERROR</h1>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;