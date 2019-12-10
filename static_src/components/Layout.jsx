import React from 'react';
import MessageField from './MessageField';
import ChatList from './ChatList';
import Header from './Header';
import '../styles/styles.css'

export default class Layout extends React.Component {
    state = {
        
    };

    render() {
        return <div className="layout">
            <Header />
            <ChatList/>
            <MessageField/>
        </div>
    }
}
