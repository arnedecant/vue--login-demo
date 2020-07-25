<template>
    <form @submit.prevent="submit">
        <label for="email">Email</label>
        <input type="email" v-model="email" id="email" name="email" placeholder="e.g. john.snow@winterfell.edu">
        <label for="password">Password</label>
        <input type="password" v-model="password" id="password" name="password" placeholder="You know nothing">
        <button type="submit">Login</button>
        <router-link to="/reset-password">Forgot password?</router-link>
        <router-link to="/register">Register</router-link>
    </form>
</template>

<script>

    // NOTE: ES6 arrow functions don't work with event-bubbling
    // because of a difference in scoping. Calling this.$emit:
    // ES6: this = undefined
    // ES5: this = VueComponent

    /*
    
    submit: (e) => {
        console.log('[LoginForm]', e)
        this.$emit('submit', e)
    }

    */

    export default { 
        name: 'LoginForm', 
        data () {
            return {
                email: 'hello@arnedecant.be',
                password: 'goodbye',
                submitted: false
            }
        },
        methods: {
            submit(e) {
                
                const { email, password } = this

                window.USER = window.USERS.find((user) => user.email === email && user.password === password)

                if (!window.USER) return

                this.$emit('success', e)
            }
        } 
    }

</script>