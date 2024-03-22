import React from 'react';
import renderer from 'react-test-renderer';
import Header from './../app/components/Header';

test('MyComponent snapshot', () => {
    const component = renderer.create(<Header />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });