import React from 'react';
import profile from './profile.png';
import register from './register.png';
import signin from './signin.jpg';
import signout from './signout.jpg';
import Logo from '../Logo/Logo.js';
const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav style={{display:"flex"}} >
          <span>
          <Logo />
          </span>
        <span style={{display: 'flex', justifyContent: 'flex-end', width:"90%"}}>
          <p onClick={() => onRouteChange('profile')} style={{paddingRight: "20px"}} className='f3 link dim black underline pointer'>
                <div><img width="40px" alt="" src={profile} /></div>
                <div>Profile</div>
          </p>
          <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pointer'>
                <div><img width="40px" alt="" src={signout} /></div>
                <div>Sign Out</div>
          </p>
        </span>
        </nav>
      );
    } else {
      return (
        <nav style={{display:"flex"}} >
          <span>
          <Logo />
          </span>
          <span style={{display: 'flex', justifyContent: 'flex-end', width:"90%"}}>
          <p onClick={() => onRouteChange('signin')} style={{paddingRight: "20px"}} className='f3 link dim black underline pointer'>
             <div><img width="40px" alt="" src={signin} /></div>
             <div>Sign In</div>
          </p>
          <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pointer'>
             <div><img width="40px" alt="" src={register} /></div>
             <div>Register</div>
          </p>
        </span>
        </nav>
      );
    }
}

export default Navigation;