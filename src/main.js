import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { auth } from "./app/firebase.js";
import { loginCheck } from "./app/loginCheck.js";
import "./app/logout.js";
import "./app/singupForm.js";
import "./app/signinForm.js";

onAuthStateChanged(auth, async (user) => {
  loginCheck(user);
  // if (user) {
  //   loginCheck(user);
  // } else {

  // }
});
