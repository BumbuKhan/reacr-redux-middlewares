import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class UserList extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  renderUser(user) {
    return(
        <div className="card card-block" key={user.id}>
          <h4 className="card-title">{user.name}</h4>
          <p className="card-text">{user.surname}</p>
          <p className="card-text">{user.company.name}</p>
          <a href={`mailto:${user.email}`} className="btn btn-primary">{user.email}</a>
        </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.users.map(this.renderUser)}
      </div>
    );
  }
}

function mapStateToProps({users}) {
  return {users};
}

export default connect(mapStateToProps, actions)(UserList);
