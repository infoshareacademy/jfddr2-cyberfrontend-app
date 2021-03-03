import "./index-reset.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TableView from "./views/TableView/TableView";
import Nav from "./views/Nav/Nav";
import { AuthGuard } from "./views/AuthGuard/AuthGuard";
import { NewAgeProject } from "./views/NewAgeProjects/NewAgeProject";
// import { NewAgeProjects } from "./views/NewAgeProjects/NewAgeProjects";
import HomeView from "./views/LandingPage/HomeView";

import LandingPage from "./views/LandingPage/LandingPage";
import "./sass/main.scss";

const App = () => {
  return (
    <Router>
      <AuthGuard cover={<LandingPage />}>
        <Switch>
          <Route path="/board/project/:projectId">
            <Nav />
            <NewAgeProject />
          </Route>
          <Route path="/board/">
            <Nav />
            <TableView />
          </Route>
          <Route exact path="/">
            <Link to="/board">
              <HomeView />
            </Link>
          </Route>
        </Switch>
      </AuthGuard>
    </Router>
  );
};

export default App;
