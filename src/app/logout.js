import { signOut } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { auth } from "./firebase.js";

const logout = document.querySelector("#logout");

logout.addEventListener("click", async (e) => {
  //console.log("logout");
  await signOut(auth);
  console.log("user signed out");
});
