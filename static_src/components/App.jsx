import React from 'react';


export default class App extends React.Component {
    state = {
        text: 'Наш первый React-компонент'
    };

    render() {
        setTimeout(()=> this.setState({text: 'Обновленный React-компонент'}), 1000)
        return (
            <h1>{this.state.text}</h1>
        )
    }
}

