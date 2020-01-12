import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import '../styles/styles.css';

export default class Header extends React.Component {
  static propTypes = {
    chatId: PropTypes.number,
  };
  static defaultProps = {
    chatId: 1,
  };
  render() {
    return (<div className="header">
        <h1>Приветствуем тебя в Нашем великом чате)))</h1>
        <p style={{ fontSize: '20px' }}>Чат {this.props.chatId}</p>
        <Link href="/profile/" to='/profile/'>   Профиль   </Link>
        </div>
    )
  }
}
