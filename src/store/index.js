import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    users: null,
    careers: null,
    career: null,
    subscription: null,
    token: null,
  },
  getters: {},
  mutations: {
    user(state, user) {
      state.user = user;
    },
    users(state, users) {
      state.users = users;
    },
    token(state, token) {
      state.token = token;
    },
    careers(state, careers) {
      state.careers = careers;
    },
    career(state, career) {
      state.career = career;
    },
  },
  actions: {
    //Register, Login & Verification
    register: async (context, payload) => {
      fetch("https://wyze-up.herokuapp.com/users/register", {
        method: "POST",
        body: JSON.stringify({
          userName: payload.userName,
          userEmail: payload.userEmail,
          userPassword: payload.userPassword,
          userRole: payload.userRole,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("user", json));
      console.log(payload);
    },

    login: async (context, payload) => {
      let response = await fetch("https://wyze-up.herokuapp.com/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: payload.userEmail,
          userPassword: payload.userPassword,
        }),
      });
      //Verify
      let data = await response.json();
      if (data.token) {
        context.commit("token", data.token);
        fetch("https://wyze-up.herokuapp.com/Users/user/verify", {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": data.token,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            context.commit("user", data.user);
          });
        console.log(data, payload);
      } else {
        alert(data);
      }
    },

    //Careers, Posts, Articles, Podcasts, User Profiles (Single View included)
    getCareers: async (context) => {
      const response = await fetch("https://wyze-up.herokuapp.com/Careers")
        .then((res) => res.json())
        .then((data) => {
          return data;
        });
      if (response.length === 0) {
        console.log("No Careers Available😢");
      } else {
        context.commit("careers", response);
      }
    },
    getCareer: async (context, id) => {
      fetch("https://wyze-up.herokuapp.com/Careers/" + id)
        .then((res) => res.json())
        .then((data) => (this.careers = data))
        .catch((err) => context.commit("career", career));
    },
  },

  modules: {},
});
