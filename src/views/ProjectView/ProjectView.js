import Column from "./Column";
import AddNewColumn from "./AddNewColumn";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProjectView = ({ data }) => {
  let { projectName } = useParams();
  // const [project, setProject] = useState({});
  // useEffect(() => {
  //   const finder = data.find((project) => project.projectName === projectName);
  //   console.log(finder);
  //   setProject(finder);
  // },[]);

  const fetchedData = () => {
    if (!data || Object.keys(data).length === 0) {
      return <div>Loading...</div>;
    } else {
      // const columnsInProject = project;
      // console.log(columnsInProject);
      // const userColumns = Object.keys(columnsInProject).map((key) => {
      //   return (
      //     <Column
      //       key={key}
      //       index={key}
      //       label={columnsInProject[key].columnName}
      //       data={data}
      //     />
      //   );
      // });
      // return userColumns;
    }
  };

  return (
    <div className="project-canvas">
      {fetchedData()}
      {/* <AddNewColumn data={data} /> */}
    </div>
  );
};

export default ProjectView;
