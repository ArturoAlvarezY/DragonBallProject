import { ref, reactive } from "vue";
import { defineStore } from "pinia";


export const useAuthStore = defineStore('auth', () => {

    const user = ref(
        {
            username: 'admin',
            password: 'admin',
            isAuthenticated: false
        }
    )

    return { user }
})