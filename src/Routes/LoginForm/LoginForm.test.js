import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import LoginForm from './LoginForm'

describe(`LoginForm component`, () => {
    const props = {
        username: 'test-username',
        password: 'test-password',
        'data-other': 'test-other-prop'
    }

    it('renders a form.LoginForm by default', () => {
        const wrapper = shallow(<LoginForm />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders the LoginForm given props', () => {
        const wrapper = shallow(<LoginForm {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})