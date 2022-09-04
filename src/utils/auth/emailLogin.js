import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

const emailLogin = async (email, password) => {
  let user = null, errorMessage = null;
  try{
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    user = userCredential.user;
  }
  catch(error) {
    errorMessage = error.message;
  }
  return [user, errorMessage];
}
export default emailLogin;