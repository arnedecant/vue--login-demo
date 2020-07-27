// -------------------------------------------------------------------
// :: Field
// -------------------------------------------------------------------
// Emits:
//  - change

<template>
    <div :class="getClass()">
        <input :type="type" :id="id" :name="id" v-model="value" @change="change()">
        <label :for="id">{{ label }}</label>
    </div>
</template>

<script>

    export default { 
        name: 'Field', 
        props: {
            type: String,
            id: String,
            label: String,
            valid: Boolean
        },
        data () {
            return {
                value: null
            }
        },
        methods: {

            getClass() {

                let classlist = ['field']

                const defaults = ['text', 'password', 'email', 'textarea']
                if (defaults.includes(this.type)) classlist.push('field-text')
                else classlist.push(`field-${ this.type }`)

                if (!this.value) classlist.push('empty')
                if (!this.valid) classlist.push('invalid')

                return classlist.join(' ')

            },

            change() {

                this.$emit('change', this.id, this.value)

            }
        } 
    }

</script>