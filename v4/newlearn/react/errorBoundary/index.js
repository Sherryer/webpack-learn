import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        // 显示备用 UI
        this.setState({ hasError: true });
        // 你也可以向服务端报告错误日志
        // logErrorToMyService(error, info);
    }

    render() {
        if (this.state.hasError) {
            // 你可以渲染任何的备用 UI
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}