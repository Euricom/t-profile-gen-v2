import * as React from 'react';

import Layout from './components/Layout';

const Test = () => <div />;

function App(): JSX.Element {
  return (
    <Layout
      config={<Test />}
      header={<Test />}
      cookies={<Test />}
      preview={<Test />}
      skills={<Test />}
      user={<Test />}
    />
  );
}

export default App;
