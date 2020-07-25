<template>
    <section class="view view-center">
        <div class="card card-small">
            <div class="card--main">
                <h2>Login</h2>
                <LoginForm @success="success" />
            </div>
            <div class="card--alt">
                <h2>Sign up</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus est vitae tellus semper, vitae laoreet lacus bibendum. Suspendisse mollis pellentesque mi eget interdum. Mauris tempus nibh et tellus posuere, viverra lacinia nunc molestie.
                </p>
                <router-link to="/register" class="btn btn-primary">Sign me up!</router-link>
            </div>
        </div>
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