import { getDocs, collection } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { auth, db } from "./app/firebase.js";
import { loginCheck } from "./app/loginCheck.js";
import {setupPosts} from "./app/postList.js";
import "./app/logout.js";
import "./app/singupForm.js";
import "./app/signinForm.js";
import "./app/googleLogin.js";
import "./app/facebookLogin.js";
import "./app/githubLogin.js";

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const querySnapshot = await getDocs(collection(db, 'posts'))
    setupPosts(querySnapshot.docs)
    // console.log(querySnapshot.docs);
  } else {
    setupPosts([])
  }
  loginCheck(user);
});
