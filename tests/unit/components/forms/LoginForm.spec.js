import { shallowMount } from '@vue/test-utils'
import LoginForm from '@/components/forms/LoginForm.vue'

describe('LoginForm.vue', () => {
    
    it('has a submit method', () => {
        expect(typeof LoginForm.methods.submit).toBe('function')
    })

    

})
