import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../config/firebase";

const googleRegister = async () => {
  let user, errorMessage;

  try{
    const result = await signInWithPopup(auth, provider)
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    user = result.user;
  }
  catch(error){
    const errorCode = error.code;
    errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
  }

  return [user, errorMessage];
} 

export default googleRegister;