import * as React from 'react';

export interface FallbackProps {
  error?: Error;
  componentStack?: string;
}

const ErrorBoundaryFallbackComponent = ({componentStack, error}: FallbackProps): any => (
  <div>{`${error}`}</div>
);

export default ErrorBoundaryFallbackComponent;
