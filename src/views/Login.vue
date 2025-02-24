<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
      <router-link to="/signup">Don't have an account? Sign Up</router-link>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { auth } from "@/firebase";
  import { signInWithEmailAndPassword } from "firebase/auth";
  import { useRouter } from "vue-router";
  
  export default {
    setup() {
      const email = ref("");
      const password = ref("");
      const errorMessage = ref("");
      const router = useRouter();
  
      const login = async () => {
        try {
          await signInWithEmailAndPassword(auth, email.value, password.value);
          alert("Login successful!");
          router.push("/home"); // Redirect to home page
        } catch (error) {
          errorMessage.value = error.message;
        }
      };
  
      return { email, password, errorMessage, login };
    },
  };
  </script>
  