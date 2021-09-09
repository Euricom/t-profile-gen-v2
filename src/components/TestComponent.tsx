import * as React from 'react';

interface TestComponentProps {
  name: string;
}

const TestComponent = ({ name }: TestComponentProps) => <div>{name}</div>;

export default TestComponent;
