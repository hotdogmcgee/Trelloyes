import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List.js'


describe('List component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List cards={[1, 2, 3]} allCards="a"/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

//   it('renders the UI as expected', () => {
//     const tree = renderer
//       .create(<List header="header" cards={[1, 2, 3]} />)
//       .toJSON();
//     expect(tree).toMatchSnapshot();  
//   });

});