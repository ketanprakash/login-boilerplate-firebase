import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../config/firebase"
import { Navigate } from "react-router-dom";
import Loading from "../../components/Loading";

const withoutAuth = (Component) => {
  const WithoutAuthComponent = (props) => {
    const [user, loading] = useAuthState(auth);

    if (loading){
      return <Loading/>
    }
  
    if (!user){
      return <Component {...props}/>
    }
    else {
      return <Navigate to="/home"/>
    }
  }

  return WithoutAuthComponent;
}

export default withoutAuth;