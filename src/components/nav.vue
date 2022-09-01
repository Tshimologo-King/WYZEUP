
\<template>
  <div class="container">
    <nav>
      <ul>
        <li>
          <router-link to="/">
            <font-awesome-icon icon="home" />
            Home</router-link
          >
        </li>
        <li>
          <router-link to="/Careers">
            <font-awesome-icon icon="compass" />Careers</router-link
          >
        </li>
        <li>
          <router-link to="/Podcasts">
            <font-awesome-icon icon="compass" />Podcast</router-link
          >
        </li>
        <li>
          <router-link to="/News">
            <font-awesome-icon icon="compass" />News</router-link
          >
        </li>
        <li>
          <router-link to="/Login">
            <font-awesome-icon icon="compass" />
            Login</router-link
          >
        </li>
        <li>
          <router-link to="/Register">
            <font-awesome-icon icon="compass" />
            Sign Up</router-link
          >
        </li>
        <li><router-link to="/" :click="logout">Logout</router-link></li>
        <li><router-link to="/adminDashboard"> Admin </router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap");

.container {
  overflow: hidden;
}
nav {
  font-family: "Roboto Condensed", sans-serif;
  display: flex;
  justify-content: center;
  padding: 15px;
  width: 100%;
  font-weight: 600;
  color: white;
  position: sticky;
  background: rgb(27, 95, 143);
}

nav ul {
  display: flex;
}
nav li {
  color: white;
}

nav ul li {
  list-style: none;
}

nav a {
  font-weight: 500;
  color: whitesmoke;
  text-decoration: none;
  margin: 12px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.entry {
  position: absolute;
  right: 5%;
  display: flex;
}
</style>