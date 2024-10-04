import users from "../sources/users.json"
export default {
    state: {
      user: { username : "guest", role: "unauthorized" },
      users : users
    },
    mutations: {
        addUser(state,user){
            state.users.push(user);
        },
        deleteUser(state, userId) {
            const index = state.users.findIndex(user => user.id === userId);
            if (index !== -1) {
              state.users.splice(index, 1);
            }
        },
        changeUsername(state, newUsername) {
            state.user.username = newUsername
        },
        changeUser(state, newUser) {

            if(!newUser) {
                state.user.username = "guest"
                state.user.role = "unauthorized"
                localStorage.removeItem("user")
                return
            }

            state.user.username = newUser.username,
            state.user.role = newUser.role
        },
        updateUser(state, updatedUser) {
            const userIndex = state.users.findIndex(user => user.id === updatedUser.id);
            if (userIndex !== -1) {
              // Koristimo Object.assign za kopiranje svojstava ažuriranog korisnika u postojećeg korisnika
              Object.assign(state.users[userIndex], updatedUser);
            }
        },
    },
    getters: {
        username(state) {
            return state.user.username
        },
        isAdmin(state) {
            return state.user.isAdmin
        },
        role(state) {
            return state.user.role
        },
        users(state) {
            return state.users
        }
    },
    actions: {
        delete_User({ commit }, userId) {
            commit('deleteUser', userId);
          }

        
    }
}