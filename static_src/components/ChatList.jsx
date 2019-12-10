import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

export default class ChatList extends React.Component {
    state = {

    };
  


    render() {
        return <div className="chatlist">
            <List component="nav" >
                <ListItem button
                    selected={true}
                    // onClick={event => handleListItemClick(event, 0)}
                    >
                    <ListItemText primary="Главный чат" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Обсуждние" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Курилка" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Корзина" />
                </ListItem>
            </List>




        </div>
    }
}