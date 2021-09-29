import * as React from 'react';
import Config from './components/Config';

import Layout from './components/Layout';
import { NamePreview, TProfile } from './components';
import Skills from './components/Skills';
import { SkillContext } from './contexts/skills';

const Test = () => <div />;

function App(): JSX.Element {
  const { fullName } = React.useContext(SkillContext);

  return (
    <Layout
      config={<Config />}
      header={<Test />}
      cookies={<Test />}
      preview={<TProfile />}
      skills={<Skills />}
      user={<NamePreview state="To Be">{fullName}</NamePreview>}
    />
  );
}

export default App;
