import "./index-reset.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TableView from "./views/TableView/TableView";
import Nav from "./views/Nav/Nav";
import { AuthGuard } from "./views/AuthGuard/AuthGuard";
import { NewAgeProject } from "./views/NewAgeProjects/NewAgeProject";
import { NewAgeProjects } from "./views/NewAgeProjects/NewAgeProjects";

import LandingPage from "./views/LandingPage/LandingPage";

const App = () => {
  return (
    <AuthGuard cover={<LandingPage />}>
      <Router>
        <Nav />
        <Switch>
          <Route path="/board/project/:projectId">
            <NewAgeProject />
          </Route>
          <Route path="/board/">
            <TableView />
          </Route>
          <Route exact path="/">
            <Link to="/board">
              <img src="https://via.placeholder.com/150" alt="" />
            </Link>
          </Route>
        </Switch>
      </Router>
    </AuthGuard>
  );
};

export default App;
