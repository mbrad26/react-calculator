import React from 'react';
import Calculator from '../Calculator/Calculator';
import './App.css';

// class App extends React.Component {
//   render() {
//     return (
//       < div className='app-container'>
//       </div>
//     );
//   }
// }

const App = () => (
  <div className='app-container'>
    <Calculator />
  </div>
);

export default App;
