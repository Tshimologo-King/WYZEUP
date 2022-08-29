<template>
  <div class="container">
    <form @submit.prevent="sign_up">
      <div id="register">
        <h2>User Information</h2>
        <div v-if="!successful">
          <label for="title">Title:</label>
          <select name="title" id="title">
            <option value="Mr">Mr</option>
            <option value="Ms">Ms</option>
            <option value="Mrs">Mrs</option>
            <option value="Sr">Sr</option></select
          ><br />
          <label for="userName" id="userName"> Full Name</label><br />
          <input
            v-model="userName"
            type="text"
            placeholder="Create Your Username Here"
          /><br />
          <label for="userEmail" id="userEmail">Email Address</label><br />
          <input
            v-model="userEmail"
            type="text"
            placeholder="Email Address"
          /><br />
          <label for="userPassword" id="userPassword">Password</label><br />
          <input
            v-model="userPassword"
            type="text"
            placeholder="Password"
          /><br />
          <label for="userRole" id="userRole">Set Role to User</label><br />
          <input v-model="userRole" type="text" placeholder="userRole" /><br />
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      userEmail: "",
      userPassword: "",
      userRole: "",
    };
  },
  methods: {
    async sign_up() {
      this.$store.dispatch("register", {
        userName: this.userName,
        userEmail: this.userEmail,
        userPassword: this.userPassword,
        userRole: this.userRole,
      });
      this.$router.push("/Login");
    },
  },
};
</script>

<style scoped>
.container {
  overflow: hidden;
}

#register {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  padding: 35px;
  width: 500px;
  height: 450px;
}
#register h2 {
  text-align: center;
  font-size: 36px;
  font-family: "Roboto Condensed", sans-serif;
}

form {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-inline: auto;
  background: rgb(27, 95, 143);
  padding: 10px 20px;
  width: 100%;
}
form label {
  font-size: 24px;
  width: 100%;
  font-family: "Roboto Condensed", sans-serif;
  text-align: center;
}
form input {
  height: 20px;
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  text-align: center;
  margin-inline: auto;
}
form select {
  margin-left: 1rem;
  margin-bottom: 1rem;
  height: 25px;
  padding: 5px;
}
#register button {
  padding: 10px;
  width: 150px;
  border-radius: 25px;
  border: 0.5px solid grey;
  position: absolute;
  left: 46.5%;
  margin-top: 1rem;
}
</style>