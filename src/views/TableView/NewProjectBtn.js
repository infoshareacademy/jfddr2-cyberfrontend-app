import "./NewProjectBtn.css";
import firebase from "firebase/app";
import "firebase/firestore";

function NewProjectBtn({ data }) {
  console.log(data[0]);
  // console.log(data[0].id);
  // const id = data[0].id; //id pierwszego usera
  // firebase
  //   .firestore()
  //   .collection("users")
  //   .doc(id)
  //   .update({
  //     board: {
  //       ...data[0].board,
  //       project4: {
  //         //jeśli chcesz dodać nowy project tutaj musisz zmienić nazwę klucza. Jeśli chcesz wstawiać go używając stanu inputa to musisz zrobić taki myk: [stanInputa] : {...
  //         archive: false, //jeśli chcesz edytować obiekt to nazwa klucza musi być taka sama i wstawiasz wszystkie dane obiektu wraz z tymi zmienionymi
  //         favourite: false,
  //         projectId: 69,
  //         projectName: "Project 0",
  //         projectContent: {},
  //       },
  //     },
  //   });
  return <button>NEW project</button>;
}

export default NewProjectBtn;
