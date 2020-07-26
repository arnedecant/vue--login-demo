// -------------------------------------------------------------------
// :: LoginForm
// -------------------------------------------------------------------
// Emits:
//  - submit: event
//  - error: event
//  - success: event

<template>
    <section class="form">
        <ul v-if="errors.length" class="alerts">
            <li v-for="error in errors" :key="error.message" class="alert alert-error">{{ error.message }}</li>
        </ul>
        <form @submit.prevent="submit" novalidate>
            <div class="field field-text" :class="getClass('email')">
                <input type="email" v-model="email" id="email" name="email">
                <label for="email">Email</label>
            </div>
            <div class="field field-text" :class="getClass('password')">
                <input type="password" v-model="password" id="password" name="password">
                <label for="password">Password</label>
                <router-link to="/reset-password" class="input-helper">Forgot password?</router-link>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </section>
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
                errors: [],
                email: '',
                password: '',
                submitted: false
            }
        },
        methods: {
            submit(e) {

                this.$emit('submit', e)
                this.errors = []
                
                const { email, password } = this

                window.USER = window.USERS.find((user) => user.email === email && user.password === password)

                if (window.USER) {
                    this.$emit('success', e)
                } else {
                    this.$emit('error', e)
                    this.errors.push({ message: 'Invalid email and/or password.' })
                }

            },

            getClass(prop) {

                let classlist = []

                if (!this[prop]) classlist.push('empty')

                return classlist.join(' ')

            }
        } 
    }

</script>