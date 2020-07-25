<template>
    <section class="view view--register">
        <h1>Register</h1>
        <p v-if="done">
            Registration complete! 
            <router-link to="/login">Back to login</router-link>
        </p>
        <RegisterForm @success="success" v-else />
    </section>
</template>

<script>

import RegisterForm from '@/components/forms/RegisterForm.vue'

export default {
    name: 'Register',
    data () {
        return {
            done: false
        }
    },
    methods: {
        success() {
            this.done = true
        }
    },
	components: { RegisterForm }
}

</script>