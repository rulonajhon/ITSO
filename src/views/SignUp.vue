<template>
    <div>
      <h1>Sign Up</h1>
      <form @submit.prevent="register">
        <input v-model="name" type="text" placeholder="Full Name" required />
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
      <router-link to="/login">Already have an account? Login</router-link>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { auth, database } from "@/firebase";
  import { createUserWithEmailAndPassword } from "firebase/auth";
  import { ref as dbRef, set } from "firebase/database";
  
  export default {
    setup() {
      const name = ref("");
      const email = ref("");
      const password = ref("");
      const errorMessage = ref("");
  
      const register = async () => {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
          const user = userCredential.user;
  
          // Save user details to Firebase Realtime Database
          await set(dbRef(database, "users/" + user.uid), {
            name: name.value,
            email: email.value,
            uid: user.uid
          });
  
          alert("Account created successfully!");
        } catch (error) {
          errorMessage.value = error.message;
        }
      };
  
      return { name, email, password, errorMessage, register };
    },
  };
  </script>
  