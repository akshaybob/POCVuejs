import { mount, flushPromises } from '@vue/test-utils'
import axios from 'axios'
import GetUser from "@/components/GetUser.vue"

const mockPostList = [
  { id: 1,firstName:'John', lastName:'Doe',EmailId:'d@gmail.com' },
  { id: 2,firstName:'Anna', lastName:'Smith', EmailId:'s@gmail.com'}
]

// Following lines tell Jest to mock any call to `axios.get`
// and to return `mockPostList` instead
jest.spyOn(axios, 'get').mockResolvedValue(mockPostList)

test('loads employees', async () => {
  const wrapper = mount(GetUser)


  // Let's assert that we've called axios.get the right amount of times and
  // with the right parameters.
  expect(axios.get).toHaveBeenCalledTimes(1)
  expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/employees')
})
  // Wait until the DOM updates.
//   await flushPromises()

//   // Finally, we make sure we've rendered the content from the API.
//   const employees = wrapper.findAll('[data-test="emp"]')

//   expect(employees).toHaveLength(2)
//   expect(employees[0].text()).toContain('id')
//   expect(employees[1].text()).toContain('id')
// })

// let mockGet = jest.fn()

// jest.mock('axios',() => ({
//   get: () => mockGet()

//   }))

// describe('App'),() => {
//   beforeEach(() => {
//     mockGet = jest.fn()
//   })
//   it('makes an api call',async()=>{
//     const wrapper = factory()
//     expect(mockGet).toHaveBeenCalledTimes(1)
//   })
// }