import React from 'react';
import profile from './profile.png';
const Profile = ({ name, email, entries, joined, onRouteChange }) => {
	return(
     <article className="br3 ba b--black-10 mv4 w-200 w-100-m w-50-l mw6 shadow-5 center">
        <main className="black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <img alt="" width="100px" src={profile} />
              <h1 className="">Profile</h1>
              <div className="mt3" style={{display:"flex"}}>
                <span> <h3> Name: </h3></span>
                <span> <h3> {name} </h3> </span>
              </div>
              <div className=""  style={{display:"flex"}}>
                <span> <h3> Email: </h3></span>
                <span> <h3> {email} </h3> </span>
              </div>
              <div className=""  style={{display:"flex"}}>
                <span> <h3> Entries Done: </h3></span>
                <span> <h3> {entries} </h3> </span>
              </div>
              <div className=""  style={{display:"flex"}}>
                <span> <h3> Joined: </h3></span>
                <span> <h3> {joined} </h3> </span>
              </div>
            </fieldset>
            <div className="mv3">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Back"
                onClick={() => onRouteChange('home')}
              />
            </div>
          </div>
        </main>
      </article>
	);
}

export default Profile;