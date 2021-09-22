/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react';

// This array is used for type guarding the name when a skillset changes.
export const ALL_SKILLS = ['gen1', 'gen2', 'gen3', 'spec1', 'spec2', 'spec3'] as const;
export type Skill = typeof ALL_SKILLS[number];
export function isSkillType(value: string): asserts value is Skill {
  if (!ALL_SKILLS.includes(value as any)) throw new Error(`${value} is not a Skill type`);
}

interface SkillSet {
  proficiency: number;
  skill: string;
}

export interface SkillContextValue {
  changeFullName: (fullName: string) => void;
  changeProficiency: (name: Skill, proficiency: number) => void;
  changeSkill: (name: Skill, skill: string) => void;
  fullName: string;
  skillSets: Record<Skill, SkillSet>;
}

export const initialSkillSets: SkillContextValue['skillSets'] = {
  gen1: { proficiency: 0, skill: '' },
  gen2: { proficiency: 0, skill: '' },
  gen3: { proficiency: 0, skill: '' },
  spec1: { proficiency: 0, skill: '' },
  spec2: { proficiency: 0, skill: '' },
  spec3: { proficiency: 0, skill: '' },
};

export const SkillContext = React.createContext<SkillContextValue>({
  fullName: '',
  skillSets: initialSkillSets,
  changeProficiency: () => {},
  changeSkill: () => {},
  changeFullName: () => {},
});

interface SkillProviderProps {
  children: React.ReactNode;
}

const SkillProvider = ({ children }: SkillProviderProps): JSX.Element => {
  const [fullName, setFullName] = React.useState<string>('');
  const [skillSets, setSkillSets] = React.useState<SkillContextValue['skillSets']>(initialSkillSets);

  const changeSkill = (name: Skill, skill: string) =>
    setSkillSets({ ...skillSets, [name]: { ...skillSets[name], skill } });

  const changeProficiency = (name: Skill, proficiency: number) =>
    setSkillSets({ ...skillSets, [name]: { ...skillSets[name], proficiency } });

  const changeFullName = (fullName: string) => setFullName(fullName);

  return (
    <SkillContext.Provider value={{ changeFullName, fullName, skillSets, changeSkill, changeProficiency }}>
      {children}
    </SkillContext.Provider>
  );
};

export default SkillProvider;
