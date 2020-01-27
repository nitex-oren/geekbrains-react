import React from 'react';
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import CircularProgress from '@material-ui/core/CircularProgress';
import { loadChats } from "../actions/chatActions";
import '../styles/styles.css';
import { Link } from 'react-router-dom';
import PushToggle from '../components/PushToggle';

class Header extends React.Component {
  static propTypes = {
    chatId: PropTypes.number,
    chats: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };
  static defaultProps = {
    chatId: 1,
  };
  render() {
    if (this.props.isLoading) {
      return <CircularProgress />
  }
    const { chats, chatId } = this.props;

    return (<div className="header">
      <PushToggle />
      <div className="headheader">Приветствуем тебя в Нашем великом чате)))</div>
      <div>Текущий чат: {chats[chatId].title}</div>
      <Link href="/profile/" to='/profile/'>   Профиль   </Link>
    </div>
    )
  }
}

const mapStateToProps = ({ chatReducer }) => ({
  chats: chatReducer.chats,
  isLoading: chatReducer.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ loadChats }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);