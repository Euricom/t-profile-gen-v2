/* eslint-disable arrow-body-style */
import * as React from 'react';
import styled from 'styled-components';
import SkillProvider from '../../contexts/skills';

const Grid = styled.div`
  display: grid;
  grid-gap: 27px;
  grid-template-areas:
    'header user'
    'header preview'
    'skills preview'
    'config config'
    'cookies cookies';
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 0.5fr 0.5fr 6fr 3.5fr 1fr;
  height: 100%;
  padding-bottom: 2.5%;
  padding-left: 7%;
  padding-right: 7%;
  padding-top: 2.5%;
`;

const Header = styled.div`
  height: 100%;
  grid-area: header;
  background-color: red;
`;
const Skills = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  grid-area: skills;
`;
const Preview = styled.div`
  height: 100%;
  grid-area: preview;
  background-color: yellow;
`;
const Config = styled.div`
  height: 100%;
  grid-area: config;
`;
const Cookies = styled.div`
  height: 100%;
  grid-area: cookies;
  background-color: blue;
`;
const User = styled.div`
  height: 100%;
  grid-area: user;
  background-color: black;
`;

interface LayoutProps {
  header: React.ReactNode;
  skills: React.ReactNode;
  preview: React.ReactNode;
  config: React.ReactNode;
  cookies?: React.ReactNode;
  user?: React.ReactNode;
}

const Layout = ({ header, skills, preview, config, cookies, user }: LayoutProps): JSX.Element => {
  return (
    <Grid>
      <Header>{header}</Header>
      <SkillProvider>
        <Skills>{skills}</Skills>
      </SkillProvider>
      <Preview>{preview}</Preview>
      <Config>{config}</Config>
      {cookies && <Cookies>{cookies}</Cookies>}
      {user && <User>{user}</User>}
    </Grid>
  );
};

export default Layout;
