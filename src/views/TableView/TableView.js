import NewProjectBtn from "./NewProjectBtn";
import { useUser } from "../../contexts/UserContext";
import { NewAgeProjects } from "../NewAgeProjects/NewAgeProjects";
import LogoutBtn from "./LogoutBtn";

function TableView() {
  const { user, userData } = useUser();
  return (
    <div>
      <div className="board-nav">
        <h3>
          Hello
          <span className="board__userName">
            {userData.username || "Anonymous"}
          </span>
        </h3>
        <LogoutBtn />
      </div>
      <div className="projectsContaniner">
        <NewProjectBtn userId={user.uid} />
        <h2 className="projectsContaniner__title">Your projects:</h2>
        <NewAgeProjects />
      </div>
    </div>
  );
}

export default TableView;
