import { shallowMount } from '@vue/test-utils'
import Field from '@/components/base/Field.vue'

describe('Field.vue', () => {
    
    it('has a change method', () => {
        expect(typeof Field.methods.change).toBe('function')
    })

    it('has a getClass method', () => {
        expect(typeof Field.methods.getClass).toBe('function')
    })

})
