import React from "react";
import { Gm_CardHover2Box, Gm_CardHover2Box_ListItem } from "./styles";
import profile from "./profile.jpg";
import { Icon } from "@mui/material";
const itemList = ["home", "person", "settings"];
export const Gm_CardHover2 = () => {
  return (
    <Gm_CardHover2Box>
      <div className="container">
        <div className="card">
          <div className="content">
            <div className="imgBx">
              <img src={profile} alt="img" />
            </div>
            <div className="contentBx">
              <h3>
                Someone Famous
                <br />
                <span>Creative Designer</span>
              </h3>
            </div>
          </div>
          <ul className="sci">
            {itemList.map((item, index) => {
              return (
                <Gm_CardHover2Box_ListItem key={index} num={index}>
                  <a href="#">
                    <Icon
                      className="icon"
                      baseClassName="material-icons-outlined"
                    >
                      {itemList[index]}
                    </Icon>
                  </a>
                </Gm_CardHover2Box_ListItem>
              );
            })}
          </ul>
        </div>
      </div>
    </Gm_CardHover2Box>
  );
};
