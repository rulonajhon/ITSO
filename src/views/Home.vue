<template>
    <div>
      <h1>Home Page</h1>
      <p v-if="user">Welcome, {{ user.name }}!</p>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import { auth, database } from "@/firebase";
  import { signOut } from "firebase/auth";
  import { useRouter } from "vue-router";
  import { ref as dbRef, get } from "firebase/database";
  
  export default {
    setup() {
      const router = useRouter();
      const user = ref(null);
  
      const fetchUserData = async () => {
        const currentUser = auth.currentUser;
        if (currentUser) {
          const userSnapshot = await get(dbRef(database, "users/" + currentUser.uid));
          if (userSnapshot.exists()) {
            user.value = userSnapshot.val();
          }
        }
      };
  
      const logout = async () => {
        try {
          await signOut(auth);
          alert("Logged out successfully!");
          router.push("/login");
        } catch (error) {
          console.error(error.message);
        }
      };
  
      onMounted(fetchUserData);
  
      return { user, logout };
    },
  };
  </script>
  