import React, { useCallback, useState, VFC } from "react";
import { ClaymorphismList_1Box, ListItem } from "./styles";
const TextitemList = [
  { title: "Ricardo Flanagan", content: "Digital Artist" },
  { title: "Muhammad Irshad", content: "UX/UI Designer" },
  { title: "Clara Jones", content: "Backend Developer" },
  { title: "Mark Devis", content: "Illustrator Designer" },
  { title: "Shara Anderson", content: "Food Vloggers" },
];
export const ClaymorphismList_1: VFC = () => {
  const [navItmeActiveState, setItmeActiveState] = useState(0);
  const onToggleNavItemActive = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setItmeActiveState(e.currentTarget.id);
    },
    [navItmeActiveState]
  );
  return (
    <ClaymorphismList_1Box>
      <ul className="container">
        <h3>Popular Creator List</h3>
        {TextitemList.map((item, index) => {
          return (
            <ListItem
              id={"" + index}
              className={navItmeActiveState == index ? "list active" : "list"}
              onClick={onToggleNavItemActive}
            >
              <div className="rank">
                <span>{index + 1}</span>
              </div>
              <div className="creator">
                <h4>{item.title}</h4>
                <p>{item.content}</p>
              </div>
            </ListItem>
          );
        })}
      </ul>
    </ClaymorphismList_1Box>
  );
};
