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

// function overloads
interface HandleNameConfigOverload {
  (action: 'changeName'): void;
  (action: 'changeColor', payload: string): void;
}

interface HandleSkillsPreviewConfigOverload {
  (action: 'showBorder'): void;
  (action: 'changeBackgroundColor', payload: string): void;
  (action: 'changeBorderColor', payload: string): void;
}

interface ConfigContext {
  config: Config;
  handleNameConfig: HandleNameConfigOverload;
  handleSkillsPreviewConfig: HandleSkillsPreviewConfigOverload;
  handleTProfileVersion: (value: string) => void;
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
  handleSkillsPreviewConfig: () => null,
  handleTProfileVersion: () => null,
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

  const handleSkillsPreviewConfig = (
    action: 'changeBackgroundColor' | 'changeBorderColor' | 'showBorder',
    payload?: string,
  ) => {
    switch (action) {
      case 'changeBackgroundColor': {
        if (typeof payload === 'string') {
          setConfig((prevState) => ({ ...prevState, skills: { ...prevState.skills, color: payload } }));
        }
        break;
      }
      case 'changeBorderColor': {
        if (typeof payload === 'string') {
          setConfig((prevState) => ({
            ...prevState,
            skills: { ...prevState.skills, border: { ...prevState.skills.border, color: payload } },
          }));
        }
        break;
      }
      default: {
        setConfig((prevState) => ({
          ...prevState,
          skills: {
            ...prevState.skills,
            border: { ...prevState.skills.border, show: !prevState.skills.border.show },
          },
        }));
      }
    }
  };

  const handleTProfileVersion = (version: string) => {
    switch (version) {
      case 'As-is': {
        setConfig((prevState) => ({ ...prevState, asIs: true }));
        break;
      }
      case 'To-be': {
        setConfig((prevState) => ({ ...prevState, asIs: false }));
        break;
      }
      default: {
        throw new Error(`${version} is not a valid value.`);
      }
    }
  };

  return (
    <ConfigContext.Provider value={{ config, handleNameConfig, handleSkillsPreviewConfig, handleTProfileVersion }}>
      {children}
    </ConfigContext.Provider>
  );
};

export default ConfigProvider;
