import React from 'react';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {push} from 'connected-react-router'
import SendIcon from '@material-ui/icons/Send';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import ListItemText from '@material-ui/core/ListItemText';
import { addChat,  blinkChat} from '../actions/chatActions';
import '../styles/styles.css';

class ChatList extends React.Component {
    static propTypes = {
        chats: PropTypes.object.isRequired,
        addChat: PropTypes.func.isRequired,
        push: PropTypes.func.isRequired,
        blink: PropTypes.string,
    };
    state = {
        input: '',
    };
    static defaultProps = {
        blink: undefined,
      };
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleKeyUp = (event) => {
        if (event.keyCode === 13) { // Enter
            this.handleAddChat();
        }
    };

    handleAddChat = () => {
        if (this.state.input.length > 0) {
            this.props.addChat(this.state.input);
            this.setState({ input: '' });
        }
    };

    handleNavigate = (link) => {
        this.props.push(link);
    }

    render() {
        const { chats, blink } = this.props;
        const chatElements = Object.keys(chats).map(chatId => (
                <ListItem 
                style={{backgroundColor: blink == chatId ? 'green' : ''}}
                    key={chatId}
                    onClick = { () => this.handleNavigate(`/chat/${chatId}`)}>
                        <ListItemText primary={chats[chatId].title}/>
                        <SendIcon />
                </ListItem>
            ));

        return (
            <List className="chatlist">
                {chatElements}
                <ListItem key="Add new chat"  onClick={this.handleAddChat}   style={{ height: '40px' }}>
                    <TextField
                        key="textField"
                        fullWidth = {false}
                        name="input"
                        placeholder="Добавить новый чат"
                        onChange={this.handleChange}
                        value={this.state.input}
                        onKeyUp={this.handleKeyUp}/>
                    <AddIcon />
                </ListItem>
            </List>
        )
    }
}

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
    blink: chatReducer.blink,
 });
 
 const mapDispatchToProps = dispatch => bindActionCreators({ addChat, push }, dispatch);
 
 export default connect(mapStateToProps, mapDispatchToProps)(ChatList);