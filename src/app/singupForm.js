import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { auth } from "./firebase.js";

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
  } catch (error) {
    // console.log(error.message);
    // console.log(error.code);

    if (error.code === 'auth/email-already-in-use') {
      alert("The email address is already in use by another account.");
    } else if (error.code === 'auth/invalid-email') {
      alert("The email address is misspelled.");
    } else if(error.code === 'auth/weak-password') {
      alert("The password is too weak.");
    }else if (error.code){
      alert('something went wrong');
    }

  }
});
