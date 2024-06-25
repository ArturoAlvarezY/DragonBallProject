import { ref, reactive } from "vue";
import { defineStore } from "pinia";

<<<<<<< HEAD
export const useAuthStore = defineStore('auth', () => {
    
    const user = ref(
        {
            username: 'admin',
            password: 'my-password',
            isAuthenticated: false
        }
    );

  
    function login() {
        user.value.isAuthenticated = true
    }

    function logout() {
        user.value.isAuthenticated = false
    }

    return { user, login, logout }

});
=======

export const useAuthStore = defineStore('auth', () => {

    const userLogin = ref(
        {
            username: '',
            isAuthenticated: false
        }
    )

    const user = ref(
        [{
            username: 'admin',
            password: 'admin',
        }]
    )

    return { user, userLogin}
})
>>>>>>> dev
