// -------------------------------------------------------------------
// :: LoginForm
// -------------------------------------------------------------------
// Emits:
//  - submit: event
//  - error: event
//  - success: event

<template>
    <section class="form">
        <transition name="fade">
            <ul v-if="alerts.length" class="alerts">
                <li v-for="alert in alerts" :key="alert.message" class="alert alert-error">{{ alert.message }}</li>
            </ul>
        </transition>
        <form @submit.prevent="submit" novalidate>
            <Field 
                type="email" id="email" label="Email" 
                :valid="email.valid" v-model="email.value" />
            <Field 
                type="password" id="password" label="Password" 
                :valid="password.valid" v-model="password.value" />
            <router-link to="/reset-password" class="input-helper">Forgot password?</router-link>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </section>
</template>

<script>

    import Field from '@/components/base/Field.vue'

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
        components: { Field },
        data () {
            return {
                alerts: [],
                email: { value: '', valid: true },
                password: { value: '', valid: true },
                submitted: false
            }
        },
        methods: {
            submit(e) {

                this.$emit('submit', e)
                this.alerts = []
                
                const { email, password } = this

                window.USER = window.USERS.find((user) => user.email === email.value && user.password === password.value)

                if (window.USER) {
                    this.$emit('success', e)
                } else {
                    this.$emit('error', e)
                    this.alerts.push({ message: 'Invalid email and/or password.' })
                }

            }
        }
    }

</script>