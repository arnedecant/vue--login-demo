<template>
    <section class="view view-center">
        <div class="card card-small">
            <div class="card--main">
                <h2>Reset password</h2>
                <ResetPasswordForm @success="success = true" v-if="!success" />
                <transition name="fade">
                    <div v-if="success">
                        <p class="alert alert-success">
                            An email has been sent to the provided address.
                        </p>
                        <router-link to="/login">
                            <svg><use xlink:href="#icon-arrow--left" /></svg>
                            <span>Back to login</span>
                        </router-link>
                    </div>
                </transition>
            </div>
            <div class="card--alt">
                <h2>Lost your password?</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus est vitae tellus semper, vitae laoreet lacus bibendum. Suspendisse mollis pellentesque mi eget interdum. Mauris tempus nibh et tellus posuere, viverra lacinia nunc molestie.
                </p>
                <router-link to="/login">
                    <svg><use xlink:href="#icon-arrow--left" /></svg>
                    <span>No, nevermind!</span>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>

import ResetPasswordForm from '@/components/forms/ResetPasswordForm.vue'

export default {
    name: 'ResetPassword',
    data () {
        return {
            success: false
        }
    },
    methods: {
        // success: () => console.log('[ResetPasswordView]: succes!')
    },
	components: { ResetPasswordForm }
}

</script>