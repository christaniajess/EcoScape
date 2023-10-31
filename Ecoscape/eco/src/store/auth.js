// store/modules/auth.js

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase"; // Assuming you have set up Firebase in your project

const state = {
  user: null,
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
};

const actions = {
  checkUserAuthentication({ commit }) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is authenticated
        commit("setUser", user);
      } else {
        // User is not authenticated
        commit("setUser", null);
      }
    });
  },
};

export default {
  state,
  mutations,
  actions,
  auth
};
