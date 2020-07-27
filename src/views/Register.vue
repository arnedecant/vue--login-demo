<template>
    <section class="view view-center">
        <div class="card card-small">
            <div class="card--main">
                <h2>Register</h2>
                <RegisterForm @success="success" v-if="!done" />
                <transition name="fade">
                    <div v-if="done">
                        <p class="alert alert-success">
                            Well done! We will send a carrier to collect the body when the time comes.
                        </p>
                        <router-link to="/login">
                            <svg><use xlink:href="#icon-arrow--left" /></svg>
                            <span>Back to login</span>
                        </router-link>
                    </div>
                </transition>
            </div>
            <div class="card--alt">

                <h2 v-if="!done">Already have an account?</h2>
                <p v-if="!done">
                    Mauris turpis odio, tristique nec scelerisque vitae, gravida in dolor. Nunc dictum nunc ut venenatis malesuada. Aenean fermentum tincidunt risus, at tincidunt massa vehicula non. Proin ultricies nibh eget dui volutpat, vel suscipit purus imperdiet. Fusce ornare dui sed sapien vulputate vehicula. Vivamus nec sagittis nisl. Cras nec risus condimentum, varius nunc in, posuere odio. Suspendisse nibh lorem, varius ac ligula at, rutrum rutrum massa.
                </p>

                <h2 v-if="done">Registration complete</h2>
                <p v-if="done">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus est vitae tellus semper, vitae laoreet lacus bibendum. Suspendisse mollis pellentesque mi eget interdum. Mauris tempus nibh et tellus posuere, viverra lacinia nunc molestie.
                </p>

                <router-link to="/login">
                    <svg><use xlink:href="#icon-arrow--left" /></svg>
                    <span>Back to login</span>
                </router-link>
                
            </div>
        </div>
        
    </section>
</template>

<script>

import RegisterForm from '@/components/forms/RegisterForm.vue'

export default {
    name: 'Register',
    data () {
        return {
            done: false
        }
    },
    methods: {
        success() {
            this.done = true
        }
    },
	components: { RegisterForm }
}

</script>