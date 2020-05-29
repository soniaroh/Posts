import React from 'react';
import Post from './Post';
import { shallow } from 'enzyme';

describe('Post', () => {
  const mockProps = {id: 1, title: 'bar', body:'foo', userId:2};
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Post post={mockProps}/>);
  })

  it('should render without errors', () => {
    const sectionClass = wrapper.find('.post-excerpt');
    expect(sectionClass.length).toBe(1)
  });

  it('should render a text header', () => {
    const header = wrapper.find('h3');
    expect(header.length).toBe(1)
  });

  it('should render the body of the post',() => {
    const body = wrapper.find('p');
    expect(body.length).toBe(1)
  });

});