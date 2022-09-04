import { useNavigate } from "react-router-dom";
import withoutAuth from "../utils/protectRoute/withoutAuth";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="Home bg-gray-800 h-[80%]">
      <div className="h-[60%] flex flex-col items-center justify-center animate-pulse">
        <div className="text-center text-7xl text-gray-300 m-6"><span className="text-blue-700">Konekt</span></div>
        <div className="text-center text-4xl text-gray-400 m-6">High quality video chat</div>
      </div>
    </div>
  )
}

export default withoutAuth(Landing);