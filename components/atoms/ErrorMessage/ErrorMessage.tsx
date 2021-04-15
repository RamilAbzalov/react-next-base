import React from 'react';
import type { PropsWithChildren } from 'react';
import type ITest from 'types/test';

type Props = ITest;

const ErrorMessage = ({ children, testId }: PropsWithChildren<Props>): JSX.Element => (
  <div data-testid={testId} data-cy={testId}>
    {Array.isArray(children) ? children.map((error, index) => <p key={index}>{error}</p>) : <p>{children}</p>}
  </div>
);

export default ErrorMessage;