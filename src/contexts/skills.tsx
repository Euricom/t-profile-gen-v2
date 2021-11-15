import * as React from 'react';

const GENERALISMS = ['g1', 'g2', 'g3'] as const;
const SPECIALISMS = ['s1', 's2', 's3'] as const;

// This array is used for type guarding the name when a skillset changes.
export const ALL_SKILLS = [...GENERALISMS, ...SPECIALISMS] as const;
export type Skill = typeof ALL_SKILLS[number];
export function isSkillType(value: string): asserts value is Skill {
  if (!ALL_SKILLS.includes(value as any)) throw new Error(`${value} is not a Skill type`);
}

interface SkillSet {
  id: string;
  proficiency: number;
  skill: string;
}

export interface SkillContextValue {
  changeFullName: (fullName: string) => void;
  changeProficiency: (name: Skill, proficiency: number) => void;
  changeSkill: (name: Skill, skill: string) => void;
  resetProfile: () => void;
  sortSkills: () => void;
  fullName: string;
  skillSets: Record<Skill, SkillSet>;
}

const initialProficiency = 10;
const initialSkill = '';

export const initialSkillSets: SkillContextValue['skillSets'] = {
  g1: { id: 'g1', proficiency: initialProficiency, skill: initialSkill },
  g2: { id: 'g2', proficiency: initialProficiency, skill: initialSkill },
  g3: { id: 'g3', proficiency: initialProficiency, skill: initialSkill },
  s1: { id: 's1', proficiency: initialProficiency, skill: initialSkill },
  s2: { id: 's2', proficiency: initialProficiency, skill: initialSkill },
  s3: { id: 's3', proficiency: initialProficiency, skill: initialSkill },
};

export const SkillContext = React.createContext<SkillContextValue>({
  fullName: '',
  skillSets: initialSkillSets,
  changeProficiency: () => null,
  changeSkill: () => null,
  changeFullName: () => null,
  resetProfile: () => null,
  sortSkills: () => null
});

interface SkillProviderProps {
  children: React.ReactNode;
}

const SkillProvider = ({ children }: SkillProviderProps): JSX.Element => {
  const [fullName, setFullName] = React.useState<string>('');
  const [skillSets, setSkillSets] = React.useState<SkillContextValue['skillSets']>(initialSkillSets);

  const changeSkill = (name: Skill, skill: string) =>
    setSkillSets({ ...skillSets, [name]: { ...skillSets[name], skill, proficiency: !skill ? initialProficiency : skillSets[name].proficiency } });

  const changeProficiency = (name: Skill, proficiency: number) =>
    setSkillSets({ ...skillSets, [name]: { ...skillSets[name], proficiency } });

  const changeFullName = (fullName: string) => setFullName(fullName);

  const resetProfile = () => {
    setSkillSets(initialSkillSets);
    setFullName('');
  };

  const sortSkills = (): void => {
    const generalisms = Object.values(skillSets).filter(skillSet => GENERALISMS.includes(skillSet.id as any))
    const specialisms = Object.values(skillSets).filter(skillSet => SPECIALISMS.includes(skillSet.id as any));

    const sortedGeneralisms = generalisms.sort((g1, g2) => g2.proficiency - g1.proficiency);
    const sortedSpecialisms = specialisms.sort((s1, s2) => s2.proficiency - s1.proficiency);

    const newSkillSets = [...sortedGeneralisms, ...sortedSpecialisms].reduce<SkillContextValue['skillSets']>((skillSets, skill) => {
      isSkillType(skill.id);

      return {...skillSets, [skill.id]: skill}
    }, {} as SkillContextValue['skillSets'])

    setSkillSets(newSkillSets);
  }

  return (
    <SkillContext.Provider
      value={{ changeFullName, fullName, skillSets, changeSkill, changeProficiency, resetProfile, sortSkills }}
    >
      {children}
    </SkillContext.Provider>
  );
};

export default SkillProvider;
