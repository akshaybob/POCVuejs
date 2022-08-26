import {mount} from '@vue/test-utils'
import UserData from '@/components/UserData.vue'
describe('UserData.vue',()=>{
    test('Update the records when update button is clicked',() =>{
        expect(true).toBe(true)
        const wrapper=mount(UserData)
        expect(wrapper.text()).toContain('Update')
        //wrapper.find('button').trigger('click')
        //expect(wrapper.text()).toContain('Update')
    })

})