// -------------------------------------------------------------------
// :: RegisterForm
// -------------------------------------------------------------------
// Emits:
//  - success: user

<template>
    <section class="form">
        <ul v-if="alerts.length" class="alerts">
            <li v-for="alert in alerts" :key="alert.message" class="alert" :class="'alert-' + alert.type">{{ alert.message }}</li>
        </ul>
        <form @submit.prevent="submit" novalidate autocomplete="off">
            <div class="field field-text" :class="getClass('firstname')">
                <input type="text" v-model="firstname.value" id="firstname" name="firstname">
                <label for="firstname">First name</label>
            </div>
            <div class="field field-text" :class="getClass('lastname')">
                <input type="text" v-model="lastname.value" id="lastname" name="lastname">
                <label for="lastname">Last name</label>
            </div>
            <div class="field field-text" :class="getClass('email')">
                <input type="email" v-model="email.value" id="email" name="email">
                <label for="email">Email</label>
            </div>
            <div class="field field-text" :class="getClass('password')">
                <input type="password" v-model="password.value" id="password" name="password">
                <label for="password">Password</label>
            </div>
            <div class="field field-text" :class="getClass('confirmPassword')">
                <input type="password" v-model="confirmPassword.value" id="confirmPassword" name="confirmPassword">
                <label for="confirmPassword">Confirm password</label>
            </div>
            <div class="field field-checkbox" :class="getClass('accept')">
                <input type="checkbox" v-model="accept.value" id="firstborn" name="accept">
                <label for="firstborn">I confirm that I will sacrifice my firstborn son in order to get access to some random demo.</label>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
    </section>
</template>

<script>

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

                // Confirm terms of service

                if (!this.accept.value) {

                    this.accept.valid = false
                    this.alerts.push({ type: 'error', message: 'We really need that firstborn son... We are progressing by leaps and bounds and are always ahead of other services. So, unlike other services, your personal information and privacy alone do not suffice.' })

                } else {
                    
                    // Manually set valid state as this field isn't included in the fields variable

                    this.accept.valid = true

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

            getClass(field) {

                let classlist = []

                if (!this[field].value) classlist.push('empty')
                if (!this[field].valid) classlist.push('invalid')

                return classlist.join(' ')

            }
        } 
    }

</script>