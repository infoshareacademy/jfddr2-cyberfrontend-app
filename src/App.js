import "./index-reset.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectView from "./views/ProjectView/ProjectView";
import TableView from "./views/TableView/TableView";
import Nav from "./views/Nav/Nav";
import { AuthGuard } from "./views/AuthGuard/AuthGuard";

import LandingView from "./views/LandingPage/LandingPage";

const App = () => {
  return (
    <AuthGuard cover={<LandingView />}>
      <Router>
        <Nav />
        <Switch>
          <Route path="/board/:projectName">
            <ProjectView />
          </Route>
          <Route path="/">
            <TableView />
          </Route>
        </Switch>
      </Router>
    </AuthGuard>
  );
};

export default App;
