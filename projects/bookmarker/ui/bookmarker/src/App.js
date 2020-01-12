import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import Bookmarks from './containers/Bookmarks/Bookmarks'

function App() {
  return (
    <div>
      <Layout>
        <Bookmarks />
      </Layout>
    </div>
  );
}

export default App;
