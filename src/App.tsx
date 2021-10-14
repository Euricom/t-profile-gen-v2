import * as React from 'react';
import Config from './components/Config';
import Layout from './components/Layout';
import { Empty, Header, NamePreview, TProfile } from './components';
import Skills from './components/Skills';
import { SkillContext } from './contexts/skills';
import { exportImage } from './utils';
import { ConfigContext } from './contexts/config';

const Test = () => <div />;

function App(): JSX.Element {
  const { fullName, skillSets } = React.useContext(SkillContext);
  const { config } = React.useContext(ConfigContext);
  const imageExportDOMNode = React.useRef<null | HTMLElement>(null);

  const isTprofilePresent = Boolean(Object.values(skillSets).filter((skillSet) => skillSet.skill).length);
  const isNamePresent = config.fullName.show;

  const tProfileVersion = config.asIs ? 'As Is' : 'To Be';

  const handleImageExport = () => exportImage({ DOMNode: imageExportDOMNode.current, userName: fullName });

  return (
    <Layout
      config={<Config isExportDisabled={!isTprofilePresent} onExportClick={handleImageExport} />}
      header={<Header>T-Profile Generator</Header>}
      cookies={<Test />}
      preview={isTprofilePresent ? <TProfile ref={imageExportDOMNode} /> : <Empty />}
      skills={<Skills />}
      user={
        <NamePreview state={tProfileVersion} color={config.fullName.color}>
          {isNamePresent && fullName}
        </NamePreview>
      }
    />
  );
}

export default App;
