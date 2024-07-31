import { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleClick = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };

  return (
    <div>
      <h2></h2>
      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <button onClick={handleClick}>Login </button>
    </div>
  );
}

export default Login;
