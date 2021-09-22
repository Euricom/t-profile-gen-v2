import * as React from 'react';

import Layout from './components/Layout';
import { TProfile } from './components';

const Test = () => <div />;

function App(): JSX.Element {
  return (
    <Layout
      config={<Test />}
      header={<Test />}
      cookies={<Test />}
      preview={<TProfile />}
      skills={<Test />}
      user={<Test />}
    />
  );
}

export default App;
