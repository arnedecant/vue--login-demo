<template>
    <form @submit.prevent="submit">
        <div class="field">
            <input type="email" v-model="email" id="email" name="email" :class="getClass('email')">
            <label for="email">Email</label>
        </div>
        <div class="field">
            <input type="password" v-model="password" id="password" name="password" :class="getClass('password')">
            <label for="password">Password</label>
        </div>
        <button type="submit">Login</button>
        <router-link to="/reset-password">Forgot password?</router-link>
    </form>
</template>

<script>

    // NOTE: ES6 arrow functions don't work with event-bubbling
    // because of a difference in scoping. Calling this.$emit():
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
                email: '',
                password: '',
                submitted: false
            }
        },
        methods: {
            submit(e) {
                
                const { email, password } = this

                window.USER = window.USERS.find((user) => user.email === email && user.password === password)

                if (!window.USER) return

                this.$emit('success', e)
            },

            getClass(prop) {

                let classlist = []

                if (!this[prop]) classlist.push('empty')

                return classlist.join(' ')

            }
        } 
    }

</script>