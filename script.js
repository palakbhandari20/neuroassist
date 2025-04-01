import { auth, provider } from "./firebase.js";
import { signInWithPopup, signOut } from "firebase/auth";

document.addEventListener("DOMContentLoaded", function () {
    const signInButton = document.getElementById("sign-in-button");
    const signOutButton = document.getElementById("sign-out-button");
    const userInfoSection = document.getElementById("user-info");
    const userNameElement = document.getElementById("user-name");
    const userEmailElement = document.getElementById("user-email");

    // ✅ Google Sign-In Event Listener
    signInButton.addEventListener("click", async function () {
        try {
            console.log("Attempting Google Sign-In..."); // Debugging Log
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log("User signed in:", user); // Debugging Log

            if (user) {
                userNameElement.textContent = `Name: ${user.displayName}`;
                userEmailElement.textContent = `Email: ${user.email}`;
                userInfoSection.classList.remove("hidden");
                signInButton.style.display = "none";
            }
        } catch (error) {
            console.error("Error during sign-in:", error.message);
        }
    });

    // ✅ Sign Out Event Listener
    signOutButton.addEventListener("click", async function () {
        try {
            await signOut(auth);
            console.log("User signed out."); // Debugging Log
            userNameElement.textContent = "";
            userEmailElement.textContent = "";
            userInfoSection.classList.add("hidden");
            signInButton.style.display = "block";
        } catch (error) {
            console.error("Error during sign-out:", error.message);
        }
    });
});
