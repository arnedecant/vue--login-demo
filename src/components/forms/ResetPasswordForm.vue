// -------------------------------------------------------------------
// :: ResetPasswordForm
// -------------------------------------------------------------------
// Emits:
//  - success: event

<template>
    <section class="form">
        <transition name="fade">
            <ul v-if="alerts.length" class="alerts">
                <li v-for="alert in alerts" :key="alert.message" class="alert alert-error">{{ alert.message }}</li>
            </ul>
        </transition>
        <form @submit.prevent="submit">
            <Field type="email" id="email" label="Email" :valid="email.valid" v-model="email.value" @change="change" />
            <button type="submit" class="btn btn-primary">Send reset link</button>
        </form>
    </section>
</template>
<script>

    import Field from '@/components/base/Field.vue'

    export default { 
        name: 'ResetPasswordForm',
        components: { Field },
        data () {
            return {
                alerts: [],
                email: { value: '', valid: true }
            }
        },
        methods: {
            submit(e) {

                this.alerts = []
                this.email.valid = true

                if (!this.email.value) {
                    this.email.valid = false
                    this.alerts.push({ message: 'Please fill in your email address.' })
                    return
                }

                // Send mail ...
                
                this.$emit('success', e)

            }
        }
    }

</script>