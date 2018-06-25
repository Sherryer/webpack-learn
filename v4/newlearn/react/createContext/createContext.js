import React, {Component} from 'react'
import reactDom from 'react-dom'
import styles from '../../../src/style.css'

const ThemeContext = React.createContext("light");

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { theme: "light" };
        this.toggleTheme = this.toggleTheme.bind(this);
    }

    toggleTheme() {
        this.setState(({ theme }) => ({
            theme: theme === "light" ? "dark" : "light"
        }));
    }

    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <AppBody onClick={this.toggleTheme} />
                </ThemeContext.Provider>
            </div>
        );
    }
}

class AppBody extends React.PureComponent {
    render() {
        console.log("AppBody rendered");
        const { onClick } = this.props;
        return (
            <ThemeContext.Consumer>
                {theme => (
                    <button className={styles[theme]} onClick={onClick}>
                        {theme}
                    </button>
                )}
            </ThemeContext.Consumer>
        );
    }
}

reactDom.render( <App/>, document.getElementById('dom'))