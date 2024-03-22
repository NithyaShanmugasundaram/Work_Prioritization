import React from 'react';
import renderer from 'react-test-renderer';
import Loading from './../app/components/Loading';

test('MyComponent snapshot', () => {
    const component = renderer.create(<Loading />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });