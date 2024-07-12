import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SlideHome from './SlideHome';

function App() {
  return (
    <Router>
      <Route path="/slidehome" element={<SlideHome />} />
    </Router>
  );
}

export default App;
