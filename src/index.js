import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={handleClick} />
  </div>,
  document.getElementById('root')
);

let handleClick = (e) => {
  e.target.innerText === 'happy' ?
  e.target.innerText = 'sad' :
  e.target.innerText = 'happy'
}