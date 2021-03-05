import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import TableView from './views/TableView/TableView';
import Nav from './views/Nav/Nav';
import { AuthGuard } from './views/AuthGuard/AuthGuard';
import { NewAgeProject } from './views/NewAgeProjects/NewAgeProject';
import HomeView from './views/LandingPage/HomeView';
import LandingPage from './views/LandingPage/LandingPage';
import './sass/main.scss';

const App = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <AuthGuard cover={<LandingPage />}>
        <Switch>
          <Route path="/board/project/:projectId">
            <div className="container">
              <NewAgeProject />
              <Nav />
            </div>
          </Route>
          <Route path="/board/">
            <TableView />
            <Nav />
          </Route>
          <Route exact path="/">
            <Link to="/board">
              <HomeView />
            </Link>
          </Route>
        </Switch>
      </AuthGuard>
    </HashRouter>
  );
};

export default App;
