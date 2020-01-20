import React from 'react';
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import CircularProgress from '@material-ui/core/CircularProgress';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import Message from './Message';
import { loadChats } from "../actions/chatActions";
import { sendMessage } from '../actions/messageActions';
import '../styles/styles.css';


class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
        messages: PropTypes.object.isRequired,
        chats: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired,
    };

    state = {
        input: '',
    };
    componentDidMount() {
        this.props.loadChats();
    }
 

    handleSendMessage = (message, sender) => {
        if (message.length > 0 || sender === 'bot') {
            this.sendMessage(message, sender);
        }
        if (sender === 'me') {
            this.setState({ input: '' })
        }
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleKeyUp = (event) => {
        if (event.keyCode === 13) { // Enter
            this.handleSendMessage(this.state.input, 'me');
        }
    };

    sendMessage = (message, sender) => {
        const { chatId, messages } = this.props;
        const messageId = Object.keys(messages).length + 1;
        this.props.sendMessage(messageId, message, sender, chatId);
    };

    render() {
        if (this.props.isLoading) {
            return <CircularProgress />
        }
        const { chatId, messages, chats } = this.props;

        const messageElements = chats[chatId].messageList.map(messageId => (
            <Message
                key={messageId}
                text={messages[messageId].text}
                sender={messages[messageId].sender}
            />));

        return [
            <div key='messageBox' className="message-box">
                <div key='messageElements' className="message-field">
                    {messageElements}
                </div>
                <div key='textInput' style={{ width: '100%', display: 'flex' }}>
                    <TextField
                        name="input"
                        fullWidth={true}
                        placeholder="Введите сообщение"
                        onChange={this.handleChange}
                        value={this.state.input}
                        onKeyUp={this.handleKeyUp}
                    />
                    <SendIcon onClick={() => this.handleSendMessage(this.state.input, 'me')} />
                </div>

            </div>
        ]
    }
}

const mapStateToProps = ({ chatReducer, messageReducer }) => ({
    chats: chatReducer.chats,
    messages: messageReducer.messages,
    isLoading: chatReducer.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage, loadChats }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);