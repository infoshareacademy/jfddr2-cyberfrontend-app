import NewProjectBtn2 from "./NewProjectBtn2";
import "./NewProjectBtn.css";
import { useUser } from "../../contexts/UserContext";
import { NewAgeProjects } from "../NewAgeProjects/NewAgeProjects";
import firebase from "firebase";

function TableView() {
  const { user, userData } = useUser();

  const logout = () => {
    firebase.auth().signOut();
  };
  return (
    <div>
      <h3>
        Hello <span>{userData.username || "Anonymous"}</span>
      </h3>
      <button onClick={logout}>Logout</button>
      <div>
        <h2>This is your projects:</h2>
        <NewProjectBtn2 userId={user.uid} />
        <NewAgeProjects />
      </div>
    </div>
  );
}

export default TableView;
