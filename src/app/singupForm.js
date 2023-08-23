import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;
  console.log(email, password);

  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);
    // para cerrar el modal
    const sigupModal = document.querySelector("#singupModal");
    const modal = bootstrap.Modal.getInstance(sigupModal);
    modal.hide();

    showMessage("Welcome" + userCredentials.user.email);
  } catch (error) {
    // console.log(error.message);
    // console.log(error.code);

    if (error.code === "auth/email-already-in-use") {
      showMessage("Email already in use", "error");
    } else if (error.code === "auth/invalid-email") {
      showMessage("The email address is misspelled.", "error");
    } else if (error.code === "auth/weak-password") {
      showMessage("The password is too weak.", "error");
    } else if (error.code) {
      showMessage("something went wrong", "error");
    }
  }
});
