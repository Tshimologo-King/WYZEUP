<template>
  <div class="container">
    <form @submit.prevent="login">
      <div class="login">
        <label for="userEmail">Login</label>
        <input type="text" placeholder="Email" v-model="userEmail" />
        <label for="userPassword">Password</label>
        <input type="text" placeholder="Password" v-model="userPassword" />
        <a href="#">Forgot Password ?</a>
        <button type="submit">login</button>
      </div>
      <div v-if="message" class="alertMessage">
        {{ message }}
      </div>
    </form>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },

  data() {
    return {
      userEmail: "",
      userPassword: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        userEmail: this.userEmail,
        userPassword: this.userPassword,
      });
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap");
.container {
  overflow: hidden;
}

form {
  width: 100%;
  background: rgb(27, 95, 143);
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
}
.login {
  display: flex;
  justify-content: center;
  margin-inline: auto;
  flex-direction: column;
  background: white;
  padding: 25px;
  min-height: 150px;
  width: 50%;
}

.login label {
  font-size: 24px;
  font-family: "Roboto Condensed", sans-serif;
  text-align: center;
}
.login input {
  height: 20px;
  margin-bottom: 10px;
  padding: 10px;
  width: 50%;
  text-align: center;
  margin-inline: auto;
}
.login a {
  margin-bottom: 10px;
  margin-inline: auto;
  font-size: 16px;
  font-family: "Roboto Condensed", sans-serif;
  text-decoration: none;
  color: blue;
}
.login button {
  padding: 10px;
  width: 25%;
  margin-inline: auto;
  border-radius: 25px;
  border: 0.5px solid grey;
}
</style>