import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SignupForm from './SignupForm'


describe(`SignupForm component`, () => {
  const props = {
    name: 'test-name',
    departure_airport: 'test-departure_airport',
    arrival_airport: 'test-arrival_airport',
    departure_time: 'test-departure_time',
    arrival_time: 'test-arrival_time',
    company: 'test-company',
    'data-other': 'test-other-prop'
  }

  it('renders a form.SignupForm by default', () => {
    const wrapper = shallow(<SignupForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the SignupForm given props', () => {
    const wrapper = shallow(<SignupForm {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})