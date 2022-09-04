import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

const emailRegister = async (firstName, lastName, email, password) => {
  let user, errorMessage;
  try{
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    user = userCredential.user;
  }
  catch(error){
    const errorCode = error.code;
    errorMessage = error.message;
  }

  return [user, errorMessage];
}

export default emailRegister;