import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import jmap from 'jmap.js'
import MapUIKit from '@jibestream-dev/jmap-mapui-kit'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
