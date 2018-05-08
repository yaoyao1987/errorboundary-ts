import * as React from 'react';
// import ErrorBoundaryFallbackComponent from './ErrorBoundaryFallbackComponent';

export interface IErrorInfo {
  componentStack: string;
}

export interface IState {
  error: ?Error;
  info: ?IErrorInfo;
}

export interface IFallbackProps {
  error?: Error;
  componentStack?: string;
}

export interface IErrorBoundaryProps {
  children?: any;
  onError?: (error: Error, componentStack: string) => void;
  FallbackComponent?: React.ComponentType<IFallbackProps>;
}

export interface IwithErrorBoundary {
  Component: React.ComponentType<any>,
  FallbackComponent?: React.ComponentType<IFallbackProps>;
  onError?: (error: Error, componentStack: string) => void;
}

class ErrorBoundary extends React.Component<IState, IErrorBoundaryProps> {
  // static defaultProps = {
  //   FallbackComponent: ErrorBoundaryFallbackComponent,
  // };

  state: IState = {
    error: null,
    info: null,
  };

  componentDidCatch(error: Error, info: IErrorInfo): void {
    const {onError} = this.props;

    if (typeof onError === 'function') {
      try {
        onError.call(this, error, info ? info.componentStack : "");
      } catch (ignoredError) {}
    }

    this.setState({error, info});
  }

  render() {
    // const {children, FallbackComponent} = this.props;
    const {children} = this.props;
    // const {error, info} = this.state;
    const {error} = this.state;

    if (error !== null) {
      // return (
      //   <FallbackComponent
      //     componentStack={info ? info.componentStack : ''}
      //     error={error}
      //   />
      // );
			return (
	      <span>fail</span>
	    );
    }

    return children;
  }
}

export const withErrorBoundary = ({
  Component,
  FallbackComponent,
  onError
}: IwithErrorBoundary) => (props: any) => (
  <ErrorBoundary
  	FallbackComponent={FallbackComponent}
  	onError={onError}
  >
    <Component {...props} />
  </ErrorBoundary>
);

export default ErrorBoundary;
