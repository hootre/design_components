import React from "react";
import { ProfileBox } from "./styles";
import profile from "./profile.jpg";

export const Profile = () => {
  return (
    <ProfileBox>
      <div className="container">
        <div className="card">
          <div className="imgBox">
            <img src={profile} alt="img" />
          </div>
          <div className="content">
            <div className="detalis">
              <h2>
                Alina Smith
                <br />
                <span>Senior UX/UI Designer</span>
              </h2>
              <div className="data">
                <h3>
                  342
                  <br />
                  <span>Posts</span>
                </h3>
                <h3>
                  120K
                  <br />
                  <span>Followers</span>
                </h3>
                <h3>
                  285
                  <br />
                  <span>Following</span>
                </h3>
              </div>
              <div className="actionBtn">
                <button>Follow</button>
                <button>Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProfileBox>
  );
};
