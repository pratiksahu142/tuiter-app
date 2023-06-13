import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {profileThunk, logoutThunk, updateUserThunk} from "../services/auth-thunks";
import {Navigate} from "react-router-dom";

function ProfileScreen() {
  const {currentUser} = useSelector((state) => state.user);
  const [profile, setProfile] = useState(currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const save = async () => {
    console.log(profile);
    const updatedProfile = await dispatch(updateUserThunk(profile));
    console.log(updatedProfile);
  };
  useEffect( () => {
    async function fetchProfile() {
      if(currentUser){
        const {payload} = await dispatch(profileThunk());
        console.log(payload);
        setProfile(payload);
      } else {
        navigate("/tuiter/login");
      }
    }
    fetchProfile();
  }, []);
  return (
      <div>
        <h1>Profile Screen</h1>
        {profile && (<div>
              <div className="mt-2">
                <label>First Name</label>
                <input className="form-control" type="text" value={profile.firstname}
                       onChange={(event) => {
                         const newProfile = {
                           ...profile, firstname: event.target.value,
                         };
                         setProfile(newProfile);
                       }}/>
              </div>
              <div className="mt-2">
                <label>Last Name</label>
                <input className="form-control" type="text" value={profile.lastname}
                       onChange={(event) => {
                         const newProfile = {
                           ...profile, lastname: event.target.value,
                         };
                         setProfile(newProfile);
                       }}/>
              </div>
            </div>
        )}
        <button
            className="btn btn-primary mt-2"
            onClick={() => {
              dispatch(logoutThunk());
              navigate("/tuiter/login");
            }}> Logout
        </button>
        <button className="btn btn-primary ms-3 mt-2" onClick={save}>Save</button>
      </div>);
}

export default ProfileScreen;