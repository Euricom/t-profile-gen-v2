import styled from 'styled-components';

export const NamePreviewWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors['euri-grey']};
  border: 1px solid ${({ theme }) => theme.colors.neutral[900]};
  height: 100%;
  text-align: center;
  margin: 0 auto;
  padding: 1rem;
  width: 50%;
`;

export const NamePreviewName = styled.p`
  color: ${({ theme }) => theme.colors.neutral[900]};
  font-size: 0.9rem;
  font-weight: 700;
  margin: 0.1rem 0;
`;

export const NamePreviewState = styled.p`
  color: ${({ theme }) => theme.colors.neutral[300]};
  font-size: 0.85rem;
  margin: 0.1rem 0;
`;
