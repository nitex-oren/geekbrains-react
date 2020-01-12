import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
        <div >
        <h1>Здесь должна быть страница профиля пользователя, но я не успеваю</h1>
        <Link href='/' to='/'>   Вернуться в чат   </Link>
        </div>
    )
  }
}
