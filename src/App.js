import { firebaseConfig } from "../src/firebase/firebaseConfig";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "./index-reset.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectView from "./views/ProjectView/ProjectView";
import TableView from "./views/TableView/TableView";
import Nav from "./views/Nav/Nav";
import LoginButton from "./views/LandingPage/LandingPage";
import { useEffect, useState } from "react";
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .get()
      .then((snapshot) => {
        const users = snapshot.docs.map((user) => {
          return {
            ...user.data(),
            id: user.id,
          };
        });
        setData(users);
      });
  }, []);
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/project">
          <ProjectView data={data} setData={setData} />
        </Route>
        <Route path="/table">
          <TableView data={data} setData={setData} />
        </Route>
        <Route path="/">
          <LoginButton data={data} setData={setData} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
