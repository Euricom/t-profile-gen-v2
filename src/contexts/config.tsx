import * as React from 'react';
import { colors } from '../theme/foundations';

interface NameConfig {
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

interface Config {
  fullName: NameConfig;
  skills: SkillsConfig;
  asIs: boolean;
}

interface HandleNameConfigOverload {
  (action: 'changeName'): void;
  (action: 'changeColor', payload: string): void;
}

interface ConfigContext {
  config: Config;
  handleNameConfig: HandleNameConfigOverload;
}

interface ConfigProviderProps {
  children: React.ReactNode;
}

export const initialValue: Config = {
  fullName: {
    show: true,
    color: colors.neutral[900],
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

export const ConfigContext = React.createContext<ConfigContext>({
  config: initialValue,
  handleNameConfig: () => null,
});

const ConfigProvider = ({ children }: ConfigProviderProps): JSX.Element => {
  const [config, setConfig] = React.useState<Config>(initialValue);

  const handleNameConfig: HandleNameConfigOverload = (action: 'changeName' | 'changeColor', payload?: string) => {
    switch (action) {
      case 'changeColor': {
        if (typeof payload === 'string') {
          setConfig((prevState) => ({ ...prevState, fullName: { ...prevState.fullName, color: payload } }));
        }
        break;
      }
      default: {
        setConfig((prevState) => ({
          ...prevState,
          fullName: { ...prevState.fullName, show: !prevState.fullName.show },
        }));
      }
    }
  };

  return <ConfigContext.Provider value={{ config, handleNameConfig }}>{children}</ConfigContext.Provider>;
};

export default ConfigProvider;
