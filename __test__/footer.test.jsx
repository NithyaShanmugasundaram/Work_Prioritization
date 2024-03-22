import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './../app/components/Footer';

test('MyComponent snapshot', () => {
    const component = renderer.create(<Footer />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });