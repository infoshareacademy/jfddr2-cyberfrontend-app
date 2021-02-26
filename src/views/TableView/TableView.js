import SingleProject from "./SingleProject";
import "./Projects.css";
import NewProjectBtn from "./NewProjectBtn";
import NewProjectBtn2 from "./NewProjectBtn2";
import "./NewProjectBtn.css";
import { useUser } from "../../contexts/UserContext";
import { NewAgeProjects } from "../NewAgeProjects/NewAgeProjects";

function TableView() {
  const { user, userData } = useUser();

  const board = userData.board || {};
  return (
    <div>
      <h3>
        Hello <span>{userData.username || "Anonymous"}</span>
      </h3>
      <div>
        <h2>This is your projects:</h2>
        <NewProjectBtn2 userId={user.uid} />
        <NewAgeProjects />
      </div>

      {/* <div className="fav__projects">
        <h3>Favourite</h3>
        <div>
          {Object.keys(board)
            .filter((project) => {
              return board[project].favourite;
            })
            .map((project, key) => {
              return <SingleProject key={key} data={board[project]} />;
            })}
        </div>
      </div>
      <div className="all__projects">
        <h3>All Projects</h3>
        <div className="projects-container">
          {Object.keys(board).map((project, key) => {
            return <SingleProject key={key} data={board[project]} />;
          })}
          <NewProjectBtn board={board} userId={user.uid} />
        </div>
      </div>
      <div className="arch__projects">
        <h3>ARCHIVE</h3>
        <div>
          {Object.keys(board)
            .filter((project) => {
              return board[project].archive;
            })
            .map((project, key) => {
              return <SingleProject key={key} data={board[project]} />;
            })}
        </div>
      </div> */}
    </div>
  );
}

export default TableView;
