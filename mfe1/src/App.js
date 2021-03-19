import React from 'react';
import './App.css';

const Mfe1Button = React.lazy(() => import('MFE1/Button'));
const Mfe1Text = React.lazy(() => import('MFE1/Text'));

const App = () => (
  <div className='App'>
    MFE1
    <React.Suspense fallback='Loading Button'>
      <Mfe1Button />
      <Mfe1Text />
    </React.Suspense>
  </div>
);

export default App;
