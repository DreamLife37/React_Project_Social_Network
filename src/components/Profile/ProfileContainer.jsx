import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { withRouter } from 'react-router';
import { getUserProfile, getStatus, updateStatus } from "../../redux/profile-reducer"
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 14702;
    }
    this.props.getUserProfile(userId);

    /* axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        this.props.setUserProfile(response.data);
      }); */

      this.props.getStatus(userId);
  }

  render() {

    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
    )
  }
}

/* let AuthRedirectComponent = (props) => {
  if (!this.props.isAuth) return <Redirect to='/login' />
  return <ProfileContainer {...props} />
} */


//let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

/* let mapStateToPropsRedirect = (state) => ({
  isAuth: state.auth.isAuth
});
AuthRedirectComponent = connect (mapStateToPropsRedirect)(AuthRedirectComponent) */

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
  /* isAuth: state.auth.isAuth */
});

//let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

//export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter)(ProfileContainer);