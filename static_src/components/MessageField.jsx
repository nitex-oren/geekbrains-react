import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';


import Message from './Message';
import '../styles/styles.css'


export default class MessageField extends React.Component {
    state = {
        messages: [{ sender: 'robot', text: "Привет" }, { sender: 'robot', text: "Как дела?" }],
        input: ''
    };

    textInput = React.createRef();

    componentDidMount() {
        this.textInput.current.focus();
    }

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].sender === 'me') {
            this.setState({ messages: [...this.state.messages, { sender: 'robot', text: 'Не приставай ко мне, я робот!' }] });
        }
    }
    handleSendMessage = (message) => {
        this.setState({
            messages: [...this.state.messages, { sender: 'me', text: this.state.input }],
            input: ''
        });
    };
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.handleSendMessage()
        }
    }




    render() {
        const messageElements = this.state.messages.map((message, index) => (
            <Message key={index} text={message.text} sender={message.sender} />));

        return <div className="message-box">
            <div className="message-field">
                {messageElements}
            </div>

            <IconButton
                color="primary"
                onClick={this.handleSendMessage}
            ><TextField
                    id="standard-basic"
                    fullWidth={true}
                    ref={this.textInput}
                    name="input"
                    placeholder="Введите сообщение"
                    value={this.state.input}
                    onChange={this.handleInput}
                    onKeyUp={this.handleKeyUp}
                    margin="dense"
                /><SendIcon
                    fontSize="large"
                /></IconButton>

        </div>

    }
}
