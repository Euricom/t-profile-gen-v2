import * as React from 'react';
import * as S from './styles';

const Empty = (): JSX.Element => (
  <S.EmptyWrapper>
    <S.Icon>
      <title>Information Icon</title>
      <path stroke="#6AB14C" strokeWidth="6" d="M3 3h58v58H3z" />
      <path
        d="M34.531 47h-5.947V24.81h5.947V47Zm-6.296-27.932c0-.888.294-1.62.882-2.194.602-.574 1.415-.861 2.44-.861 1.012 0 1.819.287 2.42.861.602.574.903 1.306.903 2.194 0 .903-.308 1.641-.923 2.215-.602.574-1.401.861-2.4.861-.997 0-1.804-.287-2.42-.86-.6-.575-.902-1.313-.902-2.216Z"
        fill="#6AB14C"
      />
    </S.Icon>
    <S.Text>Add skills to see a preview of your T-Profile.</S.Text>
  </S.EmptyWrapper>
);

export default Empty;
