// -------------------------------------------------------------------
// :: Field
// -------------------------------------------------------------------
// Emits:
//  - input

<template>
    <div :class="getClass()">
        <input 
            v-if="typeof value === 'String'" 
            ref="field" 
            :type="type" 
            :id="id" 
            :name="id" 
            :value="value" 
            @input="input()">
        <input 
            v-else 
            ref="field" 
            :type="type" 
            :id="id" 
            :name="id" 
            :checked="value" 
            @input="input()">
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
            value: [String, Boolean],
            valid: Boolean
        },
        data () {
            return {
                defaults: ['text', 'password', 'email', 'textarea']
            }
        },
        methods: {

            getClass() {

                let classlist = ['field']

                if (this.defaults.includes(this.type)) classlist.push('field-text')
                else classlist.push(`field-${ this.type }`)

                if (!this.value) classlist.push('empty')
                if (!this.valid) classlist.push('invalid')

                return classlist.join(' ')

            },

            input() {

                if (this.type === 'checkbox') this.$emit('input', this.$refs.field.checked)
                else this.$emit('input', this.$refs.field.value)

            }
        } 
    }

</script>