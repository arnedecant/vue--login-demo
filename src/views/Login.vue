<template>
    <section class="view view-center">
        <div class="card card-small">
            <div class="card--main" v-bind:class="cardClass" data-card="login">
                <h2>Login</h2>
                <LoginForm @success="success" @error="error" @submit="submit" />
            </div>
            <div class="card--alt">
                <h2>Sign up</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus est vitae tellus semper, vitae laoreet lacus bibendum. Suspendisse mollis pellentesque mi eget interdum. Mauris tempus nibh et tellus posuere, viverra lacinia nunc molestie.
                </p>
                <router-link to="/register">
                    <span>Sign me up!</span>
                    <svg><use xlink:href="#icon-arrow--right" /></svg>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>

import LoginForm from '@/components/forms/LoginForm.vue'

export default {
    name: 'Login',
    data () {
        return {
            animation: null,
            cardClass: {
                'animation-shake': false
            }
        }
    },
    methods: {
        success() { this.$router.push('/') },
        error() { this.cardClass['animation-shake'] = true },
        submit() { this.cardClass['animation-shake'] = false },
        // getClass(el) {
        //     if (el !== 'card') return ''
        //     console.log(this.animation)
        //     if (this.animation) return `animation-${ this.animation }`
        //     else return ''
        // }
    },
	components: { LoginForm }
}

</script>