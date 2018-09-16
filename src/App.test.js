import React from 'react';
import {configure, shallow} from 'enzyme';
import {expect} from 'chai';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('App component testing',function(){
  it('renders Welcome message',function(){
    const wrapper = shallow(<App/>);
    const welcomeText = <h1 className="App-title">Welcome to React JS</h1>;
    expect(wrapper.contains(welcomeText)).to.equal(true);
  })
})