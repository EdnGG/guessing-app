// import { shallowMount } from '@vue/test-utils'

describe('Example component', () => {
  test('Debe de ser mayor a 10', () => { 
    // Arreglar
    let value = 5
    // Estimulo
    value = value + 2
    // Observar el comportamiento
    if (value > 10) {
      // Todo bien
    } else { 
      throw ` ${value} no es mayor a 10 `
    }
  })
  // it('renders props.msg when passed', () => {
  //   const msg = 'new message'
  //   const wrapper = shallowMount(HelloWorld, {
  //     props: { msg }
  //   })
  //   expect(wrapper.text()).toMatch(msg)
  // })
})
