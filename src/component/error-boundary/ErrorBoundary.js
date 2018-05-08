"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary() {
        // static defaultProps = {
        //   FallbackComponent: ErrorBoundaryFallbackComponent,
        // };
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            error: null,
            info: null
        };
        return _this;
    }
    ErrorBoundary.prototype.componentDidCatch = function (error, info) {
        var onError = this.props.onError;
        if (typeof onError === 'function') {
            try {
                onError.call(this, error, info ? info.componentStack : "");
            }
            catch (ignoredError) { }
        }
        this.setState({ error: error, info: info });
    };
    ErrorBoundary.prototype.render = function () {
        // const {children, FallbackComponent} = this.props;
        var children = this.props.children;
        var _a = this.state, error = _a.error, info = _a.info;
        if (error !== null) {
            // return (
            //   <FallbackComponent
            //     componentStack={info ? info.componentStack : ''}
            //     error={error}
            //   />
            // );
            return (<span>fail</span>);
        }
        return children;
    };
    return ErrorBoundary;
}(React.Component));
exports.withErrorBoundary = function (_a) {
    var Component = _a.Component, FallbackComponent = _a.FallbackComponent, onError = _a.onError;
    return function (props) { return (<ErrorBoundary FallbackComponent={FallbackComponent} onError={onError}>
    <Component {...props}/>
  </ErrorBoundary>); };
};
exports["default"] = ErrorBoundary;
