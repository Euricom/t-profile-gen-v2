import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
`;

export const HeaderTitle = styled.h1`
  font-size: 3rem;
  text-decoration: underline solid ${({ theme }) => theme.colors.primary[500]};
  text-underline-offset: 0.5rem;
`;
