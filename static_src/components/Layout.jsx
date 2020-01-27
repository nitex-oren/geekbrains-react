import React from 'react';
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import MessageField from './MessageField';
import ChatList from './ChatList';
import Header from './Header';
import InstallPopup from './InstallPopup';
import '../styles/styles.css';


export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    };

    static defaultProps = {
        chatId: 1,
    };

 
    render() {
        return (
            <div className="layout">
                 <InstallPopup />
                <Header chatId={this.props.chatId} />
                <ChatList />
                <MessageField chatId={this.props.chatId} />
            </div>

        )
    }
}