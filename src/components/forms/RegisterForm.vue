<template>
    <section class="form form--registration">
        <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
        </p>
        <form @submit.prevent="submit">
            <div class="field">
                <label for="firstname">First name</label>
                <input type="text" v-model="firstname" id="firstname" name="firstname" placeholder="First name">
            </div>
            <div class="field">
                <label for="lastname">Last name</label>
                <input type="text" v-model="lastname" id="lastname" name="lastname" placeholder="Last name">
            </div>
            <div class="field">
                <label for="email">Email</label>
                <input type="email" v-model="email" id="email" name="email" placeholder="Email">
            </div>
            <div class="field">
                <label for="password">Password</label>
                <input type="password" v-model="password" id="password" name="password" placeholder="Password">
            </div>
            <div class="field">
                <label for="confirmPassword">Confirm password</label>
                <input type="password" v-model="confirmPassword" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password">
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
            submit() {
                
                // const { firstname, lastname, email, password, confirmPassword } = this

                const requiredMessages = {
                    firstname: 'Please enter your first name.',
                    lastname: 'Please enter your last name.',
                    email: 'Please enter your email address.',
                    password: 'Please enter a password.',
                    confirmPassword: 'Please confirm the given password.',
                }

                for (let key in requiredMessages) {
                    if (!this[key]) this.errors.push(requiredMessages[key])
                }

                if (this.errors.length > 0) return

                // if (password !== confirmPassword) return

                // window.USERS.push({ firstname, lastname, email, password })

                this.$emit('success', e)
            }
        } 
    }

</script>