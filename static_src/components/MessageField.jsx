import React from 'react';
import Message from './Message';
let author = 'Me'

export default class MessageField extends React.Component {
    state = {
        messages: ["Robot: Привет!", "Robot: Как дела?"],
    };

    handleClick = () => {
        this.setState({ messages: [...this.state.messages, `${author}: Замечательно`] });
    };

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].includes('Me')) {
            this.setState({ messages: [...this.state.messages, 'Robot: Не приставай ко мне, я робот!'] });
        }
    }

    render() {
        const messageElements = this.state.messages.map((text, index) => (
            <Message key={index} text={text} />));

        return <div>
            {messageElements}
            <button onClick={this.handleClick}>Отправить сообщение</button>
        </div>
    }
}
