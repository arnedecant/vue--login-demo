<template>
    <section class="view view--login">
        <h1>Reset Password</h1>
        <ResetPasswordForm @success="success" />
    </section>
</template>

<script>

import ResetPasswordForm from '@/components/forms/ResetPasswordForm.vue'

export default {
    name: 'ResetPassword',
    methods: {
        success: () => console.log('[ResetPasswordView]: succes!')
    },
	components: { ResetPasswordForm }
}

</script>