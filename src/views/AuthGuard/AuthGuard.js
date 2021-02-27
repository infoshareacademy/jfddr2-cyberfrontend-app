import { useUser } from "../../contexts/UserContext";
// import {useHistory} from "react-router-dom"

export const AuthGuard = ({ children, cover }) => {
  const { user, userData } = useUser();

  return user === null ? cover : children;
};

// export const AuthGuard = ({ children, cover }) => {
//   const { user } = useUser();
//   let history = useHistory();

//   if (user === null) {
//     return cover;
//   } else {
//     history.push("/board");
//     return children;
//   }
// };
