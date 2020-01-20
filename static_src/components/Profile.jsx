import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import CircularProgress from '@material-ui/core/CircularProgress';
import { loadProfile } from "../actions/profileActions";
import '../styles/styles.css';

class Profile extends React.Component {
  static propTypes = {
    profile: PropTypes.object.isRequired,
    loadProfile: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    profileId: PropTypes.number.isRequired,
  };

  static defaultProps = {
    profileId: 1,
  };
  componentDidMount() {
    this.props.loadProfile();
  }
  render() {
    if (this.props.isLoading) {
      return <CircularProgress />
    }
    return (
      <div >
        <h1>Профиль пользователя {this.props.profile.name}</h1>
        <p>Имя: {this.props.profile.name}</p>
        <p>E-mail: {this.props.profile.mail}</p>
        <p>Телефон: {this.props.profile.tel}</p>

        <Link href='/' to='/'>   Вернуться в чат   </Link>
      </div>
    )
  }
}


const mapStateToProps = ({ profileReducer }) => ({
  profile: profileReducer.profile,
  isLoading: profileReducer.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ loadProfile }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);