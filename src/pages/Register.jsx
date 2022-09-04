import { useState } from "react";
import emailRegister from "../utils/auth/emailRegister";
import googleRegister from "../utils/auth/googleRegister";
import withoutAuth from "../utils/protectRoute/withoutAuth";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  return (
    <div className="Login bg-gray-800 flex flex-col items-center justify-center h-[80%]">
      <form 
        className="flex flex-col max-w-full w-[600px]"
        onSubmit={async (e) => {
          e.preventDefault();
          const [user, errorMessage] = await emailRegister(firstName, lastName, email, password);
          if (errorMessage){
            setError(errorMessage);
          }
          else {
            setFirstName(""); setLastName(""); setEmail(""); setPassword("");
          }
        }}
      >
        <input 
          type="text" 
          className="px-3 py-2 m-3 rounded"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input 
          type="text" 
          className="px-3 py-2 m-3 rounded"
          value={lastName}                                       

          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
        <input 
          type="email" 
          className="px-3 py-2 m-3 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email ID"
          required
        />
        <input 
          type="password" 
          className="px-3 py-2 m-3 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}          
          placeholder="Password"
          required
        />
        <button 
          type="submit" 
          className="text-white bg-green-700 hover:bg-green-800 inline-block px-4 py-2 rounded m-3"
        >
            Register
        </button>
        {error && <div className="error bg-red-500 border-red-800 border-solid border-2 border-1 px-3 py-2 rounded m-3">{error}</div>}
      </form>

      <p className="m-3 text-2xl text-white dark">OR</p>

      <button 
          type="submit" 
          className="text-white bg-blue-800 hover:bg-blue-900 inline-block px-4 py-2 rounded m-3"
          onClick={async () => {
            const [user, errorMessage] = await googleRegister();
            setError(errorMessage);
          }}
      >
        Signup with Google
      </button>
      
    </div>
  )
}

export default withoutAuth(Register);