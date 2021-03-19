import React from 'react';
import './App.css';

const Mfe1Button = React.lazy(() => import('MFE1/Button'));

const App = () => (
  <div className='App'>
    MFE2
    <React.Suspense fallback='Loading Button'>
      <Mfe1Button />
    </React.Suspense>
  </div>
);

export default App;
