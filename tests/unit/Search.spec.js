import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Search from '../../src/components/Search'

describe('Search component unit tests', () => {
  test('call search when button is clicked', () => {
    const vm = new Vue(Search)
    const wrapper = mount(Search, {
      propsData: {
        data: {
          selectedFile: 'users',
          selectedSearchTerm: '_id',
          searchValue: 1
        }
      }
    })
    const searchTask = jest.fn()
    wrapper.setMethods({
      searchTask: searchTask
    })
    wrapper.find('button').trigger('click')
    expect(searchTask).toHaveBeenCalled()
  })
})
