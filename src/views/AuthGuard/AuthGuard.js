import { useUser } from "../../contexts/UserContext";

export const AuthGuard = ({ children, cover }) => {
  const { user } = useUser();

  return user === null ? cover : children;
};
