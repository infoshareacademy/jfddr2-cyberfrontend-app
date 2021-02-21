import Projects from "./Projects";

function TableView({ data, setData }) {
  // console.log(data, setData);
  return (
    <div>
      <Projects data={data} />
    </div>
  );
}

export default TableView;
