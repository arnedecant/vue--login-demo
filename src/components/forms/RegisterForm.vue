<template>
    <section class="form form--registration">
        <ul v-if="errors.length">
            <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
        <form @submit.prevent="submit" novalidate>
            <div class="field">
                <input type="text" v-model="firstname" id="firstname" name="firstname" :class="getClass('firstname')">
                <label for="firstname">First name</label>
            </div>
            <div class="field">
                <input type="text" v-model="lastname" id="lastname" name="lastname" :class="getClass('lastname')">
                <label for="lastname">Last name</label>
            </div>
            <div class="field">
                <input type="email" v-model="email" id="email" name="email" :class="getClass('email')">
                <label for="email">Email</label>
            </div>
            <div class="field">
                <input type="password" v-model="password" id="password" name="password" :class="getClass('password')">
                <label for="password">Password</label>
            </div>
            <div class="field">
                <input type="password" v-model="confirmPassword" id="confirmPassword" name="confirmPassword" :class="getClass('confirmPassword')">
                <label for="confirmPassword">Confirm password</label>
            </div>
            <button type="submit">Register</button>
        </form>
    </section>
</template>

<script>

    export default { 
        name: 'LoginForm', 
        data () {
            return {
                errors: [],
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                confirmPassword: '',
                // submitted: false,
            }
        },
        methods: {
            submit(e) {

                // Reset

                this.errors = []
                
                const { firstname, lastname, email, password, confirmPassword } = this
                // const fields = ['firstname', 'lastname', 'email', 'password', 'confirmPassword']

                // Setup lookup table to match error messages with fields,
                // loop said lookup table and push error messages if field is empty.
                // Finally, skip all remaining code if there are errors.

                const requiredMessages = {
                    firstname: 'Please enter your first name.',
                    lastname: 'Please enter your last name.',
                    email: 'Please enter your email address.',
                    password: 'Please enter a password.',
                    confirmPassword: 'Please confirm the given password.',
                }

                Object.keys(requiredMessages).forEach((key) => !this[key] && this.errors.push(requiredMessages[key]))

                if (this.errors.length > 0) return

                // Make sure passwords match, make sure email hasn't been used yet
                // and check email address with a regex. Finally, skip remaining
                // code if errors are present.

                if (password !== confirmPassword) this.errors.push('Please make sure your passwords match.')

                let exists = window.USERS.find((user) => user.email == email)
                if (exists) this.errors.push('That email address has already been taken.')

                let isValidEmail = this.validate('email', email)
                if (!isValidEmail) this.errors.push('Please enter a valid email address.')

                if (this.errors.length > 0) return

                // Add user and emit to parent

                window.USERS.push({ firstname, lastname, email, password })

                this.$emit('success', e)
            },

            validate(type, value) {

                // Lookup table with different regexes

                const regex = {
                    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                }

                // Match from lookup table, test regex and return

                return regex[type].test(value)

            },

            getClass(prop) {

                let classlist = []

                if (!this[prop]) classlist.push('empty')

                return classlist.join(' ')

            }
        } 
    }

</script>