import * as React from 'react';

const GENERALISMS = ['g1', 'g2', 'g3'] as const;
type Generalism = typeof GENERALISMS[number];
function isGeneralism(value: unknown): value is Generalism {
  return typeof value === 'string' && GENERALISMS.includes(value as Generalism);
}

const SPECIALISMS = ['s1', 's2', 's3'] as const;
type Specialism = typeof SPECIALISMS[number];
function isSpecialism(value: unknown): value is Specialism {
  return typeof value === 'string' && SPECIALISMS.includes(value as Specialism);
}

// This array is used for type guarding the name when a skillset changes.
export const ALL_SKILLS = [...GENERALISMS, ...SPECIALISMS] as const;
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
  resetProfile: () => void;
  sortSkills: () => void;
  fullName: string;
  skillSets: Record<Skill, SkillSet>;
}

const initialProficiency = 10;
const initialSkill = '';

export const initialSkillSets: SkillContextValue['skillSets'] = {
  g1: { proficiency: initialProficiency, skill: initialSkill },
  g2: { proficiency: initialProficiency, skill: initialSkill },
  g3: { proficiency: initialProficiency, skill: initialSkill },
  s1: { proficiency: initialProficiency, skill: initialSkill },
  s2: { proficiency: initialProficiency, skill: initialSkill },
  s3: { proficiency: initialProficiency, skill: initialSkill },
};

export const SkillContext = React.createContext<SkillContextValue>({
  fullName: '',
  skillSets: initialSkillSets,
  changeProficiency: () => null,
  changeSkill: () => null,
  changeFullName: () => null,
  resetProfile: () => null,
  sortSkills: () => null,
});

interface SkillProviderProps {
  children: React.ReactNode;
}

const SkillProvider = ({ children }: SkillProviderProps): JSX.Element => {
  const [fullName, setFullName] = React.useState<string>('');
  const [skillSets, setSkillSets] = React.useState<SkillContextValue['skillSets']>(initialSkillSets);

  const changeSkill = (name: Skill, skill: string) =>
    setSkillSets({
      ...skillSets,
      [name]: { ...skillSets[name], skill, proficiency: !skill ? initialProficiency : skillSets[name].proficiency },
    });

  const changeProficiency = (name: Skill, proficiency: number) =>
    setSkillSets({ ...skillSets, [name]: { ...skillSets[name], proficiency } });

  const changeFullName = (fullName: string) => setFullName(fullName);

  const resetProfile = () => {
    setSkillSets(initialSkillSets);
    setFullName('');
  };

  const sortSkills = (): void => {
    const sortedGeneralismSkillSets = Object.keys(skillSets)
      .filter(isGeneralism)
      .map((skill) => skillSets[skill as Generalism])
      .sort((g1, g2) => g2.proficiency - g1.proficiency)
      .reduce((skillSet, generalism, index) => ({ ...skillSet, [`g${index + 1}`]: generalism }), {}) as Record<
      Generalism,
      SkillSet
    >;

    const sortedSpecialismSkillSets = Object.keys(skillSets)
      .filter(isSpecialism)
      .map((skill) => skillSets[skill as Specialism])
      .sort((s1, s2) => s2.proficiency - s1.proficiency)
      .reduce((skillSet, specialism, index) => ({ ...skillSet, [`s${index + 1}`]: specialism }), {}) as Record<
      Specialism,
      SkillSet
    >;

    setSkillSets({ ...sortedGeneralismSkillSets, ...sortedSpecialismSkillSets });
  };

  return (
    <SkillContext.Provider
      value={{ changeFullName, fullName, skillSets, changeSkill, changeProficiency, resetProfile, sortSkills }}
    >
      {children}
    </SkillContext.Provider>
  );
};

export default SkillProvider;
