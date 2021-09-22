import * as React from 'react';

import Layout from './components/Layout';
import Skills from './components/Skills';

const Test = () => <div />;

function App(): JSX.Element {
  return (
    <Layout
      config={<Test />}
      header={<Test />}
      cookies={<Test />}
      preview={<Test />}
      skills={<Skills />}
      user={<Test />}
    />
  );
}

export default App;
