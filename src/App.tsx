import * as React from 'react';
import Config from './components/Config';
import Layout from './components/Layout';
import { Header, NamePreview, TProfile } from './components';
import Skills from './components/Skills';
import { SkillContext } from './contexts/skills';
import { exportImage } from './utils';

const Test = () => <div />;

function App(): JSX.Element {
  const { fullName, skillSets } = React.useContext(SkillContext);
  const imageExportDOMNode = React.useRef<null | HTMLElement>(null);

  const isTprofilePresent = Boolean(Object.values(skillSets).filter((skillSet) => skillSet.skill).length);

  const handleImageExport = () => exportImage({ DOMNode: imageExportDOMNode.current, userName: fullName });

  return (
    <Layout
      config={<Config onExportClick={handleImageExport} />}
      header={<Header>T-Profile Generator</Header>}
      cookies={<Test />}
      preview={isTprofilePresent ? <TProfile ref={imageExportDOMNode} /> : null}
      skills={<Skills />}
      user={<NamePreview state="To Be">{fullName}</NamePreview>}
    />
  );
}

export default App;
