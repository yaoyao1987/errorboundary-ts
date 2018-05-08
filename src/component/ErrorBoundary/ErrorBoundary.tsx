import * as React from 'react';
import { ErrorInfo } from 'react';

export interface IErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

// const IS_REACT_16 = !!ReactDOM.createPortal;

export default class ErrorBoundary extends React.Component<{ children: JSX.Element }, IErrorBoundaryState> {
  public static withErrorBoundary: any;
  private state: IErrorBoundaryState = { hasError: false };
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }
  public render() {
    const { children } = this.props;
    const { hasError, error, errorInfo } = this.state;
    if (hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <hr />
          <h3>{ error && error.toString() }</h3>
          <br/>
          <h3>{ errorInfo && errorInfo.componentStack }</h3>
        </div>
      );
    }
    return children;
  }
}
