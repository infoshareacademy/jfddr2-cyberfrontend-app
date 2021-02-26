import SingleProject from "./SingleProject";
import "./Projects.css";
import NewProjectBtn from "./NewProjectBtn";
import "./NewProjectBtn.css";

function TableView({ board, userId }) {
  console.log(board);
  return (
    <div>
      <div className="fav__projects">
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
          <NewProjectBtn board={board} userId={userId} />
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
      </div>
    </div>
  );
}

export default TableView;
