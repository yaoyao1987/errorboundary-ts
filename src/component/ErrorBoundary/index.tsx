import * as React from 'react';
import ErrorBoundary from './ErrorBoundary';

export interface IWithErrorBoundaryProps {
  BaseComponent?: any;
}

ErrorBoundary.withErrorBoundary = ({
  BaseComponent,
}: IWithErrorBoundaryProps) => {
  <ErrorBoundary>
    <BaseComponent />
  </ErrorBoundary>
};

export default ErrorBoundary;
