<script setup>
import RegisterForm from '@/components/auth/RegisterForm.vue';

</script>

<template>
    <div class="form-signin w-100 m-auto d-grid gap-2 ">
        <RegisterForm />
    </div>
</template>

<style lang="scss" scoped>
.form-signin {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    min-width: 400px;
    max-width: 428px;
    padding: 15px;
    border-radius: 8px;
}
</style>