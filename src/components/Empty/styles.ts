import styled from 'styled-components';

export const EmptyWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-items: center;
`;

export const Icon = styled.svg.attrs({
  fill: 'none',
  role: 'img',
  viewBox: '0 0 64 64',
  xmlns: 'http://www.w3.org/2000/svg',
})`
  width: 24px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.neutral[500]};
  font-size: 0.85rem;
  margin: 0.5rem 0;
  text-align: center;
`;
