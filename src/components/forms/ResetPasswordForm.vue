// -------------------------------------------------------------------
// :: ResetPasswordForm
// -------------------------------------------------------------------
// Emits:
//  - success: event

<template>
    <form @submit.prevent="submit">
        <div class="field">
            <input type="email" v-model="email" id="email" name="email" placeholder="Email">
            <label for="email">Email</label>
        </div>
        <button type="submit" class="btn btn-primary">Send reset link</button>
    </form>
</template>
<script>

    export default { 
        name: 'ResetPasswordForm', 
        data () {
            return {
                email: 'hello@arnedecant.be'
            }
        },
        methods: {
            submit(e) {

                // Send mail ...
                
                this.$emit('success', e)

            }
        } 
    }

</script>