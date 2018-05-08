import * as React from 'react';
import './App.css';
// import ErrorBoundary from './component/ErrorBoundary/index';
import ErrorBoundary from './component/error-boundary';
// import ErrorComponent from './errorComponent';
import logo from './logo.svg';

// export interface IErrorComponent {
//   ErrorComponent?: React.ReactNode;
// }
// const TestHoc = ErrorBoundary.withErrorBoundary(ErrorComponent: React.ReactNode);
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ErrorBoundary>
        <div>121</div>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
