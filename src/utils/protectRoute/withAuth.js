import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../config/firebase"
import { Navigate } from "react-router-dom";
import Loading from "../../components/Loading";

const withAuth = (Component) => {
  const AuthComponent = (props) => {
    const [user, loading] = useAuthState(auth);

    if (loading){
      return <Loading/>;
    }
  
    if (user){
      return <Component {...props}/>
    }
    else {
      return <Navigate to="/"/>
    }
  }

  return AuthComponent;
}

export default withAuth;