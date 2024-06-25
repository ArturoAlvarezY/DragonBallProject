<script setup>
import { useAuthStore } from '@/stores/auth'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const store = useAuthStore()

function logout() {
    store.userLogin.username = ''
    store.userLogin.isAuthenticated = false
    const redirectPath = route.query.redirect || '/'
    router.push(redirectPath)
}

logout()
</script>

<template>
    <div></div>
</template>