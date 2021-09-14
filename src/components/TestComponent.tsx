import * as React from 'react';

interface TestComponentProps {
  name: string;
}

const TestComponent = ({ name }: TestComponentProps): JSX.Element => <div>{name}</div>;

export default TestComponent;
