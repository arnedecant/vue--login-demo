import { shallowMount } from '@vue/test-utils'
import Field from '@/components/base/Field.vue'

describe('Field.vue', () => {
    
    it('has an input method', () => {
        expect(typeof Field.methods.input).toBe('function')
    })

    it('has a getClass method', () => {
        expect(typeof Field.methods.getClass).toBe('function')
    })

    it('renders props.label when passed', () => {

		const label = 'Field label'
		const wrapper = shallowMount(Field, {
			propsData: { label }
        })
        
        expect(wrapper.text()).toMatch(label)
        
	})

})
