import './index-reset.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProjectView from './views/ProjectView/ProjectView';
import TableView from './views/TableView/TableView';
import Nav from './views/Nav/Nav';
import MyApp from './views/LandingPage/MyApp';

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/project">
          <ProjectView />
        </Route>
        <Route path="/table">
          <TableView />
        </Route>
        <Route path="/">
          <MyApp />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
