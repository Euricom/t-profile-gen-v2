import * as React from 'react';
import Config from './components/Config';

import Layout from './components/Layout';
import { TProfile } from './components';
import Skills from './components/Skills';

const Test = () => <div />;

function App(): JSX.Element {
  return (
    <Layout
      config={<Config />}
      header={<Test />}
      cookies={<Test />}
      preview={<TProfile />}
      skills={<Skills />}
      user={<Test />}
    />
  );
}

export default App;
