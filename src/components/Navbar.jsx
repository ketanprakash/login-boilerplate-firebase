import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import logout from "../utils/auth/logout";

const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  return (
    <nav className="h-20 p-2 flex items-center justify-end">
      {!user ? 
        <div className="buttons--not-auth">
          <button 
            className="login-button inline-block text-white bg-blue-700 hover:bg-blue-800 px-5 py-3 m-2 rounded"
            onClick={() => {
              navigate('/login');
            }}
          >
              Login
          </button>
          <button 
            className="register-button inline-block text-white bg-green-600 hover:bg-green-700 px-5 py-3 m-2 rounded"
            onClick={() => {
              navigate('/register');
            }}
          >
            Register
          </button>
        </div>
      : 
        <div className="buttons-auth">
        <button 
            className="register-button inline-block text-white bg-red-600 hover:bg-red-700 px-5 py-3 m-2 rounded"
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        </div>
      }
    </nav>
  )
}

export default Navbar;