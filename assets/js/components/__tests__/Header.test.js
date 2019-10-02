// Import Vue and the component being tested
import { mount } from '@vue/test-utils'
import Header from '../Header.vue'

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('Header', () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    expect(typeof Header.created).toBe('function')
  })

  it('is a Vue instance', () => {
    const wrapper = mount(Header)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('has unset header property', () => {
    const wrapper = mount(Header)
    expect(wrapper.vm.header).toBe(undefined)
  })


  it('has set header property', () => {
    const wrapper = mount(Header)
    wrapper.setProps({ header: 'bar' })
    expect(wrapper.vm.header).toBe('bar')
  })

  // // Evaluate the results of functions in
  // // the raw component options
  // it('sets the correct default data', () => {
  //   expect(typeof MyComponent.data).toBe('function')
  //   const defaultData = MyComponent.data()
  //   expect(defaultData.message).toBe('hello!')
  // })

  // // Inspect the component instance on mount
  // it('correctly sets the message when created', () => {
  //   const vm = new Vue(MyComponent).$mount()
  //   expect(vm.message).toBe('bye!')
  // })

  // // Mount an instance and inspect the render output
  // it('renders the correct message', () => {
  //   const Constructor = Vue.extend(MyComponent)
  //   const vm = new Constructor().$mount()
  //   expect(vm.$el.textContent).toBe('bye!')
  // })
})