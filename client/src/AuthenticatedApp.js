import Home from "./Home";
import { useHistory } from "react-router-dom";

function AuthenticatedApp({ currentUser, setCurrentUser }) {
  const history = useHistory();

  const handleLogout = () => {
    fetch(`/logout`, {
      method: "DELETE",
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        setCurrentUser(null);
        history.push("/");
      }
    });
  };

  return (
    <div>
      <Home
        setCurrentUser={setCurrentUser}
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
    </div>
  );
}

export default AuthenticatedApp;
