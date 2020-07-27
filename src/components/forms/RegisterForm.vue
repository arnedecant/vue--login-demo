// -------------------------------------------------------------------
// :: RegisterForm
// -------------------------------------------------------------------
// Emits:
//  - success: user

<template>
    <section class="form">
        <transition name="fade">
            <ul v-if="alerts.length" class="alerts">
                <!-- <transition-group name="fade"> -->
                <li v-for="alert in alerts" :key="alert.message" class="alert alert-error">{{ alert.message }}</li>
                <!-- </transition-group> -->
            </ul>
        </transition>
        <form @submit.prevent="submit" novalidate autocomplete="off">
            <Field 
                type="text" id="firstname" label="First name" 
                :valid="firstname.valid" :value="firstname.value" @change="change" />
            <Field 
                type="text" id="lastname" label="Last name" 
                :valid="lastname.valid" :value="lastname.value" @change="change" />
            <Field 
                type="email" id="email" label="Email" 
                :valid="email.valid" :value="email.value" @change="change" />
            <Field 
                type="password" id="password" label="Password" 
                :valid="password.valid" :value="password.value" @change="change" />
            <Field 
                type="password" id="confirmPassword" label="Confirm password" 
                :valid="confirmPassword.valid" :value="confirmPassword.value" @change="change" />
            <Field 
                type="checkbox"  id="accept" 
                label="I confirm that I will sacrifice my firstborn son in order to get access to some random demo." 
                :valid="accept.valid" :value="accept.value" @change="change" />

            <button type="submit" class="btn btn-primary">Register</button>
        </form>
    </section>
</template>

<script>

    import Field from '@/components/base/Field.vue'

    export default { 
        name: 'LoginForm', 
        data () {
            return {
                alerts: [],
                invalidFields: [],
                firstname: { value: '', valid: true },
                lastname: { value: '', valid: true },
                email: { value: '', valid: true },
                password: { value: '', valid: true },
                confirmPassword: { value: '', valid: true },
                accept: { value: false, valid: true },
                // submitted: false,
            }
        },
        methods: {
            submit() {

                // Reset

                this.alerts = []
                
                const { firstname, lastname, email, password, confirmPassword } = this
                const fields = ['firstname', 'lastname', 'email', 'password', 'confirmPassword']

                // Setup lookup table to match error messages with fields,
                // loop said lookup table and push error messages if field is empty.

                // const requiredMessages = {
                //     firstname: 'Please enter your first name.',
                //     lastname: 'Please enter your last name.',
                //     email: 'Please enter your email address.',
                //     password: 'Please enter a password.',
                //     confirmPassword: 'Please confirm the given password.',
                //     accept: 'We really need that firstborn son... We are progressing by leaps and bounds and are always ahead of other services. So, unlike other services, your personal information and privacy alone do not suffice.',
                // }

                // Object.keys(requiredMessages).forEach((key) => !this[key] && this.errors.push({ field: key, message: requiredMessages[key] }))

                // Too many messages in the above solution, we will group 
                // all required fields into one message

                for (let field of fields) {

                    if (this[field].value) {
                        this[field].valid = true
                        continue
                    }

                    this[field].valid = false

                    let hasRequiredError = this.alerts.find((alert) => alert.id === 'required')
                    if (!hasRequiredError) this.alerts.push({ id: 'required', type: 'error', message: 'All fields are required.' })

                }

                // Confirm terms of service

                if (!this.accept.value) {

                    this.accept.valid = false
                    this.alerts.push({ type: 'error', message: 'We really need that firstborn son... We are progressing by leaps and bounds and are always ahead of other services. So, unlike other services, your personal information and privacy alone do not suffice.' })

                } else {
                    
                    // Manually set valid state as this field isn't included in the fields variable

                    this.accept.valid = true

                }

                if (this.alerts.length > 0) return

                // Make sure passwords match, make sure email hasn't been used yet
                // and check email address with a regex. Finally, skip remaining
                // code if errors are present.

                if (password.value !== confirmPassword.value) {
                    this.alerts.push({ type: 'error', message: 'Please make sure your passwords match.' })
                    this.password.valid = false
                    this.confirmPassword.valid = false
                }

                let isValidEmail = this.validate('email', email.value)
                if (!isValidEmail) {
                    this.alerts.push({ type: 'error', message: 'Please enter a valid email address.' })
                    this.email.valid = false
                    return
                }

                let exists = window.USERS.find((user) => user.email == email.value)
                if (exists) {
                    this.alerts.push({ type: 'error', message: 'That email address has already been taken.' })
                    this.email.valid = false
                }

                if (this.alerts.length > 0) return

                // Add user and emit to parent

                const user = { firstname: firstname.value, lastname: lastname.value, email: email.value, password: password.value }
                window.USERS.push(user)

                this.$emit('success', user)
            },

            validate(type, value) {

                // Lookup table with different regexes

                const regex = {
                    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                }

                // Match from lookup table, test regex and return

                return regex[type].test(value)

            },

            // getClass(field) {

            //     let classlist = []

            //     if (!this[field].value) classlist.push('empty')
            //     if (!this[field].valid) classlist.push('invalid')

            //     return classlist.join(' ')

            // },
            
            change(field, value) {

                this[field].value = value

            }
        },
        components: { Field }
    }

</script>