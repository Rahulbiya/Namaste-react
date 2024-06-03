import React from 'react';
import ReactDOM from 'react-dom';
const heading =React.createElement('h1',{id:'heading',xyz:"abc"},'Hello World');
//const heading is a react elemnet is normal object in java script.
//heading and xyz are props of h1 element.
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

const parent = React.createElement('div',{id:"parent"},React.createElement('div',{id:'child'},React.createElement('h1',{},'I asm H1 tag')));
console.log(parent);
root.render(parent);