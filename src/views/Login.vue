<template>
    <section class="view view--login">
        <h1>Login</h1>
        <LoginForm @success="success" />
    </section>
</template>

<script>

import LoginForm from '@/components/forms/LoginForm.vue'

export default {
    name: 'Login',
    methods: {
        success() { this.$router.push('/') }
    },
	components: { LoginForm }
}

</script>