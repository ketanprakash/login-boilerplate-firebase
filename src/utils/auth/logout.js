import { signOut } from "firebase/auth"
import { auth } from "../../config/firebase"

const logout = async () => {
  try{
    await signOut(auth);
  }
  catch(error) {
    return [error];
  }
  return [null];
}

export default logout;