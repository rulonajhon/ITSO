<template>
  <div id="app">
    <nav>
      <router-link to="/landing">Landing</router-link>
      <router-link to="/signup">Sign Up</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/home">Home</router-link>
    </nav>
    
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Basic global styles */
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 20px;
}

nav {
  background: #333;
  padding: 10px;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}
</style>
