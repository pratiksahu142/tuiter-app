import {useState} from "react";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {loginThunk, registerUserThunk} from "../services/auth-thunks";

function RegisterScreen() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRegister = async () => {
    try {
      const newUser = await dispatch(registerUserThunk({firstname, lastname, username, password}));
      console.log(newUser);
      alert('Registration Successful!')
      navigate("/tuiter/profile");
    } catch (e) {
      alert(e);
    }
  };
  return (
      <div>
        <h1>Register Screen</h1>
        <div className="mt-2">
          <label>First Name</label>
          <input className="form-control" type="text" value={firstname}
                 onChange={(event) => setFirstname(event.target.value)}/>
        </div>
        <div className="mt-2">
          <label>Last Name</label>
          <input className="form-control" type="text" value={lastname}
                 onChange={(event) => setLastname(event.target.value)}/>
        </div>
        <div className="mt-2">
          <label>Username</label>
          <input className="form-control" type="text" value={username}
                 onChange={(event) => setUsername(event.target.value)}/>
        </div>
        <div className="mt-2">
          <label>Password</label>
          <input className="form-control" type="password" value={password}
                 onChange={(event) => setPassword(event.target.value)}/>
        </div>
        <button className="btn btn-primary mt-2"
                onClick={handleRegister}>
          Register
        </button>
      </div>
  );
}

export default RegisterScreen;