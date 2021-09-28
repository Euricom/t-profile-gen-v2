import * as React from 'react';

import { colors } from '../theme/foundations';

interface FullNameConfig {
  show: boolean;
  color: string;
}

interface SkillsConfig {
  color: string;
  border: {
    show: boolean;
    color: string;
  };
}

interface ConfigContextValue {
  fullName: FullNameConfig;
  skills: SkillsConfig;
  asIs: boolean;
}

export const initialValue: ConfigContextValue = {
  fullName: {
    show: true,
    color: colors['euri-grey'],
  },
  skills: {
    color: colors.primary['500'],
    border: {
      show: true,
      color: colors.neutral['900'],
    },
  },
  asIs: true,
};

export const ConfigContext = React.createContext<ConfigContextValue>(initialValue);

interface ConfigProviderProps {
  children: React.ReactNode;
}

type test = keyof FullNameConfig;

const ConfigProvider = ({ children }: ConfigProviderProps): JSX.Element => {
  const [config, setConfig] = React.useState<ConfigContextValue>(initialValue);

  // TODO: I finished here, I was thinking how to update the config state, but i'm not sure the ConfigContextValue interface is OK.
  // const changeFullNameConfig = (name: Pick<keyof FullNameConfig, 'show'>)

  return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>;
};

export default ConfigProvider;
