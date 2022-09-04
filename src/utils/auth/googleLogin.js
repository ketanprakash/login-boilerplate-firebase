import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../config/firebase";

const googleLogin = async () => {
  let user, errorMessage;
  try{
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;0
    // The signed-in user info.
    user = result.user;
    return user;
  }
  catch(error){
    // Handle Errors here.
    const errorCode = error.code;
    errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
  }
  return [user, errorMessage];
}

export default googleLogin;