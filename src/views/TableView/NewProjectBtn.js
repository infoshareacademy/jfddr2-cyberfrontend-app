import './NewProjectBtn.css';
import firebase from 'firebase/app';
import 'firebase/firestore';

function NewProjectBtn({ data, userId }) {
  // const projectId = 'project' + timeStamp;
  // firebase
  //   .firestore()
  //   .collection("users")
  //   .doc(userId)
  //   .update({
  //     board: {
  //       ...data[0].board,
  //       projectId: {
  //         //jeśli chcesz dodać nowy project tutaj musisz zmienić nazwę klucza. Jeśli chcesz wstawiać go używając stanu inputa to musisz zrobić taki myk: [stanInputa] : {...
  //         archive: false, //jeśli chcesz edytować obiekt to nazwa klucza musi być taka sama i wstawiasz wszystkie dane obiektu wraz z tymi zmienionymi
  //         favourite: false,
  //         projectId,
  //         projectName: "Project 0",
  //         projectContent: {},
  //       },
  //     },
  //   });
  return <button>NEW project</button>;
}

export default NewProjectBtn;
