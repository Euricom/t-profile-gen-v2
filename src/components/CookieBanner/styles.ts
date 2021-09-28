import styled from 'styled-components';

export const CookieBanner = styled.section`
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors['bg-grey']};
  border: 2px solid ${({ theme }) => theme.colors.primary[500]};
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  font-weight: 700;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: center;
    flex-direction: row;
  }
`;

export const CookieBannerTextContainer = styled.div`
  margin: 1rem 0;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0;
  }
`;

export const CookieBannerActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: auto;
  }
`;
