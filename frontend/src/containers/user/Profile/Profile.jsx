import React from 'react'
import { connect } from 'react-redux'
import './Profile.scss';
const Profile = ({ user }) => {
    return (
        <div className="profileContainer">
            {user && <React.Fragment>
                <div className="userHeader">
                    
                <img src="https://w7.pngwing.com/pngs/122/453/png-transparent-computer-icons-user-profile-avatar-female-profile-heroes-head-woman.png" alt="" />
                
                <div className="userData">
                    <span>{user.name}</span>
                </div>
                
                </div>
                <div className="comments">
                </div>
            </React.Fragment>}
        </div>
    )
}
const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps)(Profile);