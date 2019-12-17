import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import SendIcon from '@material-ui/icons/Send';

export default class ChatList extends React.Component {
    render() {
        return (
            <List  className="chatlist">
                <Link href='/chat/1/' to='/chat/1/'>
                    <ListItem>
                    <ListItemText primary="Chat 1"/>
                    <SendIcon />
                    </ListItem>
                </Link>
                <Link href='/chat/2/' to='/chat/2/'>
                <ListItem>
                    <ListItemText primary="Chat 2"/>
                    <SendIcon />
                    </ListItem>
                </Link>
                <Link href="/chat/3/" to='/chat/3/'>
                <ListItem>
                    <ListItemText primary="Chat 3"/>
                     <SendIcon />
                    </ListItem>
                </Link>

            </List>

        )
    }
}